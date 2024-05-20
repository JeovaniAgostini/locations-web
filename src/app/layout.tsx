import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { neobrutalism } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider localization={ptBR} appearance={{
            baseTheme: neobrutalism, elements: {
                // formButtonPrimary: 'bg-violet-500 hover:bg-violet-500'
            }
        }}>
            <html lang="en">
                <body className={inter.className}>
                    <div className="h-screen flex justify-center items-center">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}
