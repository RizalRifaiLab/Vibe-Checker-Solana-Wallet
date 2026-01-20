import { Connection } from '@solana/web3.js';

// Using Helius RPC endpoint with API key from environment variables
// Get your free API key from: https://helius.dev
const HELIUS_API_KEY = process.env.NEXT_PUBLIC_HELIUS_API_KEY || '';

export const connection = new Connection(
    `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`,
    {
        commitment: 'confirmed',
        wsEndpoint: undefined,
    }
);

export function getConnection(): Connection {
    return connection;
}
