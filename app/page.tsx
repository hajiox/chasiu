"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChashuLandingPage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const reviews = [
    {
      comment:
        "必要な分だけ解凍できるのでとても便利。ラーメンはもちろん、チャーハンや丼物にも使えて重宝しています。味も本格的で家族にも好評でした。",
      rating: 5,
      source: "楽天",
      product: "冷凍カット済み800g",
    },
    {
      comment:
        "カット済みで使いやすく、2枚ずつの個包装がありがたいです。温めずそのままでも美味しく食べられました。リピート決定です。",
      rating: 5,
      source: "楽天",
      product: "冷凍カット済み800g",
    },
    {
      comment:
        "思ったより薄切りでしたが、ラーメンのトッピングにはちょうど良い厚さ。お酒のおつまみにも使いやすく、便利な商品だと思います。",
      rating: 4,
      source: "楽天",
      product: "冷凍カット済み800g",
    },
    {
      comment:
        "見た目は不揃いでも味は抜群。200gずつの小分けなので使いやすく、冷凍庫に常備しています。コスパが良くて助かります。",
      rating: 5,
      source: "楽天",
      product: "冷凍訳あり1kg",
    },
    {
      comment: "子どもが大好きであっという間になくなります。量がしっかりあるので家族みんなで楽しめるのが嬉しいです。",
      rating: 5,
      source: "楽天",
      product: "冷凍訳あり1kg",
    },
    {
      comment: "タレの味が絶妙でご飯が進みます。お弁当のおかずや夜食にもピッタリで、買って正解でした。",
      rating: 5,
      source: "楽天",
      product: "冷凍訳あり1kg",
    },
    {
      comment:
        "二郎系ラーメンにピッタリ！厚切りで食べ応えがあり、常温保存できるのも便利。個包装で扱いやすいのも良いです。",
      rating: 5,
      source: "楽天",
      product: "レトルト極厚カット650g",
    },
    {
      comment:
        "少し味が薄めに感じましたが、ラーメンにのせるとバランスが良くなります。家で豪快に楽しめるチャーシューです。",
      rating: 4,
      source: "楽天",
      product: "レトルト極厚カット650g",
    },
    {
      comment:
        "インスタントラーメンが一気に豪華になります。枚数も多くて使いやすく、非常食としても常備しておきたいです。",
      rating: 5,
      source: "楽天",
      product: "レトルト中厚スライス400g",
    },
    {
      comment: "常温保存できるので保存食に便利。味もしっかりしていて、ご飯のおかずやおつまみにも最適でした。",
      rating: 5,
      source: "楽天",
      product: "レトルト中厚スライス400g",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-rzara89L8Xu6Xm6KAId60sFQZBZf5X.jpeg"
            alt="ラーメン屋が作る本物のチャーシュー"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 text-lg bg-amber-600 text-white hover:bg-amber-700">
            ラーメン屋が作る本物のチャーシュー
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            累計10万セット販売突破！
            <br />
            ご家庭で"ラーメン店の味"を再現。
          </h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              ラーメンを自宅で作るとき、一番手に入りにくい具材は「チャーシュー」です。スーパーでも見かけますが、多くは加工肉のような食感で、本格的な味わいとは異なります。
            </p>
            <p>
              本物のチャーシューは製造に手間がかかり、機械化も難しいため、大手メーカーの参入が少なく、ラーメン店の味をそのまま家庭で楽しめる商品はほとんどありません。
            </p>
            <p>
              そこで当店では、長年チャーシューを作り続けてきた職人が、ラーメン屋と同じ製法で仕込んだ「ラーメン屋が作る本物のチャーシュー」を開発。
            </p>
            <p>これまでに累計10万セットを販売し、多くのお客様にご好評いただいています。</p>
            <p className="font-bold text-xl text-amber-600">
              ぜひこの機会に、ラーメン店さながらの本格チャーシューをご家庭でご堪能ください。送料は無料です。
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            いつもありがとうございます。沢山のお客様にご好評頂いています。
          </h2>

          {/* Top Row - Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E6%9C%80%E5%84%AA%E7%A7%80%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97-7ciInXAAMeVCnQqeKPvsmC5vEPE5hB.png"
                alt="楽天最優秀ショップ"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%83%AB%E3%82%AB%E3%83%AA%E3%82%A2%E3%83%AF%E3%83%BC%E3%83%89%E5%8F%97%E8%B3%9E-3J0xWkBa9HwzquDCJPtI0MDA9yc2Wl.png"
                alt="メルカリアワード"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Row - Rankings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D.jpg-Q4MBoGGB3qx9rdHkoAOkfhoYFBg9XW.jpeg"
                alt="訳あり1位"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%B9%EF%BC%91%E4%BD%8D.jpg-7Mo9nEzYWgP3zBtwFOrUnT2QoheuAb.jpeg"
                alt="カット済み1位"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E3%83%90%E3%83%A9%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%EF%BC%91%E4%BD%8D.jpg-dGTAABuHwIvkXcOVR7HxPQhJqiTw9g.jpeg"
                alt="レトルトバラ1位"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88BUTA1%E4%BD%8D.jpg-53fq5t1O6i0mOv7JuM8y9Hw2Ifqg7o.jpeg"
                alt="レトルトBUTA1位"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection("purchase")}
            >
              商品売場へ行く
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
              onClick={() => scrollToSection("features")}
            >
              商品特徴をもっと知る（下記をご覧ください）
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">美味しさの魅力</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%AD%E9%85%B8%E7%85%AE%E8%BE%BC%E3%81%BF_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8DGxjSTAVxdNmqBeyGcbfkVdmvtTQI.jpeg"
                  alt="低温長時間調理"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">① 低温長時間調理 × 炭酸の力</h3>
                <p className="text-gray-700 leading-relaxed">
                  丁寧に低温で時間をかけて煮込むことで、豚肉の旨味を逃さず閉じ込めます。さらに炭酸を加えることで豚特有の臭みを取り除き、肉をしっとり柔らかく仕上げました。ご家庭ではなかなか再現できない、プロの工夫です。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%82%B2%E3%81%A6%E3%81%9F%E3%81%9F%E3%82%8C_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-r0vJfyg5MaPar3ylcx1ZNSuENdPGQr.jpeg"
                  alt="秘伝のタレ"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">② 秘伝の"育てるタレ"</h3>
                <p className="text-gray-700 leading-relaxed">
                  当店のチャーシューは、継ぎ足しで旨味を重ねた特製ダレに一晩漬け込んでいます。肉汁や旨味が溶け込んだ濃厚なタレは、ゼラチン状になるほど濃密。熱々の状態で漬け込むことで、肉の奥深くまでしっかり味が染み込みます。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%81%B7%E4%BA%BA%E3%81%AE%E6%8A%80_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8WQrHKsdxK0zYdRbfz70hfdViplR8g.jpeg"
                  alt="熟練職人の手仕事"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">③ 熟練職人の手仕事</h3>
                <p className="text-gray-700 leading-relaxed">
                  大量生産ではなく、職人が一つひとつ丁寧に仕込み。部位ごとの特性を見極め、余計な処理をせずに"豚肉そのものの美味しさ"を最大限に引き出しています。手間を惜しまないからこそ生まれる、専門店ならではの味わいです。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            世界が認める極上素材：スペイン産豚バラ肉
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B1%9A%E8%88%8E%E3%81%A8%E7%94%9F%E7%94%A3%E8%80%85%EF%BC%88%E7%94%9F%E6%88%90%EF%BC%89.jpg-Fpegb4HOwjBMX2CXf2AnbrkgAO09GN.jpeg"
                  alt="スペイン産豚肉の生産者と農場"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E8%82%89%E8%B3%AA_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8odUEeZXMUz5pWNVxDNoBBwCY0KOCj.jpeg"
                  alt="豚バラ肉の断面"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>当店のチャーシューは、世界的に高品質と評価されるスペイン産豚バラ肉を使用しています。</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">世界第3位の生産国、欧州第1位の輸出国</h3>
                  <p className="text-gray-700">
                    EUの厳格な基準に基づく品質管理のもと育てられ、安全性と信頼性が確立されています。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">絶妙な赤身と脂身のバランス</h3>
                  <p className="text-gray-700">
                    ジューシーで旨味のある食感が特徴。脂肪にはオレイン酸が豊富に含まれ、体に優しい脂質としても注目されています。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">日本市場でも高評価</h3>
                  <p className="text-gray-700">
                    2025年最新データでは、スペイン産豚肉の輸入量が前年比8.69％増。特にラーメン用チャーシューとしての需要が高まり、その豊かな風味と柔らかな食感は日本のラーメン文化とも見事に調和しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">商品紹介</h2>
          <p className="text-xl text-center mb-12 text-gray-700">
            商品は大きく分けて <span className="font-bold text-amber-600">2種類</span> です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">クオリティ重視の方</h3>
              <p className="text-lg text-gray-700">「冷凍チャーシュー」がおすすめ</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">コスパ重視の方</h3>
              <p className="text-lg text-gray-700">「レトルトチャーシュー」がおすすめ</p>
            </div>
          </div>

          {/* Frozen Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">冷凍チャーシュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E3%82%AB%E3%83%83%E3%83%88%E6%B8%88%E3%81%BF%EF%BC%89-01.jpg-VHSSzgCFyGvKl17Eoxft2qGAyRHOLj.jpeg"
                    alt="カット済みチャーシュー800g"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    ラーメン屋が作る本物のチャーシューカット済み800g
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li>・扱いやすいカット済み＆小分け包装で、必要な分だけ解凍してすぐ使える便利さ。</li>
                    <li>・ラーメンのトッピングはもちろん、チャーハンや丼物にも相性抜群。</li>
                    <li>・「普段の食卓をワンランクアップ」させる万能チャーシュー。</li>
                  </ul>
                  <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%86%B7%E5%87%8D%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA%EF%BC%89-01.jpg-5NHQ04cVrUlWIXjCiJrvxFq2welhBq.jpeg"
                    alt="訳ありチャーシュー1kg"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">ラーメン屋が作る本物のチャーシュー訳あり1kg</h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li>・形が不揃いなだけで、味・品質は正規品と同じ。</li>
                    <li>・200gの小分けパックで保存も調理もラク。</li>
                    <li>・とにかく量を楽しみたい方におすすめ。</li>
                  </ul>
                  <p className="text-2xl font-bold text-amber-600">4,290円（税・送料込）</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Retort Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">レトルトチャーシュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E6%A5%B5%E5%8E%9A8%E6%9E%9A.jpg-h0N5IQqZqSkxoGvMmJDcn5Nz8PIHCu.jpeg"
                    alt="極厚カットチャーシュー650g"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">レトルトチャーシュー極厚カット650g（8枚）</h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li>・厚切りで豪快、まさに「ラーメン二郎」を思わせる存在感。</li>
                    <li>・自宅で二郎系を楽しみたい方にピッタリのガッツリ系商品。</li>
                    <li>・常温保存可能で、まとめ買い＆ストックにも便利。</li>
                  </ul>
                  <p className="text-2xl font-bold text-amber-600">2,800円（税・送料込）</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E4%B8%AD%E5%8E%9A%E3%83%90%E3%83%A9%20.jpg-LfoAGYnPigDuuiYvLo232XvCSROqge.jpeg"
                    alt="中厚切りチャーシュー400g"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    レトルトチャーシュー中厚切り400g（11枚-18枚）
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li>・肩肉を中厚スライスにした食べやすいタイプ。</li>
                    <li>・インスタントラーメンやカップ麺に一枚のせるだけで、驚くほどリッチな一杯に。</li>
                    <li>・おつまみやおかずの一品としても気軽に使える"日常＋ちょっと贅沢"アイテム。</li>
                  </ul>
                  <p className="text-2xl font-bold text-amber-600">2,300円（税・送料込）</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Product */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">関連商品</h3>
            <div className="max-w-md mx-auto">
              <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%9F%E3%82%8C.jpg-KWGPebXrM4Wz0wSjsx78RIplx6Uv9o.jpeg"
                    alt="チャーシュー専用だれ"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    ラーメン屋が作る本物のチャーシュー専用だれ（80cc × 3個セット）
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
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
        </div>
      </section>

      {/* Eating Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">美味しい食べ方</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* チャーシューメン */}
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%A1%E3%83%B3.jpg-BRY4QwKm0vLWdOaUAN3rRMiKqZmg8V.jpeg"
                  alt="チャーシューメン"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">チャーシューメン</h3>
              <p className="text-gray-700 leading-relaxed">チャーシューたっぷりで贅沢なひととき</p>
            </div>

            {/* 炒飯 */}
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%92%E9%A3%AF.jpg-7uRpeKi7AaEHlHD8LQDDI9STJtt6bG.jpeg"
                  alt="チャーシュー炒飯"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">チャーシュー炒飯</h3>
              <p className="text-gray-700 leading-relaxed">本物のチャーシューで作る炒飯はお店の味です</p>
            </div>

            {/* チャーシュー丼 */}
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC.jpg-K4YbZqzW9pI4v9mLr2NV9zatC5cMI9.jpeg"
                  alt="チャーシュー丼"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">チャーシュー丼</h3>
              <p className="text-gray-700 leading-relaxed">軽く炙れば最強のチャーシュー丼のできあがり</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">お客様の声</h2>
          <p className="text-center text-gray-600 mb-12">
            これらは実際のECサイトに投稿されているものを抜粋させて頂きました。ご購入の際のご参考にどうぞ
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <Card key={i} className="p-6 bg-gray-50 border-gray-200">
                <div className="flex items-start gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-vtfT6kIozW2PCIgSlbHhvpRa1H3IAA.jpeg"
                    alt={`お客様 ${i + 1}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900">お客様（{review.source}）</h3>
                      <div className="flex text-yellow-500">
                        {[...Array(review.rating)].map((_, index) => (
                          <span key={index}>★</span>
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs border-gray-400 text-gray-600">
                        {review.product}を購入されたお客様
                      </Badge>
                    </div>
                    <p className="text-gray-700 leading-relaxed">「{review.comment}」</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-TumFDrStQKWbfHPR6ScP7lMSmHViX6.jpeg"
                alt="送料無料 全国一律"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-4fR4g1YVfk3D7oD9xYk8ElwVNHmNTG.jpeg"
                alt="即日配送"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%AC%E7%89%A9%5B1%5D.jpg-kIUM7GXHcqmgfwz64cGzonnhxJSrzK.jpeg"
                  alt="一人でラーメンを楽しむ"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                スーパーでは手に入らない"本物"を、自分の部屋でゆっくり味わう。至高の一杯がここにあります。
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%A3%E3%82%89%E3%82%93%5B1%5D.jpg-4uArVxvXvQQmSNi3ozVZ0OUsZeBIXm.jpeg"
                  alt="家族でラーメンを楽しむ"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                家族みんなで分け合える本物チャーシュー。食卓に団らんと絆を生む、特別な一皿です。
              </p>
            </div>

            <div className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%94%E8%A4%92%E7%BE%8E%5B1%5D.jpg-oJNJWSEy6EpevcqrREbQd5DB3SjqYT.jpeg"
                  alt="自分へのご褒美ラーメン"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                外食を減らしても贅沢はできる。物価高の今こそ、家で本格ラーメンを。頑張る自分へのご褒美に。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">ご購入はこちらから</h2>

          {/* Frozen Chashu Purchase Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">冷凍チャーシュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Yahoo Shopping */}
              <div className="bg-pink-100 p-6 rounded-lg border border-pink-200">
                <div className="text-center">
                  <a
                    href="https://store.shopping.yahoo.co.jp/aizubrandhall/a5b9a5bfa5.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-o2By6df7JqQxsMmDbxQkB96j4xvzo7.png"
                        alt="Yahoo!で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">Yahoo!ショッピング</h4>
                  <p className="text-sm text-gray-600 mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                </div>
              </div>

              {/* Rakuten */}
              <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-center">
                  <a
                    href="https://item.rakuten.co.jp/aizubrandhall/c/0000000024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-T1kz4cuzdoGCnAcHvSwGBuBQsfKTIJ.png"
                        alt="楽天で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">楽天市場</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    楽天ポイントが使える国内最大級のショッピングモールはこちら
                  </p>
                </div>
              </div>

              {/* Amazon */}
              <div className="bg-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-center">
                  <a
                    href="https://www.amazon.co.jp/stores/page/485187F9-700A-4C89-85F3-3E4A7A7414EF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-XpiFG2txGHCy5bDQenrvFikQe3Alx7.png"
                        alt="Amazonで購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">Amazon</h4>
                  <p className="text-sm text-gray-600 mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
                </div>
              </div>
            </div>
          </div>

          {/* Retort Chashu Purchase Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">レトルトチャーシュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Yahoo Shopping */}
              <div className="bg-pink-100 p-6 rounded-lg border border-pink-200">
                <div className="text-center">
                  <a
                    href="https://store.shopping.yahoo.co.jp/aizubrandhall/b7e3b0c2a5.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-o2By6df7JqQxsMmDbxQkB96j4xvzo7.png"
                        alt="Yahoo!で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">Yahoo!ショッピング</h4>
                  <p className="text-sm text-gray-600 mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                </div>
              </div>

              {/* Rakuten */}
              <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-center">
                  <a
                    href="https://item.rakuten.co.jp/aizubrandhall/c/0000000016/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-T1kz4cuzdoGCnAcHvSwGBuBQsfKTIJ.png"
                        alt="楽天で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">楽天市場</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    楽天ポイントが使える国内最大級のショッピングモールはこちら
                  </p>
                </div>
              </div>

              {/* Amazon */}
              <div className="bg-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-center">
                  <a
                    href="https://www.amazon.co.jp/stores/page/222C75F5-2370-44E0-8D9A-B26A33B10DCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-XpiFG2txGHCy5bDQenrvFikQe3Alx7.png"
                        alt="Amazonで購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900">Amazon</h4>
                  <p className="text-sm text-gray-600 mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-bold text-gray-900 mb-4">
              この商品は「会津ブランド館」が製造・販売・発送を行っています。
            </p>
          </div>

          {/* Store Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Store Details */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">店舗案内</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">会津ブランド館</span>
                </p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6-15</p>
                <p>TEL: 0242-25-1441</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-600">（年末年始はお休みさせて頂きます）</p>
              </div>
            </div>

            {/* Store Image */}
            <div className="relative aspect-video overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3.jpg-3EilSvcOQOq0DLVyhx9qBG4bUhtIKC.jpeg"
                alt="会津ブランド館の外観"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">店舗所在地</h3>
            <div className="relative aspect-video overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.234567890123!2d139.9287654321098!3d37.4951234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f85a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2z44CSOTY1LTAwNDQg56aP5bO25aSa5Lya5rSl5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp"
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

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
