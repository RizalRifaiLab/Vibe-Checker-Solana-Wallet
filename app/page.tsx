'use client';

import { useState } from 'react';
import WalletInput from '@/components/WalletInput';
import BalanceDisplay from '@/components/BalanceDisplay';
import VibeProfile from '@/components/VibeProfile';
import TokenHoldings from '@/components/TokenHoldings';
import TransactionHistory from '@/components/TransactionHistory';
import NewCoinNotification from '@/components/NewCoinNotification';
import MetaMaskSuppressor from '@/components/MetaMaskSuppressor';
import type { WalletData } from '@/types';

export default function Home() {
    const [walletData, setWalletData] = useState<WalletData | null>(null);
    const [loading, setLoading] = useState(false);

    const handleWalletSubmit = async (data: WalletData) => {
        setLoading(true);
        setWalletData(data);
        setLoading(false);
    };

    return (
        <main className="container">
            <MetaMaskSuppressor />

            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="glow-cyan">THE VIBE CHECK</h1>
                <p className="glow" style={{ color: 'var(--neon-magenta)', fontSize: '1.2rem' }}>
                    SOLANA WALLET MOOD TRACKER
                </p>
            </header>

            <WalletInput onSubmit={handleWalletSubmit} loading={loading} />

            {walletData && (
                <>
                    <NewCoinNotification newCoins={walletData.newCoins} />

                    <div style={{ marginTop: '40px' }}>
                        <BalanceDisplay balance={walletData.balance} />
                    </div>

                    <div className="grid grid-2" style={{ marginTop: '40px' }}>
                        <VibeProfile walletData={walletData} />
                        <TokenHoldings tokens={walletData.tokens} />
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <TransactionHistory transactions={walletData.transactions} />
                    </div>
                </>
            )}

            {!walletData && !loading && (
                <div style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    padding: '40px',
                    color: 'var(--text-secondary)'
                }}>
                    <p style={{ fontSize: '1.1rem' }}>
                        &gt; ENTER A SOLANA WALLET ADDRESS TO BEGIN THE VIBE CHECK_
                    </p>
                </div>
            )}
        </main>
    );
}
