'use client';

interface BalanceDisplayProps {
    balance: number;
}

export default function BalanceDisplay({ balance }: BalanceDisplayProps) {
    return (
        <div className="glass pulse" style={{
            padding: '48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))'
        }}>
            <div style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '3px'
            }}>
                WALLET BALANCE
            </div>
            <div className="glow-cyan" style={{
                fontSize: '4.5rem',
                fontWeight: '700',
                lineHeight: '1',
                marginBottom: '12px'
            }}>
                {balance.toFixed(4)}
            </div>
            <div style={{
                fontSize: '1.5rem',
                color: 'var(--neon-magenta)',
                textTransform: 'uppercase',
                letterSpacing: '4px'
            }}>
                SOL
            </div>
        </div>
    );
}
