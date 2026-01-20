// Token metadata cache to avoid repeated API calls
const tokenCache = new Map<string, { symbol: string; name: string }>();

export async function getTokenMetadata(mint: string): Promise<{ symbol: string; name: string }> {
    if (tokenCache.has(mint)) {
        return tokenCache.get(mint)!;
    }

    // For this simple implementation, we'll use known token addresses
    // In production, you'd fetch from a token list API
    const knownTokens: Record<string, { symbol: string; name: string }> = {
        'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': { symbol: 'USDC', name: 'USD Coin' },
        'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB': { symbol: 'USDT', name: 'Tether USD' },
        'So11111111111111111111111111111111111111112': { symbol: 'wSOL', name: 'Wrapped SOL' },
    };

    const metadata = knownTokens[mint] || {
        symbol: mint.slice(0, 4).toUpperCase(),
        name: 'Unknown Token',
    };

    tokenCache.set(mint, metadata);
    return metadata;
}

export function enrichTokenWithMetadata(token: any): Promise<any> {
    return getTokenMetadata(token.mint).then(metadata => ({
        ...token,
        symbol: metadata.symbol,
        name: metadata.name,
    }));
}
