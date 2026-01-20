# 🌌 The Vibe Check

**Solana Wallet Mood Tracker** - A cyberpunk-styled analytics dashboard for Solana wallets

![Cyberpunk Dashboard](https://img.shields.io/badge/Style-Cyberpunk-ff00ff?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Solana](https://img.shields.io/badge/Solana-Mainnet-00ffff?style=for-the-badge&logo=solana)

## ✨ Features

- 🔍 **Wallet Analysis** - Enter any Solana wallet address and get insights
- 💰 **SOL Balance Display** - View wallet balance in large neon font
- 🪙 **Token Holdings** - See all SPL tokens with metadata
- 📊 **Transaction History** - View recent 10 transactions
- 🆕 **New Coin Detection** - Automatically detects newly purchased tokens
- 🎨 **Vibe Profile** - Generates a unique personality based on wallet activity
- 🏷️ **SVG Badges** - Custom vibe badges for different trading personalities
- 🌈 **Cyberpunk UI** - Terminal-style aesthetic with neon colors and animations

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ installed
- **Helius API Key** (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Solana-Wallet-Dashboard.git
   cd Solana-Wallet-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Helius API key:
   ```env
   NEXT_PUBLIC_HELIUS_API_KEY=your_actual_api_key_here
   ```

4. **Get a free Helius API key**
   - Go to [https://helius.dev](https://helius.dev)
   - Sign up for free
   - Create a new project
   - Copy your API key
   - Paste it into `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

1. Enter a Solana wallet address in the input field
2. Click **"RUN VIBE CHECK"**
3. View the wallet's:
   - SOL balance
   - Token holdings
   - Recent transactions
   - Vibe profile with custom badge

### Example Wallet Addresses

Try these public wallets:
- `7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU`
- `5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Blockchain**: Solana Web3.js
- **Token Data**: @solana/spl-token
- **RPC Provider**: Helius
- **Styling**: Vanilla CSS with cyberpunk theme
- **Font**: JetBrains Mono

## 📁 Project Structure

```
Solana-Wallet-Dashboard/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main dashboard page
│   └── globals.css          # Global styles & cyberpunk theme
├── components/
│   ├── WalletInput.tsx      # Wallet address input form
│   ├── BalanceDisplay.tsx   # SOL balance component
│   ├── TokenHoldings.tsx    # Token list component
│   ├── TransactionHistory.tsx # Transaction list
│   ├── VibeProfile.tsx      # Vibe analysis display
│   ├── VibeBadge.tsx        # SVG badge generator
│   ├── NewCoinNotification.tsx # New token alerts
│   └── MetaMaskSuppressor.tsx  # Handles MetaMask interference
├── lib/
│   ├── solana/
│   │   ├── connection.ts    # RPC connection setup
│   │   ├── wallet.ts        # Wallet balance & tokens
│   │   ├── transactions.ts  # Transaction fetching
│   │   └── tokens.ts        # Token metadata
│   └── vibe/
│       ├── analyzer.ts      # Vibe analysis logic
│       └── categories.ts    # Vibe categories & badges
├── types/
│   └── index.ts             # TypeScript types
└── .env.local               # Environment variables (not committed)
```

## 🎨 Vibe Categories

The app analyzes wallet activity and assigns personalities:

- 🐋 **Whale** - Large holdings, significant transactions
- 📈 **Bull** - Frequent buying, optimistic trading
- 📉 **Bear** - Defensive positions, selling activity
- 💎 **Diamond Hands** - Strong holders, minimal selling
- 🎲 **Degen** - High-risk trades, many new tokens
- 🤖 **Bot** - Automated patterns, rapid transactions
- 😴 **Sleeper** - Inactive wallet, no recent activity
- 🌊 **Surfer** - Balanced trading, riding trends
- 🎯 **Sniper** - Precision trading, strategic buys

## 🔐 Security Notes

- **Never commit `.env.local`** - It contains your API key
- The `.gitignore` already protects environment files
- API keys are loaded via environment variables only
- Client-side code uses `NEXT_PUBLIC_` prefix for browser access

## 🚢 Deployment
demo-app : https://vibe-checker-solana-wallet.vercel.app/

### Build for Production

```bash
npm run build
npm start
```

## 🐛 Known Issues

### MetaMask Console Errors

If you have MetaMask installed, you might see console errors about "Failed to connect to MetaMask". These are:
- **Harmless** - Your app works perfectly fine
- **Cosmetic only** - Just console noise from MetaMask trying to inject itself
- **Can be ignored** - Or disable MetaMask for localhost

The app includes a `MetaMaskSuppressor` component that handles this gracefully.

### RPC Rate Limits

- Free Helius tier: 100,000 requests/day
- If you hit limits, consider upgrading or using multiple API keys
- Public RPC endpoints are heavily rate-limited (not recommended)

## 📝 License

MIT License - feel free to use this project however you like!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Solana](https://solana.com/)
- RPC by [Helius](https://helius.dev/)
- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## 📧 Contact

For questions or feedback, feel free to open an issue on GitHub!

---

**Made with 💜 for the Solana community**
