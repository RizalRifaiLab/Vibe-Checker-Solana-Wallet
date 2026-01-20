'use client';

import { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { getWalletBalance, getTokenAccounts } from '@/lib/solana/wallet';
import { getRecentTransactions, detectNewCoinPurchases } from '@/lib/solana/transactions';
import { enrichTokenWithMetadata } from '@/lib/solana/tokens';
import type { WalletData } from '@/types';

interface WalletInputProps {
    onSubmit: (data: WalletData) => void;
    loading: boolean;
}

export default function WalletInput({ onSubmit, loading }: WalletInputProps) {
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Validate Solana address
            new PublicKey(address);

            // Fetch all wallet data
            const [balance, tokens, transactions] = await Promise.all([
                getWalletBalance(address),
                getTokenAccounts(address),
                getRecentTransactions(address, 10),
            ]);

            // Enrich tokens with metadata
            const enrichedTokens = await Promise.all(
                tokens.map(token => enrichTokenWithMetadata(token))
            );

            // Detect new coin purchases
            const newCoins = detectNewCoinPurchases(transactions);

            const walletData: WalletData = {
                address,
                balance,
                tokens: enrichedTokens,
                transactions,
                newCoins,
            };

            onSubmit(walletData);
        } catch (err: any) {
            setError(err.message || 'Invalid Solana address');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="glass" style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '12px',
                        color: 'var(--neon-cyan)',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        &gt; ENTER SOLANA WALLET ADDRESS
                    </label>
                    <input
                        type="text"
                        className="input"
                        placeholder="e.g., 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                {error && (
                    <div style={{
                        padding: '12px',
                        marginBottom: '20px',
                        background: 'rgba(255, 0, 0, 0.1)',
                        border: '1px solid var(--neon-pink)',
                        borderRadius: '4px',
                        color: 'var(--neon-pink)',
                        fontSize: '0.9rem'
                    }}>
                        ERROR: {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn"
                    disabled={isLoading || !address}
                    style={{ width: '100%' }}
                >
                    {isLoading ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <div className="spinner" style={{ width: '20px', height: '20px' }}></div>
                            ANALYZING...
                        </span>
                    ) : (
                        'RUN VIBE CHECK'
                    )}
                </button>
            </form>
        </div>
    );
}
