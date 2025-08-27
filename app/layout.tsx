import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  // SNSシェア見出し（OG/Twitter共通）
  title: "会津ブランド館 極上チャーシュー | 累計10万食突破の人気商品を通販で",
  description:
    "楽天市場月間優良ショップ受賞！会津の老舗が作る極上チャーシュー。冷凍・レトルトの2種類をご用意。職人の技が光る本格的な味をご家庭で。全国配送対応。",
  metadataBase: new URL("https://chasiu.aizu-syokubura.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "会津ブランド館 極上チャーシュー | 累計10万食突破の人気商品を通販で",
    description:
      "楽天市場月間優良ショップ受賞！会津の老舗が作る極上チャーシュー。冷凍・レトルトの2種類をご用意。職人の技が光る本格的な味をご家庭で。",
    url: "https://chasiu.aizu-syokubura.com/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-BMdcg9s5JIa43MvynMs4FFcxtEqr63.jpeg",
        width: 1200,
        height: 630,
        alt: "会津ブランド館の極上チャーシュー",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "会津ブランド館 極上チャーシュー | 累計10万食突破の人気商品を通販で",
    description: "楽天市場月間優良ショップ受賞！会津の老舗が作る極上チャーシューをご家庭で。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-BMdcg9s5JIa43MvynMs4FFcxtEqr63.jpeg",
    ],
  },
  keywords:
    "チャーシュー,会津ブランド館,冷凍チャーシュー,レトルトチャーシュー,福島県,会津若松,本格派,職人,ラーメン具材,楽天,Amazon,Yahoo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QF0C5C17LW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF0C5C17LW');
          `}
        </Script>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
