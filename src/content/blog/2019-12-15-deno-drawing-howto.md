---
title: '「Denoくん えかきうた」の作り方'
description: ''
pubDate: 'Dec 15 2019'
heroImage: '/images/2019-12-15-deno-drawing-howto/0.png'
---

内輪でキャッキャする程度を想定していたら、思ったよりもバズったのでビビりました。 こういう気の抜けたネタ動画が、巡り巡って非プログラマーにも届くようだったら楽しいですね。

[www.youtube.com](https://www.youtube.com/watch?v=1NxV6JxtbeE)

というわけで今回はメイキング記事を書きました。

# どうして作ったのか


<blockquote class="twitter-tweet"><a href="https://twitter.com/__syumai/status/1190263644921053187"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Deno Advent Calendar 2019が立ったばかりのときに「いっちょどうでもいい記事でハードル下げておこうかな」と考えて、ひとまず絵描き歌と記入しておいたのが始まりです。

# 手順１：歌詞を作る

まずはScrapboxに歌詞を適当に書いていきます。

![f:id:hashrock:20191215192906p:plain](/images/2019-12-15-deno-drawing-howto/0.png)

この時点ではリズムくらいしか決まってません。

絵描き歌を作るにあたって入念な調査をしています。 具体的には[有名なやつ](https://www.youtube.com/watch?v=GLi_0tX6R5Q)を聞き込みました。

また、英語字幕についてはマリオ絵描き歌を参考にしました。曲がオシャレでさすが任天堂という感じです。

[www.youtube.com](https://www.youtube.com/watch?v=m43W4o6its8)

# 手順２：イラレの操作などを録画する

イラレやVSCodeの操作を撮りためます。イラレからはSVGで書き出して、SVGをブラウザでライブプレビューしながらVSCodeで編集しています。

つまり**この動画はSVG芸**ということになります。

録画は[カハマルカの瞳](https://forest.watch.impress.co.jp/library/software/cajamarcaeye/)です。今どきのPCならWin + Gでゲームバーでの録画が手軽ですね。

最初の方の操作はイラレです。昔買ったCS5をまだ使っています。

![f:id:hashrock:20191215194748p:plain](/images/2019-12-15-deno-drawing-howto/1.png)

雨を表す斜線の始点がばらついていますが、これは `stroke-dasharray` による破線が揃いすぎないようにしています。

また、ペンツールと直線ツールを使い分けています。直線ツールで描画した線は `line`要素で出力されるため、CSSセレクタで直線に一括でスタイルを当てる事ができます。

下記が完成品です。

See the Pen [Deno for drawing song](https://codepen.io/hashrock/pen/mdyrzdX) by hashrock ([@hashrock](https://codepen.io/hashrock)) on [CodePen](https://codepen.io).

それはそうと、背景の黒い円を描く手順完全に飛ばしているの、気づいた人いますか？

# 手順３：曲を作る

私は[Studio One](https://www.mi7.co.jp/products/presonus/studioone/)で作曲しています。

![f:id:hashrock:20191215194140p:plain](/images/2019-12-15-deno-drawing-howto/2.png)

MIDIキーボードで曲をスケッチします。ずっと録音しっぱなしにしておいて、うまくいったテイクを切り貼りしたり、リズムを修正したりしています。 下記はピアノの録音結果です。

![f:id:hashrock:20191215214817p:plain](/images/2019-12-15-deno-drawing-howto/3.png)

私はリズム感が最悪なので「クオンタイズ」という、タイミングを修正してくれる機能を常にかけています。例外はイントロとアウトロにちょっと入っている木琴の音で、少しずれているくらいが良さそうなので、クオンタイズをあえてかけていません。

普段の私の音楽センスだと、コード進行が複雑であればあるほど良いみたいな価値基準なのですが、 **denolandにはコードとか３つくらいしかなさそう**なので、「C」「F」「G」の３コードのみで作っています。

![f:id:hashrock:20191215215053p:plain](/images/2019-12-15-deno-drawing-howto/4.png)

音色は Studio One に標準で付いている Presence というマルチ音源を使っています。 しかし正直音が容量の割にチープで、普段遣いはちょっと厳しいんですが、今回の場合だと全然チープで問題ないですね。普段はKontaktとの併用です。

Studio Oneでメロディトラックを打ち込んだら、midiファイルにエクスポートし、VOCALOIDに取り込みます。

![f:id:hashrock:20191215215917p:plain](/images/2019-12-15-deno-drawing-howto/5.png)

歌詞を地道に入力していきます。ベタ打ちですね。世の中には神調教とかありますがそこまでしなくてもいいかなと。 不自然な部分は音長調整だけでも結構なんとかなったりします。使っているのはVOCALOID3の [Yukari](https://www.ah-soft.com/vocaloid/yukari/) です。

WAV出力してStudio Oneに取り込みます。

![f:id:hashrock:20191215220732p:plain](/images/2019-12-15-deno-drawing-howto/6.png)

ボーカルだけはコンプ・EQ・リバーブを適当にかけます。っていうかこれはプリセットだったかもしれないです。なんのこだわりもありません。

![f:id:hashrock:20191215222131p:plain](/images/2019-12-15-deno-drawing-howto/7.png)

マスターにエフェクトをかけていきます。これはOzoneといって、それなりに高いエフェクターですが、掛けると金の匂いがする音になります。

![f:id:hashrock:20191215222241p:plain](/images/2019-12-15-deno-drawing-howto/8.png)

これはINTENSITYというエフェクトで、半額セールで買いましたが定価が４万くらいします（買うのかなり悩みました）。掛けるとやはり金の匂いがします。

どちらも、AIが音源を聞いて分析してよしなにやってくれるタイプのエフェクターです。原理的なものはわかりません。 マスタリングに関してはやればやるほど自分の耳に自信がなくなってくるので、もうAIに任せてしまいたいですね。

エフェクトありなしでビフォーアフターの音源をアップします。

[Before](https://www.dropbox.com/s/fk19r3ce85a7oci/denosong-pre.mp3?dl=0) [After](https://www.dropbox.com/s/gnbcjvz0rkeu5vx/denosong.mp3?dl=0)

最終的にWAVファイルにレンダリングして終わりです。

# こぼれ話 DTMの始め方について

DTM / 作曲は基本お金のかからない趣味なので結構おすすめです。ただ考えながら買わないとプラグインをセールだからって買い漁ってお金を浪費することになります（そう、私のように…）。

Studio Oneは軽いので使っているだけですが、どうにも内蔵音源が弱いのでStudio One以外にも色々と買うことになります。 Macならガレバンでいいと思います。内蔵音源もちゃんとしてますし。テクノが好きならFL Studioとかいいのかな。プロはCubase使ってる人が多いらしいです。 DTM製品にLite版を添付していたり、機能制限フリー版を出している場合が結構あるので、いきなり買わないほうがいいと思います。

Studio Oneを買うならマイク・ヘッドフォン・オーディオIF全部入りの[激安DTMセット](https://www.amazon.co.jp/PreSonus-DTM%E3%82%BB%E3%83%83%E3%83%88-AudioBox-iTwo-STUDIO/dp/B00OITWAS4/)とか出してるので、そっちを狙っていくのもありです。どうせオーディオIFは必要になるので。

生楽器をやっている人は、録音して入れるとかなり打ち込み臭をカバーすることができると思います。録音のためにマイクも用意しておくとGoodです。

キーボードも一つあるといいです。やはり和音が出せる楽器を一つ持っておくと便利です。 私が使ってるキーボードはこれです。スペースのない人は[nanoKEY](https://www.soundhouse.co.jp/products/detail/item/162191/)もいいですね。

[https://www.soundhouse.co.jp/products/detail/item/210571/](https://www.soundhouse.co.jp/products/detail/item/210571/)

ただ、重要なのは、音楽ツール業界はブラックフライデーとかで50%OFFのセールとか急に始めたりするので、定価で買うのは少し調べてからのほうが良いです。

# 手順４：イントロを作る

イントロアニメーションはクリスタで作画しています。

![f:id:hashrock:20191215205712p:plain](/images/2019-12-15-deno-drawing-howto/9.png)

とにかく２枚アニメーションでも作っておくと見栄えがします。

![f:id:hashrock:20191215212830g:plain](/images/2019-12-15-deno-drawing-howto/10.gif)

今はクリスタやProcreateのような、アニメーション機能を持つペイントツールが安価に入手できていい時代だなぁと思います。 やっぱり、普段使っているペン設定やショートカットがそのまま使えるのは重要ですからね。

ペンタブはIntuos ProのMediumです。最近はちょっとしたものでもiPad Proで描くことのほうが多いですが、取り込むのすらだるいときはPCで描きます。

# 手順５：動画を組む

素材を組み上げていきます。私が使っているのは [Vegas](https://www.vegascreativesoftware.com/int/vegas-movie-studio/) という動画エディタです。

![f:id:hashrock:20191215210822p:plain](/images/2019-12-15-deno-drawing-howto/11.png)

Vegasはかつて ACID という作曲ソフトを作っていた Sonic Foundry という会社の製品です。操作系もACIDと共通しており、学習コストが低いなと思って買いました。 ちょっと今となってはUIやエフェクト、機能に古さを感じないこともないです。

ともかくこれしかないんで、字幕を入れたり、素材に対してのパン・ズームを設定します。最後に YouTube 向けのレンダリングをして終わりです。

![f:id:hashrock:20191215213901g:plain](/images/2019-12-15-deno-drawing-howto/12.gif)

「ベジェカーブ　ベジェカーブ」の所でぐいっとズームを設定しているところです。バウンディングボックスですね。

# まとめ

見返すと、わりかし色々オーサリングツールを使ってるなーと実感しました。 特にタイムラインUIへの依存度が高いですね。 ゆくゆくは、自作ツールを使っての動画作成とか、できたらいいなぁと思います。

# 余談：ガントチャート

私が複雑GUI会などで「ガントチャート」に異常に執着しているのは、こういうUIが頻出だからです。

Studio One ソングUI

![f:id:hashrock:20191215211436p:plain](/images/2019-12-15-deno-drawing-howto/13.png)

Studio One ピアノロールUI

![f:id:hashrock:20191215211512p:plain](/images/2019-12-15-deno-drawing-howto/14.png)

Vegasタイムライン

![f:id:hashrock:20191215211534p:plain](/images/2019-12-15-deno-drawing-howto/15.png)

CLIP STUDIO アニメーションタイムライン

![f:id:hashrock:20191215211609p:plain](/images/2019-12-15-deno-drawing-howto/16.png)

まあタイムラインUIですね…

常々思うのは、こういったタイムラインに対してアイテムを配置して微調整するようなUIのコントロールが今ひとつ統一が取れていないということです。 ショートカットキーやオブジェクトスナップの挙動、グリッドなんかがある程度統一されたら、お互いに乗り換えるコストが低くなるような気がしているんですよね。

