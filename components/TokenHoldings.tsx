'use client';

import type { TokenHolding } from '@/types';

interface TokenHoldingsProps {
    tokens: TokenHolding[];
}

export default function TokenHoldings({ tokens }: TokenHoldingsProps) {
    return (
        <div className="glass" style={{ padding: '32px' }}>
            <h2 style={{ marginBottom: '24px' }}>
                &gt; Token Holdings
            </h2>

            {tokens.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px' }}>
                    No tokens found in wallet
                </p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tokens.slice(0, 10).map((token, index) => (
                        <div
                            key={token.mint}
                            style={{
                                padding: '16px',
                                background: 'var(--bg-secondary)',
                                border: token.isNew
                                    ? '2px solid var(--neon-yellow)'
                                    : '1px solid rgba(0, 255, 255, 0.2)',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {token.isNew && (
                                <div style={{
                                    position: 'absolute',
                                    top: '8px',
                                    right: '8px',
                                    padding: '4px 8px',
                                    background: 'var(--neon-yellow)',
                                    color: 'var(--bg-primary)',
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    borderRadius: '4px',
                                    textTransform: 'uppercase'
                                }}>
                                    NEW
                                </div>
                            )}

                            <div>
                                <div style={{
                                    fontWeight: '600',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '1.1rem',
                                    marginBottom: '4px'
                                }}>
                                    {token.symbol}
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {token.name}
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div className="glow-green" style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600'
                                }}>
                                    {token.uiAmount.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    ))}

                    {tokens.length > 10 && (
                        <p style={{
                            textAlign: 'center',
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            marginTop: '8px'
                        }}>
                            + {tokens.length - 10} more tokens
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
