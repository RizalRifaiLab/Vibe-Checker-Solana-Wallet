'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function MetaMaskSuppressor() {
    useEffect(() => {
        // Aggressive error suppression
        const originalError = console.error;
        console.error = (...args) => {
            const message = args[0]?.toString() || '';
            if (message.includes('MetaMask') || message.includes('ethereum')) {
                // Silently ignore MetaMask errors
                return;
            }
            originalError.apply(console, args);
        };

        // Global error handler
        const handleError = (event: ErrorEvent) => {
            const message = event.message || '';
            if (message.includes('MetaMask') || message.includes('ethereum')) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                return false;
            }
        };

        // Unhandled rejection handler
        const handleRejection = (event: PromiseRejectionEvent) => {
            const message = event.reason?.toString() || '';
            if (message.includes('MetaMask') || message.includes('ethereum')) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        };

        window.addEventListener('error', handleError, true);
        window.addEventListener('unhandledrejection', handleRejection, true);

        return () => {
            console.error = originalError;
            window.removeEventListener('error', handleError, true);
            window.removeEventListener('unhandledrejection', handleRejection, true);
        };
    }, []);

    return (
        <>
            <Script id="metamask-blocker" strategy="beforeInteractive">
                {`
                    // Block MetaMask injection before page loads
                    (function() {
                        // Override ethereum object
                        Object.defineProperty(window, 'ethereum', {
                            get: function() { return undefined; },
                            set: function() { return false; },
                            configurable: false
                        });
                        
                        // Suppress errors
                        window.addEventListener('error', function(e) {
                            if (e.message && (e.message.includes('MetaMask') || e.message.includes('ethereum'))) {
                                e.preventDefault();
                                e.stopPropagation();
                                e.stopImmediatePropagation();
                                return false;
                            }
                        }, true);
                        
                        window.addEventListener('unhandledrejection', function(e) {
                            if (e.reason && e.reason.toString && e.reason.toString().includes('MetaMask')) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }
                        }, true);
                    })();
                `}
            </Script>
        </>
    );
}
