# The Vibe Check - Quick Start Guide

## Fix RPC Access Issue

The app is built and working, but the Solana public RPC is rate-limited. Here's how to fix it:

### Step 1: Get a Free API Key

Sign up for a free RPC provider:
- **Helius** (Recommended): https://helius.dev
- **QuickNode**: https://quicknode.com  
- **Alchemy**: https://alchemy.com

### Step 2: Update Connection File

Edit `lib/solana/connection.ts`:

```typescript
import { Connection } from '@solana/web3.js';

// Replace with your RPC endpoint
export const connection = new Connection(
  'https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY_HERE',
  'confirmed'
);

export function getConnection(): Connection {
  return connection;
}
```

### Step 3: Test It Out

1. Start the dev server: `npm run dev`
2. Open: http://localhost:3000
3. Enter a wallet address
4. Click "RUN VIBE CHECK"

## Example Test Wallets

Try these addresses:
- `7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU`
- `5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9`

## That's It!

The app is complete and ready to use. Just add your RPC API key and you're good to go! 🚀
