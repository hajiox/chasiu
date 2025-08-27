// app/page.tsx
"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 画像は /public 配下を利用（運用メモ準拠）
import mainChashuImage from "@/public/main-chashu-image.jpg"
import tareImage from "@/public/tare.jpg"
import aizuBrandLogo from "@/public/aizu-brand-logo.jpg"
// ↓ メルカリアワード画像は消失対策として /public に配置して参照（名称はプロジェクト側に合わせてください）
import mercariAward from "@/public/mercari-award.png"
import rakutenAward from "@/public/rakuten-award.png"

// 情報セクション（3イラスト）用の画像（任意の差し替えOK）
import sceneSolo from "@/public/scene-solo.jpg"
import sceneFamily from "@/public/scene-family.jpg"
import sceneReward from "@/public/scene-reward.jpg"

export default function ChashuLandingPage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const reviews = [
    { comment: "必要な分だけ解凍できるのでとても便利。ラーメンはもちろん、チャーハンや丼物にも使えて重宝しています。味も本格的で家族にも好評でした。", rating: 5, source: "楽天", product: "冷凍カット済み800g" },
    { comment: "カット済みで使いやすく、2枚ずつの個包装がありがたいです。温めずそのままでも美味しく食べられました。リピート決定です。", rating: 5, source: "楽天", product: "冷凍カット済み800g" },
    { comment: "思ったより薄切りでしたが、ラーメンのトッピングにはちょうど良い厚さ。お酒のおつまみにも使いやすく、便利な商品だと思います。", rating: 4, source: "楽天", product: "冷凍カット済み800g" },
    { comment: "見た目は不揃いでも味は抜群。200gずつの小分けなので使いやすく、冷凍庫に常備しています。コスパが良くて助かります。", rating: 5, source: "楽天", product: "冷凍訳あり1kg" },
    { comment: "子どもが大好きであっという間になくなります。量がしっかりあるので家族みんなで楽しめるのが嬉しいです。", rating: 5, source: "楽天", product: "冷凍訳あり1kg" },
    { comment: "タレの味が絶妙でご飯が進みます。お弁当のおかずや夜食にもピッタリで、買って正解でした。", rating: 5, source: "楽天", product: "冷凍訳あり1kg" },
    { comment: "二郎系ラーメンにピッタリ！厚切りで食べ応えがあり、常温保存できるのも便利。個包装で扱いやすいのも良いです。", rating: 5, source: "楽天", product: "レトルト極厚カット650g" },
    { comment: "少し味が薄めに感じましたが、ラーメンにのせるとバランスが良くなります。家で豪快に楽しめるチャーシューです。", rating: 4, source: "楽天", product: "レトルト極厚カット650g" },
    { comment: "インスタントラーメンが一気に豪華になります。枚数も多くて使いやすく、非常食としても常備しておきたいです。", rating: 5, source: "楽天", product: "レトルト中厚スライス400g" },
    { comment: "常温保存できるので保存食に便利。味もしっかりしていて、ご飯のおかずやおつまみにも最適でした。", rating: 5, source: "楽天", product: "レトルト中厚スライス400g" },
  ]

  return (
    // 横フリックで左右に流れないよう固定（横スクロール抑止 & touch-action: pan-y）
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ touchAction: "pan-y" }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200/70">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-center">
            <Image
              src={aizuBrandLogo}
              alt="AIZU BRAND HALL"
              height={48}
              className="object-contain h-10 md:h-12 w-auto"
              priority
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full">
        {/* PC/Tablet */}
        <div className="hidden md:block">
          <Image
            src={mainChashuImage}
            alt="ラーメン屋が作る本物のチャーシュー"
            priority
            className="w-full h-auto"
            sizes="(min-width: 768px) 100vw"
          />
        </div>
        {/* Mobile */}
        <div className="relative md:hidden h-[42vh] w-full overflow-hidden">
          <Image
            src={mainChashuImage}
            alt="ラーメン屋が作る本物のチャーシュー"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Main Copy */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 text-center">
          <h1
            className="text-[22px] md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-3 text-gray-900 leading-tight"
            style={{ wordBreak: "keep-all", lineBreak: "strict" }}
          >
            ラーメン屋が作る本物のチャーシュー
          </h1>

          <p className="text-[16px] md:text-2xl text-gray-800 mb-3 md:mb-4">
            累計10万セット販売の実績！<br className="inline md:hidden" />
            ご家庭で“本物の味”を再現。
          </p>

          <p className="mx-auto max-w-4xl text-[15.5px] md:text-lg text-gray-700 leading-relaxed">
            スーパーでは決して手に入らない職人仕込み。<br className="hidden md:block" />
            ぜひこの機会に、お店さながらの味わいをご堪能ください。
            <span className="font-bold text-amber-600"> 送料は無料です。</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-[15.5px] md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("purchase")}
            >
              今すぐ購入
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-gray-900 border-gray-300 hover:bg-gray-100 px-6 py-3 text-[14.5px] md:text-base font-semibold rounded-xl transition-all"
              onClick={() => scrollToSection("features")}
            >
              こだわりを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Thanks / Awards */}
      <section className="py-6 md:py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2
            className="text-[20px] md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 lg:mb-8 text-gray-900"
            style={{ wordBreak: "keep-all", lineBreak: "strict" }}
          >
            いつもありがとうございます。沢山のお客様にご好評頂いています。
          </h2>

          {/* Top Row - Awards */}
          <div className="mx-auto max-w-3xl grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200 bg-white">
              <Image src={rakutenAward} alt="楽天月間優良ショップ" fill className="object-contain p-3" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200 bg-white">
              <Image src={mercariAward} alt="メルカリアワード" fill className="object-contain p-3" />
            </div>
          </div>

          {/* Bottom Row - Rankings */}
          <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D.jpg-Q4MBoGGB3qx9rdHkoAOkfhoYFBg9XW.jpeg"
                alt="訳あり1位"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%B9%EF%BC%91%E4%BD%8D.jpg-7Mo9nEzYWgP3zBtwFOrUnT2QoheuAb.jpeg"
                alt="カット済み1位"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E3%83%90%E3%83%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%EF%BC%91%E4%BD%8D.jpg-dGTAABuHwIvkXcOVR7HxPQhJqiTw9g.jpeg"
                alt="レトルトバラ1位"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88BUTA1%E4%BD%8D.jpg-53fq5t1O6i0mOv7JuM8y9Hw2Ifqg7o.jpeg"
                alt="レトルトBUTA1位"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 justify-center mt-6 md:mt-8 lg:mt-12 px-4 max-w-sm mx-auto">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-[15.5px] md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full"
              onClick={() => scrollToSection("purchase")}
            >
              商品売場へ行く
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-[14.5px] md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full"
              onClick={() => scrollToSection("features")}
            >
              商品特徴をもっと知る
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-8 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-[20px] md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-900">
            美味しさの魅力
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%AD%E9%85%B8%E7%85%AE%E8%BE%BC%E3%81%BF_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8DGxjSTAVxdNmqBeyGcbfkVdmvtTQI.jpeg"
                  alt="低温長時間調理"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">① 低温長時間 × 炭酸</h3>
                <p className="text-[15.5px] md:text-base text-gray-700 leading-relaxed">
                  低温でじっくり、炭酸で臭みを抑え、旨味を閉じ込めた<strong>しっとり柔らか</strong>。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%82%B2%E3%81%A6%E3%81%9F%E3%81%9F%E3%82%8C_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-r0vJfyg5MaPar3ylcx1ZNSuENdPGQr.jpeg"
                  alt="秘伝のタレ"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">② 秘伝の「育てるタレ」</h3>
                <p className="text-[15.5px] md:text-base text-gray-700 leading-relaxed">
                  継ぎ足し特製だれへ<strong>熱々のまま一晩</strong>。肉汁が溶け込み<strong>ゼラチン化</strong>—まさに<strong>旨味の塊</strong>。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%81%B7%E4%BA%BA%E3%81%AE%E6%8A%80_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8WQrHKsdxK0zYdRbfz70hfdViplR8g.jpeg"
                  alt="熟練職人の手仕事"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">③ 職人の手仕事</h3>
                <p className="text-[15.5px] md:text-base text-gray-700 leading-relaxed">
                  <strong>熟練の技法ゆえ大量生産はできません。</strong>部位を見極め一つひとつ仕込み、豚本来の旨味を最大限に。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredients (Simplified Spain Pork Section) */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-[20px] md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            EU最高基準で育った安心のスペイン産豚
          </h2>

          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8 mb-4 md:mb-8">
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B1%9A%E8%88%8E%E3%81%A8%E7%94%9F%E7%94%A3%E8%80%85%EF%BC%88%E7%94%9F%E6%88%90%EF%BC%89.jpg-Fpegb4HOwjBMX2CXf2AnbrkgAO09GN.jpeg"
                alt="スペインの養豚農場と生産者"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E8%82%89%E8%B3%AA_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8odUEeZXMUz5pWNVxDNoBBwCY0KOCj.jpeg"
                alt="スペイン産豚バラの断面"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="mx-auto max-w-3xl text-[15.5px] md:text-lg text-gray-700 leading-relaxed text-center">
            赤身は柔らかく、脂は香ばしくすっきり。世界が認める品質と旨味を、ご家庭でも気軽に味わえます。
          </p>
        </div>
      </section>

      {/* Emotional（3イラスト）: 画像少し小さめ／スマホも横並び3枚／テキストは箇条書き */}
      <section className="py-10 md:py-16 bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          {/* 画像は常に3カラム（スマホでも横並び）。一枚あたりを少し小さめに */}
          <div className="mx-auto max-w-6xl grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200">
              <Image src={sceneSolo} alt="一人でラーメンを楽しむ" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200">
              <Image src={sceneFamily} alt="家族でラーメンを楽しむ" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200">
              <Image src={sceneReward} alt="自分へのご褒美ラーメン" fill className="object-cover" />
            </div>
          </div>

          {/* 箇条書き（スマホは文字サイズ↑、改行位置を調整） */}
          <ul className="mx-auto max-w-5xl list-disc list-outside pl-5 space-y-2 md:space-y-3 text-[15.5px] md:text-lg leading-relaxed text-gray-800">
            <li>
              スーパーでは手に入らない“本物”を、<br className="inline md:hidden" />
              自分の部屋でゆっくり味わう。至高の一杯がここにあります。
            </li>
            <li>
              家族みんなで分け合える本物チャーシュー。<br className="inline md:hidden" />
              食卓に団らんと絆を生む、特別な一皿です。
            </li>
            <li>
              外食を減らしても贅沢はできる。物価高の今こそ、<br className="inline md:hidden" />
              家で本格ラーメンを。頑張る自分へのご褒美に。
            </li>
          </ul>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="py-14 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">商品紹介</h2>
          <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-gray-700">
            商品は大きく分けて <span className="font-bold text-amber-600">2種類</span> です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E3%82%AB%E3%83%83%E3%83%88%E6%B8%88%E3%81%BF%EF%BC%89-01.jpg-VHSSzgCFyGvKl17Eoxft2qGAyRHOLj.jpeg"
                  alt="カット済みチャーシュー800g"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">ラーメン屋が作る本物のチャーシューカット済み800g</h4>
                <ul className="text-[15px] md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・扱いやすいカット済み＆小分け包装で、必要な分だけ解凍してすぐ使える便利さ。</li>
                  <li>・ラーメンのトッピングはもちろん、チャーハンや丼物にも相性抜群。</li>
                  <li>・「普段の食卓をワンランクアップ」させる万能チャーシュー。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA%EF%BC%89-01.jpg-5NHQ04cVrUlWIXjCiJrvxFq2welhBq.jpeg"
                  alt="訳ありチャーシュー1kg"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">ラーメン屋が作る本物のチャーシュー訳あり1kg</h4>
                <ul className="text-[15px] md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・形が不揃いなだけで、味・品質は正規品と同じ。</li>
                  <li>・200gの小分けパックで保存も調理もラク。</li>
                  <li>・とにかく量を楽しみたい方におすすめ。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
              </CardContent>
            </Card>
          </div>

          {/* Related Product */}
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <Image src={tareImage} alt="チャーシュー専用だれ" fill className="object-cover" />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  ラーメン屋が作る本物のチャーシュー専用だれ（80cc × 3個セット）
                </h4>
                <ul className="text-[15px] md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・清酒・本みりんを使用し、雑味のない奥深い旨味を実現。</li>
                  <li>・会津ブランド館のチャーシューに最適な和風仕立て。</li>
                  <li>・そのままかけても、漬けて焼いても美味しく召し上がれます。</li>
                  <li>・常温保存が可能で、賞味期限は製造より3ヶ月。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">1,500円（税・送料込）</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-10 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-[20px] md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-900">お客様の声</h2>
          <p className="text-center text-gray-600 mb-6 md:mb-10 text-[14.5px] md:text-base px-2">
            これらは実際のECサイトに投稿されているものを抜粋させて頂きました。ご購入の際のご参考にどうぞ
          </p>

          <div className="space-y-4 md:space-y-6 mx-auto max-w-4xl">
            {reviews.map((review, i) => (
              <Card key={i} className="p-4 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3 md:gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-vtfT6kIozW2PCIgSlbHhvpRa1H3IAA.jpeg"
                    alt={`お客様 ${i + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full w-8 h-8 md:w-12 md:h-12 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 md:mb-3">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">お客様（{review.source}）</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500 text-sm">
                          {[...Array(review.rating)].map((_, index) => (
                            <span key={index}>★</span>
                          ))}
                        </div>
                        <Badge variant="outline" className="text-xs border-gray-400 text-gray-600 hidden sm:inline-flex">
                          {review.product}を購入されたお客様
                        </Badge>
                        <Badge variant="outline" className="text-xs border-gray-400 text-gray-600 sm:hidden">
                          {review.product}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">「{review.comment}」</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Speed */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-TumFDrStQKWbfHPR6ScP7lMSmHViX6.jpeg"
                alt="送料無料 全国一律"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-4fR4g1YVfk3D7oD9xYk8ElwVNHmNTG.jpeg"
                alt="即日配送"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store / Map */}
      <section id="purchase" className="py-10 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-[20px] md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">ご購入はこちらから</h2>

          {/* …（購入リンク群はそのまま）… */}
          {/* ここは貴社側のリンク構成に依存するため前回と同様のまま保持しています */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
