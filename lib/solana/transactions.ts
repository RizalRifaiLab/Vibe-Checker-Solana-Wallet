import { PublicKey } from '@solana/web3.js';
import { getConnection } from './connection';
import type { Transaction } from '@/types';

export async function getRecentTransactions(address: string, limit: number = 10): Promise<Transaction[]> {
  try {
    const connection = getConnection();
    const publicKey = new PublicKey(address);
    
    const signatures = await connection.getSignaturesForAddress(publicKey, {
      limit,
    });

    const transactions: Transaction[] = [];

    for (const sig of signatures) {
      if (!sig.blockTime) continue;

      const tx = await connection.getParsedTransaction(sig.signature, {
        maxSupportedTransactionVersion: 0,
      });

      if (!tx) continue;

      // Analyze transaction to determine type and details
      const type = analyzeTransactionType(tx, address);
      const amount = extractTransactionAmount(tx);
      const token = extractTokenSymbol(tx);

      transactions.push({
        signature: sig.signature,
        timestamp: sig.blockTime * 1000,
        type,
        amount,
        token,
      });
    }

    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
}

function analyzeTransactionType(tx: any, walletAddress: string): 'send' | 'receive' | 'swap' | 'unknown' {
  try {
    const preBalances = tx.meta?.preBalances || [];
    const postBalances = tx.meta?.postBalances || [];
    
    // Simple heuristic: if balance decreased, it's a send; if increased, it's a receive
    const balanceChange = postBalances[0] - preBalances[0];
    
    if (balanceChange < 0) return 'send';
    if (balanceChange > 0) return 'receive';
    
    // Check for token transfers
    const tokenBalanceChanges = tx.meta?.postTokenBalances?.length || 0;
    if (tokenBalanceChanges > 1) return 'swap';
    
    return 'unknown';
  } catch {
    return 'unknown';
  }
}

function extractTransactionAmount(tx: any): number {
  try {
    const preBalance = tx.meta?.preBalances?.[0] || 0;
    const postBalance = tx.meta?.postBalances?.[0] || 0;
    return Math.abs(postBalance - preBalance) / 1e9;
  } catch {
    return 0;
  }
}

function extractTokenSymbol(tx: any): string {
  try {
    // Check for token transfers
    const postTokenBalances = tx.meta?.postTokenBalances || [];
    if (postTokenBalances.length > 0) {
      return 'TOKEN';
    }
    return 'SOL';
  } catch {
    return 'SOL';
  }
}

export function detectNewCoinPurchases(transactions: Transaction[]): string[] {
  const newCoins: string[] = [];
  const recentPurchases = transactions
    .filter(tx => tx.type === 'receive' || tx.type === 'swap')
    .slice(0, 5);

  recentPurchases.forEach(tx => {
    if (tx.token !== 'SOL') {
      newCoins.push(tx.token);
    }
  });

  return [...new Set(newCoins)];
}
