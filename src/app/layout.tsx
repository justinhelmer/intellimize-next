import {Inter} from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <style>{`.anti-flicker, .anti-flicker * {visibility: hidden !important; opacity: 0 !important;}`}</style>
      <script
      dangerouslySetInnerHTML={{ __html: `(function(e,t,p){var n=document.documentElement,s={p:[],r:[]},u={p:s.p,r:s.r,push:function(e){s.p.push(e)},ready:function(e){s.r.push(e)}};e.intellimize=u,n.className+=" "+p,setTimeout(function(){n.className=n.className.replace(RegExp(" ?"+p),"")},t)})(window,4000, 'anti-flicker')`}}>
      </script>
      <link rel="preload" href="https://cdn.intellimize.co/snippet/117283700.js" as="script"/>
      <script src="https://cdn.intellimize.co/snippet/117283700.js" async></script>
      <link rel="preconnect" href="https://api.intellimize.co" crossOrigin=""/>
      <link rel="preconnect" href="https://117283700.intellimizeio.com"/>
      <link rel="preconnect" href="https://log.intellimize.co" crossOrigin=""/>
    </head>
    <body className={inter.className}>
    <nav style={{textAlign: 'center', paddingBlock: '30px', display: 'flex', gap: '20px', justifyContent: 'center'}}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
    </body>
    </html>
  );
}
