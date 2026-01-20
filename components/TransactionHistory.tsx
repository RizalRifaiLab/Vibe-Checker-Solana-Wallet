'use client';

import type { Transaction } from '@/types';

interface TransactionHistoryProps {
    transactions: Transaction[];
}

export default function TransactionHistory({ transactions }: TransactionHistoryProps) {
    const getTransactionColor = (type: string) => {
        switch (type) {
            case 'receive':
                return 'var(--terminal-green)';
            case 'send':
                return 'var(--neon-pink)';
            case 'swap':
                return 'var(--neon-yellow)';
            default:
                return 'var(--text-secondary)';
        }
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="glass" style={{ padding: '32px' }}>
            <h2 style={{ marginBottom: '24px' }}>
                &gt; Recent Transactions
            </h2>

            {transactions.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px' }}>
                    No recent transactions
                </p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--neon-cyan)' }}>
                                <th style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Type
                                </th>
                                <th style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Amount
                                </th>
                                <th style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Token
                                </th>
                                <th style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Time
                                </th>
                                <th style={{
                                    textAlign: 'left',
                                    padding: '12px',
                                    color: 'var(--neon-cyan)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Signature
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx) => (
                                <tr
                                    key={tx.signature}
                                    style={{
                                        borderBottom: '1px solid rgba(0, 255, 255, 0.1)',
                                        transition: 'background 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 255, 255, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    <td style={{ padding: '16px' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            background: `${getTransactionColor(tx.type)}20`,
                                            color: getTransactionColor(tx.type),
                                            border: `1px solid ${getTransactionColor(tx.type)}`
                                        }}>
                                            {tx.type}
                                        </span>
                                    </td>
                                    <td style={{
                                        padding: '16px',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {tx.amount.toFixed(4)}
                                    </td>
                                    <td style={{
                                        padding: '16px',
                                        color: 'var(--neon-magenta)',
                                        fontWeight: '500'
                                    }}>
                                        {tx.token}
                                    </td>
                                    <td style={{
                                        padding: '16px',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.85rem'
                                    }}>
                                        {formatDate(tx.timestamp)}
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <a
                                            href={`https://solscan.io/tx/${tx.signature}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: 'var(--neon-cyan)',
                                                textDecoration: 'none',
                                                fontSize: '0.85rem',
                                                fontFamily: 'monospace'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.textDecoration = 'underline';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.textDecoration = 'none';
                                            }}
                                        >
                                            {tx.signature.slice(0, 8)}...
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
