import type { WalletData, VibeProfile, VibeCategory } from '@/types';
import { vibeCategories } from './categories';

export function analyzeWalletVibe(walletData: WalletData): VibeProfile {
    const { balance, tokens, transactions, newCoins } = walletData;

    // Calculate metrics
    const tokenCount = tokens.length;
    const transactionCount = transactions.length;
    const recentActivity = transactions.filter(tx => {
        const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
        return tx.timestamp > dayAgo;
    }).length;

    const sendCount = transactions.filter(tx => tx.type === 'send').length;
    const receiveCount = transactions.filter(tx => tx.type === 'receive').length;
    const swapCount = transactions.filter(tx => tx.type === 'swap').length;

    // Determine vibe category based on analysis
    let category: VibeCategory = 'hodl-master';

    // Whale Watcher: High balance
    if (balance > 100) {
        category = 'whale-watcher';
    }
    // Moon Boy: Recent new coin purchases
    else if (newCoins.length >= 2) {
        category = 'moon-boy';
    }
    // Chaos Trader: High transaction volume
    else if (transactionCount >= 8 && tokenCount >= 3) {
        category = 'chaos-trader';
    }
    // Panic Seller: More sends than receives
    else if (sendCount > receiveCount && sendCount >= 3) {
        category = 'panic-seller';
    }
    // Paper Hands: Quick in and out
    else if (recentActivity >= 5) {
        category = 'paper-hands';
    }
    // Diamond Hand: High balance with low activity
    else if (balance > 10 && transactionCount < 5) {
        category = 'diamond-hand';
    }
    // NFT Degen: Multiple swap transactions
    else if (swapCount >= 3) {
        category = 'nft-degen';
    }
    // Default: HODL Master
    else {
        category = 'hodl-master';
    }

    const categoryDef = vibeCategories[category];

    return {
        category,
        name: categoryDef.name,
        description: categoryDef.description,
        traits: categoryDef.traits,
        color: categoryDef.color,
        emoji: categoryDef.emoji,
    };
}
