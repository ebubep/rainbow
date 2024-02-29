import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rainbow Project",
  description: "Buy Rainbow now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> 
          <div className="drawer">
            
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>
                    
                  </p>
                </footer>
              </div>
            </div>
            
          </div>
         </Providers>
      </body>
    </html>
  )
}
