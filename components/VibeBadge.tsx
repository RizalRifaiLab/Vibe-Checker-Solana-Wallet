'use client';

import type { VibeProfile } from '@/types';

interface VibeBadgeProps {
    vibe: VibeProfile;
}

export default function VibeBadge({ vibe }: VibeBadgeProps) {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120">
            <defs>
                <linearGradient id={`gradient-${vibe.category}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: vibe.color, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: vibe.color, stopOpacity: 0.5 }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer ring */}
            <circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke={vibe.color}
                strokeWidth="2"
                opacity="0.3"
            />

            {/* Inner circle */}
            <circle
                cx="60"
                cy="60"
                r="45"
                fill={`url(#gradient-${vibe.category})`}
                opacity="0.2"
                filter="url(#glow)"
            />

            {/* Center circle */}
            <circle
                cx="60"
                cy="60"
                r="40"
                fill="none"
                stroke={vibe.color}
                strokeWidth="3"
                filter="url(#glow)"
            >
                <animate
                    attributeName="r"
                    values="38;42;38"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Emoji */}
            <text
                x="60"
                y="70"
                fontSize="36"
                textAnchor="middle"
                fill={vibe.color}
            >
                {vibe.emoji}
            </text>
        </svg>
    );
}
