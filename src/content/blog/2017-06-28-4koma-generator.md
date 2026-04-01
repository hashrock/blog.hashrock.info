---
title: 'プレーンテキストから４コママンガに変換出来るツールを作った'
description: ''
pubDate: 'Jun 28 2017'
heroImage: '/images/2017-06-28-4koma-generator/0.png'
---

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2017-06-28-4koma-generator/0.png" alt="f:id:hashrock:20170628000458p:plain" title="f:id:hashrock:20170628000458p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p><blockquote data-conversation="none" class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">白ハゲ４コマメーカー リリースしました！<br>テキストを入力してポンポンスタンプを押すだけで４コマ漫画を作れます。<br>※Twitterに直接画像をアップロードする機能はないので、ローカルに一旦保存してください<a href="https://t.co/RCX183cdW8">https://t.co/RCX183cdW8</a><a href="https://twitter.com/hashtag/%E7%99%BD%E3%83%8F%E3%82%B2%EF%BC%94%E3%82%B3%E3%83%9E%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC?src=hash&amp;ref_src=twsrc%5Etfw">#白ハゲ４コマメーカー</a> <a href="https://t.co/qbvRHqO5R3">pic.twitter.com/qbvRHqO5R3</a></p>&mdash; hashrock (@hashedrock) <a href="https://twitter.com/hashedrock/status/879712337715904512?ref_src=twsrc%5Etfw">2017年6月27日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </p>

<p>作りました。</p>

<p><a href="https://mangadown.netlify.app/">https://mangadown.netlify.app/</a></p>

<p>ここの所、Markdownからすべてを生成することを目指した「anydownプロジェクト」というのをやってます。</p>

<p>その流れで４コマもテキストから生成できそうだな、と思いついたので作りました。別にMarkdownじゃないんですが、それなりに書きやすいんじゃないかと思います。
大層なことにそれらしいWebフォントを使っていたり、縦書き頑張っていたりするので、白ハゲ漫画を作るだけじゃなくて、普通に４コマのテンプレート生成ツールとしても十分使えると思います。</p>

<p>白ハゲというのは一体何なのか説明すると、「Twitter上で白いキャラクターに持論を代弁させる」というのが何故か微妙に流行り、それを揶揄する用語として「白ハゲ」という言葉が生まれたようなのですが、若干ハイコンテキストです。
なので、白ハゲ４コマメーカーという名前にしていますが「Mangadown」が正式名称です。</p>

<p>※個人的には、Twitterはもともと万人が聞かれてもいないのに持論を展開して楽しむ所だと考えているので、別に白ハゲ漫画に対して特段の意見はありません。好きな表現方法を選ぶべきです。</p>

<p>※あえて言うなら、自分は色白の上に薄毛の兆候があるため、あまり白ハゲ白ハゲ言っていると自分自身が白ハゲになりそうです。</p>

<p>明日Node学園に遊びに行くので、そのためのネタ仕込みという側面もあります。</p>

<p>作っていて驚いたのは、<a href="http://fabricjs.com/">Fabric.js</a>の高機能さです。canvas要素にアタッチするだけで、リサイズUIの付いた図形やら画像やらを放り込むことができます。更にisDrawingModeというフラグをtrueにするだけで、canvas上に手書きが出来て、書いた結果はオブジェクトになる。実際このツールの半分くらいの機能はFabric.js組み込み機能でまかなえている気がします。</p>

<p>さて、次は何をテキストから生成すべきでしょうかね。</p>

<p>P.S.</p>

<p>スタンプ募集中です。GitHubにIssueを立ててあります。</p>

<p><a href="https://github.com/anydown/mangadown/issues/1">https://github.com/anydown/mangadown/issues/1</a></p>

<p>一緒に<a href="https://github.com/anydown/">anydown</a>やってくれる仲間も募集中です。</p>

-----
