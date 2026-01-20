'use client';

import { useState, useEffect } from 'react';

interface NewCoinNotificationProps {
    newCoins: string[];
}

export default function NewCoinNotification({ newCoins }: NewCoinNotificationProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (newCoins.length > 0) {
            setShow(true);
            const timer = setTimeout(() => setShow(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [newCoins]);

    if (newCoins.length === 0) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1000,
                animation: show ? 'slideIn 0.3s ease-out' : 'slideOut 0.3s ease-out',
                opacity: show ? 1 : 0,
                pointerEvents: show ? 'auto' : 'none'
            }}
        >
            <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `}</style>

            <div className="glass" style={{
                padding: '20px 24px',
                minWidth: '300px',
                background: 'rgba(255, 255, 0, 0.1)',
                border: '2px solid var(--neon-yellow)',
                boxShadow: '0 0 30px rgba(255, 255, 0, 0.3)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px'
                }}>
                    <div style={{
                        fontSize: '2rem'
                    }}>
                        🚀
                    </div>
                    <div>
                        <div style={{
                            color: 'var(--neon-yellow)',
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            New Coins Detected!
                        </div>
                        <div style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem'
                        }}>
                            Recent acquisitions
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                }}>
                    {newCoins.map((coin, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '6px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--neon-yellow)',
                                borderRadius: '4px',
                                color: 'var(--neon-yellow)',
                                fontSize: '0.85rem',
                                fontWeight: '600'
                            }}
                        >
                            {coin}
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setShow(false)}
                    style={{
                        marginTop: '12px',
                        padding: '8px 16px',
                        background: 'transparent',
                        border: '1px solid var(--neon-yellow)',
                        color: 'var(--neon-yellow)',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        width: '100%',
                        fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--neon-yellow)';
                        e.currentTarget.style.color = 'var(--bg-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--neon-yellow)';
                    }}
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
}
