export interface TokenHolding {
    mint: string;
    symbol: string;
    name: string;
    amount: number;
    decimals: number;
    uiAmount: number;
    isNew?: boolean;
}

export interface Transaction {
    signature: string;
    timestamp: number;
    type: 'send' | 'receive' | 'swap' | 'unknown';
    amount: number;
    token: string;
    counterparty?: string;
}

export interface WalletData {
    address: string;
    balance: number;
    tokens: TokenHolding[];
    transactions: Transaction[];
    newCoins: string[];
}

export interface VibeProfile {
    category: VibeCategory;
    name: string;
    description: string;
    traits: string[];
    color: string;
    emoji: string;
}

export type VibeCategory =
    | 'diamond-hand'
    | 'chaos-trader'
    | 'nft-degen'
    | 'hodl-master'
    | 'panic-seller'
    | 'moon-boy'
    | 'whale-watcher'
    | 'paper-hands';
