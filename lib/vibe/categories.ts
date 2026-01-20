import type { VibeCategory } from '@/types';

interface VibeCategoryDefinition {
    name: string;
    description: string;
    traits: string[];
    color: string;
    emoji: string;
}

export const vibeCategories: Record<VibeCategory, VibeCategoryDefinition> = {
    'diamond-hand': {
        name: 'The Diamond Hand',
        description: 'Unshakeable conviction. You HODL through the storms and never sell at a loss.',
        traits: ['High Balance', 'Low Activity', 'Long-term Vision', 'Iron Nerves'],
        color: '#00ffff',
        emoji: '💎',
    },
    'chaos-trader': {
        name: 'The Chaos Trader',
        description: 'Pure adrenaline. You thrive on volatility and live for the next trade.',
        traits: ['High Volume', 'Multiple Tokens', 'Fast Moves', 'Risk Lover'],
        color: '#ff00ff',
        emoji: '🌪️',
    },
    'nft-degen': {
        name: 'The NFT Degen',
        description: 'JPEGs are your life. You ape into every mint and flip for profit.',
        traits: ['NFT Focus', 'Quick Flips', 'Community Driven', 'FOMO Master'],
        color: '#ff1493',
        emoji: '🎨',
    },
    'hodl-master': {
        name: 'The HODL Master',
        description: 'Patience is your superpower. You accumulate and wait for the inevitable pump.',
        traits: ['Minimal Activity', 'Strong Position', 'Buy & Hold', 'Zen Mode'],
        color: '#39ff14',
        emoji: '🧘',
    },
    'panic-seller': {
        name: 'The Panic Seller',
        description: 'Red candles terrify you. You sell at the first sign of trouble.',
        traits: ['High Sell Activity', 'Loss Realization', 'Emotional Trading', 'Paper Hands'],
        color: '#ff0000',
        emoji: '😰',
    },
    'moon-boy': {
        name: 'The Moon Boy',
        description: 'Every coin is going to 100x. You chase pumps and dream of lambos.',
        traits: ['New Purchases', 'Trend Follower', 'Optimistic', 'WAGMI Believer'],
        color: '#ffff00',
        emoji: '🚀',
    },
    'whale-watcher': {
        name: 'The Whale Watcher',
        description: 'Big moves only. You have the capital and you use it strategically.',
        traits: ['Large Balance', 'Strategic Trades', 'Market Mover', 'Smart Money'],
        color: '#0ff',
        emoji: '🐋',
    },
    'paper-hands': {
        name: 'The Paper Hands',
        description: 'In and out quickly. You take profits fast and never look back.',
        traits: ['Quick Exits', 'Profit Taker', 'Active Trader', 'Risk Manager'],
        color: '#ff6b6b',
        emoji: '📄',
    },
};
