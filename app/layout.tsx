import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "ラーメン屋が作る本物のチャーシュー | 累計10万セット販売突破 | 会津ブランド館",
  description:
    '累計10万セット販売突破！ご家庭で"ラーメン店の味"を再現。職人が作る本格チャーシューを冷凍・レトルトでお届け。送料無料・即日発送対応。',
  openGraph: {
    title: "ラーメン屋が作る本物のチャーシュー | 累計10万セット販売突破",
    description:
      'ご家庭で"ラーメン店の味"を再現。職人が作る本格チャーシューを冷凍・レトルトでお届け。送料無料・即日発送対応。',
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "ラーメン屋が作る本物のチャーシュー",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "ラーメン屋が作る本物のチャーシュー | 累計10万セット販売突破",
    description: 'ご家庭で"ラーメン店の味"を再現。職人が作る本格チャーシューをお届け。',
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  keywords: "チャーシュー,ラーメン,冷凍食品,レトルト,会津ブランド館,本格,職人,家庭用",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
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
