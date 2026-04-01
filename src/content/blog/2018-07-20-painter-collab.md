---
title: 'プログラマー絵茶を開催した＆リアルタイム共同開発した'
description: ''
pubDate: 'Jul 20 2018'
heroImage: '/images/2018-07-20-painter-collab/0.png'
---

![f:id:hashrock:20180720124626p:plain](/images/2018-07-20-painter-collab/0.png)

絵茶というのは、お絵かきチャットの略称で、一枚の共有キャンバスにみんなで絵を描くという遊びのこと。

今回は、Twitter上で人を募って２回ほど開催してみたという話。

# なぜ開催した

絵を書きたいプログラマーがTL上に増えた気がした（N=２くらい）ので、勢いで開催した。

Twitterにいる人でキャラ絵を描けるようになってみたいって人は結構いるみたいで、そういう人たちをお絵かき勢に引きずり込みたいなぁとも思っていた。

# どの絵茶を使うか問題

昔ながらの絵茶はJavaやFlashで作られており、最近のブラウザでは動作しづらい。HTML5ベースの絵茶を探す必要があった。

また、人気のある絵茶サービスだった「pixiv chat」は[去年終了](https://www.pixiv.net/info.php?id=4036)し、セルシスが提供しているkakooyo!という絵茶サービスは最大４人までの制約があるのと、PCから描くことができないという問題があった。

まず最初に選択肢に上がったのはMagicalDrawで、これはChromeから使うのであれば一番良さそうだった。

[MagicalDraw | お絵かきチャットレンタルサービス](https://draw.kuku.lu/)

しかし最近iPad + Apple Pencilを購入してこれで書きたかったのだが、どうもMagicalDrawはiOS環境だとかなり簡素なUIになってしまうのと、スクロールの挙動が若干怪しかった。

次に見つけたのがDraw.Chatという海外のサービス。

[Draw.Chat - Virtual Classroom](https://draw.chat/)

これはなんとビデオチャットまでできる優れもの。描いている途中にiPadで文字チャットをするのはかなりだるく、音声チャットできると楽だなと思っていたので、これは良いものだと思う。

![f:id:hashrock:20180720123648p:plain](/images/2018-07-20-painter-collab/1.png)

第１回はこれで開催したのだが、問題があって、描画量が多くなるとどんどん重くなっていく。スクロールするだけでリドローが発生する。

あと多機能なせいで、初見の人がUIに戸惑う。興味持って見に来ただけの人がすぐ理解できるUIだったらいいのになぁと思った。

# 結局自作

第二回をやるにあたって、そもそもシンプルで安定したやつがほしいという思いが出てきてしまい、結局絵茶を自作することにした。

ゼロから作るのはつらいなと思ったので、GitHubからベースにできそうな絵茶実装を探して、下記のプロジェクトを元に作ることにした。

[GitHub - romebop/whiteboard: interactive drawing & chatting](https://github.com/romebop/whiteboard)

![f:id:hashrock:20180720124315p:plain](/images/2018-07-20-painter-collab/2.png)

# 変更点

まずは、描画スペースを広げてスクロール可能にした。

前回開催して思ったのが、絵を描いたことのない訪問者は基本的に見るだけで描かなくなってしまうという点だった。

多分、上手い人がガリガリ描いているスペースに絵を描き入れるのは緊張するのでは、と思ったので、右側にピクトチャットもどきを実装することにした。その結果が下記。

![f:id:hashrock:20180720124000p:plain](/images/2018-07-20-painter-collab/3.png)

# 第二回

自作絵茶を投入して第二回を開催したのだが、同時に試みとして「せっかく自作なんだからリアルタイムに開発する」という企画を行った。VSCode Live Shareという機能を使って、Twitterで相互フォローしてる人なら開発に参加できる体制にした。

> 絵茶開発をゆるゆるやってます。相互フォローの方限定で、VSCodeの共同編集に入れるリンクを公開してます！
>

<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1019897998875082752"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


これにはkiyopikkoさんが応じてくれて、チャットしている裏でゴリゴリCSSを編集してUIを改善して頂いた。

最初こんなのだったのが

![f:id:hashrock:20180720124926p:plain](/images/2018-07-20-painter-collab/4.png)

現在こうなった

![f:id:hashrock:20180720124951p:plain](/images/2018-07-20-painter-collab/5.png)

この変更は開催中に本番反映された。

Live Shareでの共同開発は本当に楽しいので、みんな体験した方が良いと思う。

# もう一回くらい開催したい

なかなか参加者増えないなぁという感じはあるのだけど、絵茶自体は参加してもらえれば楽しいのがわかってもらえると思うので、もう一回くらいは開催してみてもいいかなと思っている。

興味ある方は[@hashedrock](https://twitter.com/hashedrock)をフォローしてください。やるときアナウンスします。やるなら多分7/26の22:00くらいかな。

また、絵茶作成自体に興味がある方は、下記のScrapboxに参加してください。

[https://scrapbox.io/pg-drawing/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E7%B5%B5%E8%8C%B6%E3%81%AE%E4%BC%9A](https://scrapbox.io/pg-drawing/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E7%B5%B5%E8%8C%B6%E3%81%AE%E4%BC%9A)

