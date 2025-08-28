"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200/70">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-center">
            <img
              src="/aizu-brand-logo.jpg"
              alt="AIZU BRAND HALL"
              className="object-contain h-10 md:h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full">
        {/* PC/Tablet */}
        <div className="hidden md:block">
          <img
            src="/main-chashu-image.jpg"
            alt="ラーメン屋がつくる本物のチャーシュー"
            className="w-full h-auto"
          />
        </div>
        {/* Mobile */}
        <div className="relative md:hidden h-[42vh] w-full overflow-hidden">
          <img
            src="/main-chashu-image.jpg"
            alt="ラーメン屋がつくる本物のチャーシュー"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Main Copy */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 text-center">
          <h1
            className="text-[26px] md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-3 text-gray-900 leading-[1.3]"
            style={{ wordBreak: "keep-all", lineBreak: "strict" }}
          >
            ラーメン屋がつくる<br className="sm:hidden" />
            本物のチャーシュー
          </h1>

          <p className="text-lg md:text-2xl text-gray-800 mb-3 md:mb-4 font-medium">
            累計10万セット販売の実績！<br className="sm:hidden" />
            ご家庭で"本物の味"を再現。
          </p>

          <p className="mx-auto max-w-4xl text-base md:text-lg text-gray-700 leading-[1.7]">
            スーパーでは決して手に入らない<br className="sm:hidden" />職人仕込み。<br className="hidden md:block" />
            ぜひこの機会に、<br className="sm:hidden" />お店さながらの味わいを<br className="sm:hidden" />ご堪能ください。
            <span className="font-bold text-amber-600"> 送料は無料です。</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("purchase")}
            >
              今すぐ購入
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-gray-900 border-gray-300 hover:bg-gray-100 px-6 py-3 text-sm md:text-base font-semibold rounded-xl transition-all"
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
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 lg:mb-8 text-gray-900"
            style={{ wordBreak: "keep-all", lineBreak: "strict" }}
          >
            いつもありがとうございます。<br className="sm:hidden" />
            沢山のお客様に<br className="sm:hidden" />
            ご好評頂いています。
          </h2>

          {/* Top Row - Awards */}
          <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E6%9C%80%E5%84%AA%E7%A7%80%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97-7ciInXAAMeVCnQqeKPvsmC5vEPE5hB.png"
                alt="楽天月間優良ショップ"
                className="w-full h-full object-contain p-3"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/mercari.png"
                alt="メルカリアワード"
                className="w-full h-full object-contain p-3"
              />
            </div>
          </div>

          {/* Bottom Row - Rankings */}
          <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D.jpg-Q4MBoGGB3qx9rdHkoAOkfhoYFBg9XW.jpeg"
                alt="訳あり1位"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%B9%EF%BC%91%E4%BD%8D.jpg-7Mo9nEzYWgP3zBtwFOrUnT2QoheuAb.jpeg"
                alt="カット済み1位"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E3%83%90%E3%83%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%EF%BC%91%E4%BD%8D.jpg-dGTAABuHwIvkXcOVR7HxPQhJqiTw9g.jpeg"
                alt="レトルトバラ1位"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88BUTA1%E4%BD%8D.jpg-53fq5t1O6i0mOv7JuM8y9Hw2Ifqg7o.jpeg"
                alt="レトルトBUTA1位"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 justify-center mt-6 md:mt-8 lg:mt-12 px-4 max-w-sm mx-auto">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full"
              onClick={() => scrollToSection("purchase")}
            >
              商品売場へ行く
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full"
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-900">
            美味しさの魅力
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%AD%E9%85%B8%E7%85%AE%E8%BE%BC%E3%81%BF_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8DGxjSTAVxdNmqBeyGcbfkVdmvtTQI.jpeg"
                  alt="低温長時間調理"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-xl font-bold mb-2 text-gray-900">① 低温長時間 × 炭酸</h3>
                <p className="text-base md:text-base text-gray-700 leading-[1.6]">
                  低温でじっくり、<br className="sm:hidden" />炭酸で臭みを抑え、<br className="sm:hidden" />旨味を閉じ込めた<br className="sm:hidden" /><strong>しっとり柔らか</strong>。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%82%B2%E3%81%A6%E3%81%9F%E3%81%9F%E3%82%8C_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-r0vJfyg5MaPar3ylcx1ZNSuENdPGQr.jpeg"
                  alt="秘伝のタレ"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-xl font-bold mb-2 text-gray-900">② 秘伝の「育てるタレ」</h3>
                <p className="text-base md:text-base text-gray-700 leading-[1.6]">
                  継ぎ足し特製だれへ<br className="sm:hidden" /><strong>熱々のまま一晩</strong>。<br className="sm:hidden" />肉汁が溶け込み<br className="sm:hidden" /><strong>ゼラチン化</strong>―<br className="sm:hidden" />まさに<strong>旨味の塊</strong>。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%81%B7%E4%BA%BA%E3%81%AE%E6%8A%80_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8WQrHKsdxK0zYdRbfz70hfdViplR8g.jpeg"
                  alt="熟練職人の手仕事"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-xl font-bold mb-2 text-gray-900">③ 職人の手仕事</h3>
                <p className="text-base md:text-base text-gray-700 leading-[1.6]">
                  <strong>熟練の技法ゆえ<br className="sm:hidden" />大量生産はできません。</strong><br className="sm:hidden" />部位を見極め<br className="sm:hidden" />一つひとつ仕込み、<br className="sm:hidden" />豚本来の旨味を最大限に。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredients (Simplified Spain Pork Section) */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            EU最高基準で育った安心のスペイン産豚
          </h2>

          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-5 md:mb-8">
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B1%9A%E8%88%8E%E3%81%A8%E7%94%9F%E7%94%A3%E8%80%85%EF%BC%88%E7%94%9F%E6%88%90%EF%BC%89.jpg-Fpegb4HOwjBMX2CXf2AnbrkgAO09GN.jpeg"
                alt="スペインの養豚農場と生産者"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E8%82%89%E8%B3%AA_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8odUEeZXMUz5pWNVxDNoBBwCY0KOCj.jpeg"
                alt="スペイン産豚バラの断面"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-700 leading-[1.7] text-center">
            赤身は柔らかく、<br className="sm:hidden" />脂は香ばしくすっきり。<br className="sm:hidden" />世界が認める品質と旨味を、<br className="sm:hidden" />ご家庭でも気軽に味わえます。
          </p>
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
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E3%82%AB%E3%83%83%E3%83%88%E6%B8%88%E3%81%BF%EF%BC%89-01.jpg-VHSSzgCFyGvKl17Eoxft2qGAyRHOLj.jpeg"
                  alt="カット済みチャーシュー800g"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-900">ラーメン屋がつくる<br className="sm:hidden" />本物のチャーシュー<br className="sm:hidden" />カット済み800g</h4>
                <ul className="text-base md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・扱いやすいカット済み＆<br className="sm:hidden" />　小分け包装で、必要な分だけ<br className="sm:hidden" />　解凍してすぐ使える便利さ。</li>
                  <li>・ラーメンのトッピングはもちろん、<br className="sm:hidden" />　チャーハンや丼物にも相性抜群。</li>
                  <li>・「普段の食事をワンランクアップ」<br className="sm:hidden" />　させる万能チャーシュー。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA%EF%BC%89-01.jpg-5NHQ04cVrUlWIXjCiJrvxFq2welhBq.jpeg"
                  alt="訳ありチャーシュー1kg"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-900">ラーメン屋がつくる<br className="sm:hidden" />本物のチャーシュー<br className="sm:hidden" />訳あり1kg</h4>
                <ul className="text-base md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・形が不揃いなだけで、<br className="sm:hidden" />　味・品質は正規品と同じ。</li>
                  <li>・200gの小分けパックで<br className="sm:hidden" />　保存も調理もラク。</li>
                  <li>・とにかく量を楽しみたい方に<br className="sm:hidden" />　おすすめ。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
              </CardContent>
            </Card>
          </div>

          {/* レトルト商品 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <img
                  src="/retorutobuta.jpg"
                  alt="レトルト極厚カット650g"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-900">ラーメン屋がつくる<br className="sm:hidden" />本物のチャーシュー<br className="sm:hidden" />極厚カット650g</h4>
                <ul className="text-base md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・二郎系ラーメンにピッタリの<br className="sm:hidden" />　極厚カット。</li>
                  <li>・常温保存できるので<br className="sm:hidden" />　買い置きに便利。</li>
                  <li>・個包装で扱いやすく<br className="sm:hidden" />　必要な分だけ使える。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">2,800円（税・送料込）</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <img
                  src="/retorutobara.jpg"
                  alt="レトルト中厚スライス400g"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-900">ラーメン屋がつくる<br className="sm:hidden" />本物のチャーシュー<br className="sm:hidden" />中厚スライス400g</h4>
                <ul className="text-base md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・インスタントラーメンが<br className="sm:hidden" />　一気に豪華に。</li>
                  <li>・枚数が多くて<br className="sm:hidden" />　使い勝手バツグン。</li>
                  <li>・非常食としても<br className="sm:hidden" />　常備できる安心感。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">2,300円（税・送料込）</p>
              </CardContent>
            </Card>
          </div>

          {/* Related Product */}
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="relative aspect-square">
                <img src="/tare.jpg" alt="チャーシュー専用だれ" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-5 md:p-6">
                <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-900">
                  ラーメン屋がつくる<br className="sm:hidden" />本物のチャーシュー<br className="sm:hidden" />専用だれ<br className="sm:hidden" />（80cc × 3個セット）
                </h4>
                <ul className="text-base md:text-sm text-gray-700 space-y-2 mb-4">
                  <li>・清酒・本みりんを使用し、<br className="sm:hidden" />　雑味のない奥深い旨味を実現。</li>
                  <li>・会津ブランド館のチャーシューに<br className="sm:hidden" />　最適な和風仕立て。</li>
                  <li>・そのままかけても、<br className="sm:hidden" />　漬けて焼いても美味しく<br className="sm:hidden" />　召し上がれます。</li>
                  <li>・常温保存が可能で、<br className="sm:hidden" />　賞味期限は製造より3ヶ月。</li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">1,000円（税・送料込）</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eating Methods */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">美味しい食べ方</h2>

          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%A1%E3%83%B3.jpg-BRY4QwKm0vLWdOaUAN3rRMiKqZmg8V.jpeg"
                  alt="チャーシューメン"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">チャーシューメン</h3>
              <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">チャーシューたっぷりで贅沢なひととき</p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%92%E9%A3%AF.jpg-7uRpeKi7AaEHlHD8LQDDI9STJtt6bG.jpeg"
                  alt="チャーシュー炒飯"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">チャーシュー炒飯</h3>
              <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">本物のチャーシューで作る炒飯はお店の味です</p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC.jpg-K4YbZqzW9pI4v9mLr2NV9zatC5cMI9.jpeg"
                  alt="チャーシュー丼"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">チャーシュー丼</h3>
              <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">軽く炙れば最強のチャーシュー丼のできあがり</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-10 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-900">お客様の声</h2>
          <p className="text-center text-gray-600 mb-6 md:mb-10 text-sm md:text-base px-2">
            これらは実際のECサイトに投稿されているものを抜粋させて頂きました。ご購入の際のご参考にどうぞ
          </p>

          <div className="space-y-4 md:space-y-6 mx-auto max-w-4xl">
            {reviews.map((review, i) => (
              <Card key={i} className="p-4 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3 md:gap-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-vtfT6kIozW2PCIgSlbHhvpRa1H3IAA.jpeg"
                    alt={`お客様 ${i + 1}`}
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
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-TumFDrStQKWbfHPR6ScP7lMSmHViX6.jpeg"
                alt="送料無料 全国一律"
                className="w-full h-full object-contain p-3"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-4fR4g1YVfk3D7oD9xYk8ElwVNHmNTG.jpeg"
                alt="即日配送"
                className="w-full h-full object-contain p-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional */}
      <section className="py-14 md:py-16 bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AC%E7%89%A9%5B1%5D.jpg-kIUM7GXHcqmgfwz64cGzonnhxJSrzK.jpeg"
                  alt="一人でラーメンを楽しむ"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[15px] md:text-lg leading-relaxed text-gray-700">
                スーパーでは手に入らない"本物"を、自分の部屋でゆっくり味わう。至高の一杯がここにあります。
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%A3%E3%82%89%E3%82%93%5B1%5D.jpg-4uArVxvXvQQmSNi3ozVZ0OUsZeBIXm.jpeg"
                  alt="家族でラーメンを楽しむ"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[15px] md:text-lg leading-relaxed text-gray-700">
                家族みんなで分け合える本物チャーシュー。食卓に団らんと絆を生む、特別な一皿です。
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%94%E8%A4%92%E7%BE%8E%5B1%5D.jpg-oJNJWSEy6EpevcqrREbQd5DB3SjqYT.jpeg"
                  alt="自分へのご褒美ラーメン"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[15px] md:text-lg leading-relaxed text-gray-700">
                外食を減らしても贅沢はできる。物価高の今こそ、家で本格ラーメンを。頑張る自分へのご褒美に。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section id="purchase" className="py-10 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">ご購入はこちらから</h2>

          {/* Frozen */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-2xl font-bold text-center mb-6 md:mb-8 text-blue-600">冷凍チャーシュー</h3>
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-pink-100 p-4 md:p-6 rounded-xl border border-pink-200">
                <div className="text-center">
                  <a href="https://store.shopping.yahoo.co.jp/aizubrandhall/a5b9a5bfa5.html" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-o2By6df7JqQxsMmDbxQkB96j4xvzo7.png"
                        alt="Yahoo!で購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Yahoo!ショッピング</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 md:p-6 rounded-xl border border-blue-200">
                <div className="text-center">
                  <a href="https://item.rakuten.co.jp/aizubrandhall/c/0000000024/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-T1kz4cuzdoGCnAcHvSwGBuBQsfKTIJ.png"
                        alt="楽天で購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">楽天市場</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
                </div>
              </div>

              <div className="bg-green-100 p-4 md:p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <a href="https://www.amazon.co.jp/stores/page/485187F9-700A-4C89-85F3-3E4A7A7414EF" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-XpiFG2txGHCy5bDQenrvFikQe3Alx7.png"
                        alt="Amazonで購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Amazon</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
                </div>
              </div>
            </div>
          </div>

          {/* Retort */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-2xl font-bold text-center mb-6 md:mb-8 text-yellow-600">レトルトチャーシュー</h3>
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-pink-100 p-4 md:p-6 rounded-xl border border-pink-200">
                <div className="text-center">
                  <a href="https://store.shopping.yahoo.co.jp/aizubrandhall/b7e3b0c2a5.html" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-o2By6df7JqQxsMmDbxQkB96j4xvzo7.png"
                        alt="Yahoo!で購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Yahoo!ショッピング</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 md:p-6 rounded-xl border border-blue-200">
                <div className="text-center">
                  <a href="https://item.rakuten.co.jp/aizubrandhall/c/0000000016/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-T1kz4cuzdoGCnAcHvSwGBuBQsfKTIJ.png"
                        alt="楽天で購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">楽天市場</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
                </div>
              </div>

              <div className="bg-green-100 p-4 md:p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <a href="https://www.amazon.co.jp/stores/page/222C75F5-2370-44E0-8D9A-B26A33B10DCA" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-XpiFG2txGHCy5bDQenrvFikQe3Alx7.png"
                        alt="Amazonで購入"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Amazon</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-bold text-gray-900 mb-4">この商品は「会津ブランド館」が製造・販売・発送を行っています。</p>
          </div>

          {/* Store Information */}
          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">店舗案内</h3>
              <div className="space-y-2 text-gray-700 text-[15px] md:text-base">
                <p><span className="font-semibold">会津ブランド館</span></p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6-15</p>
                <p>TEL: 0242-25-1441</p>
                <p>営業時間: 11時～16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-xs md:text-sm text-gray-600">（年末年始はお休みさせて頂きます）</p>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3.jpg-3EilSvcOQOq0DLVyhx9qBG4bUhtIKC.jpeg"
                alt="会津ブランド館の外観"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="mx-auto max-w-4xl">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 text-center">店舗所在地</h3>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.234567890123!2d139.9287654321098!3d37.4951234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f85a1a1a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2z44CSOTY1LTAwNDQg56aP5bO25aSa5Lya5rSl5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会津ブランド館の地図"
                className="absolute inset-0"
              />
            </div>
          </div>
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
