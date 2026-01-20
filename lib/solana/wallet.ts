import { PublicKey } from '@solana/web3.js';
import { getConnection } from './connection';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import type { TokenHolding } from '@/types';

export async function getWalletBalance(address: string): Promise<number> {
    try {
        const connection = getConnection();
        const publicKey = new PublicKey(address);
        const balance = await connection.getBalance(publicKey);
        return balance / 1e9; // Convert lamports to SOL
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        throw new Error('Failed to fetch wallet balance');
    }
}

export async function getTokenAccounts(address: string): Promise<TokenHolding[]> {
    try {
        const connection = getConnection();
        const publicKey = new PublicKey(address);

        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
            programId: TOKEN_PROGRAM_ID,
        });

        const holdings: TokenHolding[] = tokenAccounts.value
            .filter(account => {
                const amount = account.account.data.parsed.info.tokenAmount.uiAmount;
                return amount && amount > 0;
            })
            .map(account => {
                const info = account.account.data.parsed.info;
                const tokenAmount = info.tokenAmount;

                return {
                    mint: info.mint,
                    symbol: 'UNKNOWN', // Will be populated by token metadata
                    name: 'Unknown Token',
                    amount: tokenAmount.amount,
                    decimals: tokenAmount.decimals,
                    uiAmount: tokenAmount.uiAmount,
                };
            });

        return holdings;
    } catch (error) {
        console.error('Error fetching token accounts:', error);
        return [];
    }
}
