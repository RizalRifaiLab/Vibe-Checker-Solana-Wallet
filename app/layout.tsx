import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: 'The Vibe Check - Solana Wallet Mood Tracker',
    description: 'Cyberpunk Solana wallet analyzer - Check your wallet vibe and trading personality',
    keywords: ['Solana', 'Wallet', 'Crypto', 'Blockchain', 'Vibe Check'],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.className}>{children}</body>
        </html>
    )
}
