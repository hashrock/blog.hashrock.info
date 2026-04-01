---
title: 'プログラマー絵茶を開催した＆リアルタイム共同開発した'
description: ''
pubDate: 'Jul 20 2018'
heroImage: '/images/2018-07-20-painter-collab/0.png'
---

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/0.png" alt="f:id:hashrock:20180720124626p:plain" title="f:id:hashrock:20180720124626p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>絵茶というのは、お絵かきチャットの略称で、一枚の共有キャンバスにみんなで絵を描くという遊びのこと。</p>

<p>今回は、Twitter上で人を募って２回ほど開催してみたという話。</p>

<h1>なぜ開催した</h1>

<p>絵を書きたいプログラマーがTL上に増えた気がした（N=２くらい）ので、勢いで開催した。</p>

<p>Twitterにいる人でキャラ絵を描けるようになってみたいって人は結構いるみたいで、そういう人たちをお絵かき勢に引きずり込みたいなぁとも思っていた。</p>

<h1>どの絵茶を使うか問題</h1>

<p>昔ながらの絵茶はJavaやFlashで作られており、最近のブラウザでは動作しづらい。HTML5ベースの絵茶を探す必要があった。</p>

<p>また、人気のある絵茶サービスだった「pixiv chat」は<a href="https://www.pixiv.net/info.php?id=4036">去年終了</a>し、セルシスが提供しているkakooyo!という絵茶サービスは最大４人までの制約があるのと、PCから描くことができないという問題があった。</p>

<p>まず最初に選択肢に上がったのはMagicalDrawで、これはChromeから使うのであれば一番良さそうだった。</p>

<p><a href="https://draw.kuku.lu/">MagicalDraw | &#x304A;&#x7D75;&#x304B;&#x304D;&#x30C1;&#x30E3;&#x30C3;&#x30C8;&#x30EC;&#x30F3;&#x30BF;&#x30EB;&#x30B5;&#x30FC;&#x30D3;&#x30B9;</a></p>

<p>しかし最近iPad + Apple Pencilを購入してこれで書きたかったのだが、どうもMagicalDrawはiOS環境だとかなり簡素なUIになってしまうのと、スクロールの挙動が若干怪しかった。</p>

<p>次に見つけたのがDraw.Chatという海外のサービス。</p>

<p><a href="https://draw.chat/">Draw.Chat - Virtual Classroom</a></p>

<p>これはなんとビデオチャットまでできる優れもの。描いている途中にiPadで文字チャットをするのはかなりだるく、音声チャットできると楽だなと思っていたので、これは良いものだと思う。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/1.png" alt="f:id:hashrock:20180720123648p:plain" title="f:id:hashrock:20180720123648p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>第１回はこれで開催したのだが、問題があって、描画量が多くなるとどんどん重くなっていく。スクロールするだけでリドローが発生する。</p>

<p>あと多機能なせいで、初見の人がUIに戸惑う。興味持って見に来ただけの人がすぐ理解できるUIだったらいいのになぁと思った。</p>

<h1>結局自作</h1>

<p>第二回をやるにあたって、そもそもシンプルで安定したやつがほしいという思いが出てきてしまい、結局絵茶を自作することにした。</p>

<p>ゼロから作るのはつらいなと思ったので、GitHubからベースにできそうな絵茶実装を探して、下記のプロジェクトを元に作ることにした。</p>

<p><a href="https://github.com/romebop/whiteboard">GitHub - romebop/whiteboard: interactive drawing &amp; chatting</a></p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/2.png" alt="f:id:hashrock:20180720124315p:plain" title="f:id:hashrock:20180720124315p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<h1>変更点</h1>

<p>まずは、描画スペースを広げてスクロール可能にした。</p>

<p>前回開催して思ったのが、絵を描いたことのない訪問者は基本的に見るだけで描かなくなってしまうという点だった。</p>

<p>多分、上手い人がガリガリ描いているスペースに絵を描き入れるのは緊張するのでは、と思ったので、右側にピクトチャットもどきを実装することにした。その結果が下記。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/3.png" alt="f:id:hashrock:20180720124000p:plain" title="f:id:hashrock:20180720124000p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<h1>第二回</h1>

<p>自作絵茶を投入して第二回を開催したのだが、同時に試みとして「せっかく自作なんだからリアルタイムに開発する」という企画を行った。VSCode Live Shareという機能を使って、Twitterで相互フォローしてる人なら開発に参加できる体制にした。</p>

<p><blockquote class="twitter-tweet" data-lang="HASH(0xb94c810)"><p lang="ja" dir="ltr">絵茶開発をゆるゆるやってます。相互フォローの方限定で、VSCodeの共同編集に入れるリンクを公開してます！<br><br>絵茶開発リンク（VSCode Live Share） <a href="https://t.co/sxYksukdWG">https://t.co/sxYksukdWG</a></p>&mdash; はっしゅろっく (@hashedrock) <a href="https://twitter.com/hashedrock/status/1019897998875082752?ref_src=twsrc%5Etfw">July 19, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p>これにはkiyopikkoさんが応じてくれて、チャットしている裏でゴリゴリCSSを編集してUIを改善して頂いた。</p>

<p>最初こんなのだったのが</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/4.png" alt="f:id:hashrock:20180720124926p:plain" title="f:id:hashrock:20180720124926p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>現在こうなった</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-07-20-painter-collab/5.png" alt="f:id:hashrock:20180720124951p:plain" title="f:id:hashrock:20180720124951p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>この変更は開催中に本番反映された。</p>

<p>Live Shareでの共同開発は本当に楽しいので、みんな体験した方が良いと思う。</p>

<h1>もう一回くらい開催したい</h1>

<p>なかなか参加者増えないなぁという感じはあるのだけど、絵茶自体は参加してもらえれば楽しいのがわかってもらえると思うので、もう一回くらいは開催してみてもいいかなと思っている。</p>

<p>興味ある方は<a href="https://twitter.com/hashedrock">@hashedrock</a>をフォローしてください。やるときアナウンスします。やるなら多分7/26の22:00くらいかな。</p>

<p>また、絵茶作成自体に興味がある方は、下記のScrapboxに参加してください。</p>

<p><a href="https://scrapbox.io/pg-drawing/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E7%B5%B5%E8%8C%B6%E3%81%AE%E4%BC%9A">https://scrapbox.io/pg-drawing/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E7%B5%B5%E8%8C%B6%E3%81%AE%E4%BC%9A</a></p>

-----
