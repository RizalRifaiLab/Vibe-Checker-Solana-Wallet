'use client';

import { analyzeWalletVibe } from '@/lib/vibe/analyzer';
import VibeBadge from './VibeBadge';
import type { WalletData } from '@/types';

interface VibeProfileProps {
    walletData: WalletData;
}

export default function VibeProfile({ walletData }: VibeProfileProps) {
    const vibe = analyzeWalletVibe(walletData);

    return (
        <div className="glass" style={{ padding: '32px' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '24px'
            }}>
                <VibeBadge vibe={vibe} />
                <div>
                    <h2 style={{
                        color: vibe.color,
                        marginBottom: '8px',
                        fontSize: '1.8rem'
                    }}>
                        {vibe.emoji} {vibe.name}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        {vibe.description}
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '24px' }}>
                <h3 style={{
                    fontSize: '1rem',
                    color: 'var(--neon-cyan)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    &gt; Traits
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                }}>
                    {vibe.traits.map((trait, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '12px 16px',
                                background: 'var(--bg-secondary)',
                                border: `1px solid ${vibe.color}40`,
                                borderRadius: '4px',
                                fontSize: '0.85rem',
                                color: vibe.color,
                                textAlign: 'center'
                            }}
                        >
                            {trait}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
