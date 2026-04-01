---
title: '複雑GUIの会を主催した'
description: ''
pubDate: 'May 04 2019'
heroImage: '/images/2019-05-04-complex-gui/0.png'
---

**「GUIの雑談を無限にしたいなぁ」**と思い、会を開催しました。

[https://twipla.jp/events/380070](https://twipla.jp/events/380070)

上記のイベントページを立てて、Twitter上で募集をかけたところ、 この内容だけでピンと来てしまったガチ勢が9人も集まりました。 ドローツールやマインドマップ、作曲ツール等を自作するフルスクラッチマンたちです。

予約したルノアールの会議室は過密状態になってしまいました。 （もう少し広い部屋にしておけば…と後悔しました）

> （ルノアールです） [#複雑GUI会](https://twitter.com/hashtag/%E8%A4%87%E9%9B%91GUI%E4%BC%9A?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/XDGWs3EwZd](https://t.co/XDGWs3EwZd)
>
> — みやおか (@miyaoka) [May 2, 2019](https://twitter.com/miyaoka/status/1123802449398181888?ref_src=twsrc%5Etfw)

職人タイプの方が多かったので終始和やかな雰囲気でしたが、 やはり実装に深入りしていくことが多く、あまりの情報密度に 私も話についていくのが大変だったと自白しておきます。

あと、なぜか開催前に「バウンディングボックス大会」が行われる雰囲気が醸成され、

**「せっかくなのでバウンディングボックスの話を…」**

という、今後人生で二度と聞くことがなさそうな言葉を聞けました。 バウンディングボックスとは、これです。

![f:id:hashrock:20190504000010p:plain](/images/2019-05-04-complex-gui/0.png) 画：hykwtakuminさん

全体で４時間の会でしたが、**自己紹介だけで２時間使いました。**

ガントチャートを３つも作るなど異常な執着を見せるhashrock

![/images/2019-05-04-complex-gui/1.gif](/images/2019-05-04-complex-gui/1.gif)

ハイパーイラストという概念を提唱し、早くもSVG芸人の片鱗を見せている[hykwtakumin](https://twitter.com/hykwtakumin)さん

![/images/2019-05-04-complex-gui/2.gif](/images/2019-05-04-complex-gui/2.gif)

高機能バウンディングボックスで名乗りを上げ、見るからに実装がしんどそうなマインドマップツールを作った[robokomy](https://twitter.com/robokomy)さん

![/images/2019-05-04-complex-gui/3.gif](/images/2019-05-04-complex-gui/3.gif)

バウンディングボックス中央に秘密のcircle要素を置くという秘技を教えてくれた[f\_subal](https://twitter.com/f_subal)さん（なぜなのかは本人に聞いてみてください）

![/images/2019-05-04-complex-gui/4.gif](/images/2019-05-04-complex-gui/4.gif)

ネイティブもWebGLもできて、ペイントツールとドローツールと3Dモデラーを一人（or 少人数）で作り、もはや個人でAdobeやってる感じの[seanchas\_t](https://twitter.com/seanchas_t)さん

![/images/2019-05-04-complex-gui/5.gif](/images/2019-05-04-complex-gui/5.gif)

Deno勢としてもおなじみだけれど、Canvas勢として「本物のバウンディングボックス」の実装を紹介してくれた[keroxp](https://twitter.com/keroxp)さん

![/images/2019-05-04-complex-gui/6.gif](/images/2019-05-04-complex-gui/6.gif)

ノーフレームワークでシンセもGUIもフルスクラッチの大作、作成中DAWを公開してくれた[jinjor](https://twitter.com/jinjor)さん

![/images/2019-05-04-complex-gui/7.png](/images/2019-05-04-complex-gui/7.png)

ファンが激増している[Scrapbox](https://scrapbox.io/)のスマホ向けテキスト選択UIや、SVG活用の最前線デモをしてくれた[daiiz](https://twitter.com/daizplus)さん

![https://gyazo.com/bb6048cdf7899003f79ba3c44b1ea478/raw](https://gyazo.com/bb6048cdf7899003f79ba3c44b1ea478/raw)

最高レベルに空気を読むドラッグアンドドロップを実装、作成途中のゲームも公開してほしすぎる[miyaoka](https://twitter.com/miyaoka)さん

![https://storage.googleapis.com/production-os-assets/assets/f6d0fd71-6bc5-421a-a7fd-fb8f80e79f68](https://storage.googleapis.com/production-os-assets/assets/f6d0fd71-6bc5-421a-a7fd-fb8f80e79f68)

圧倒的なバウンディングボックス力、フルスクラッチ力で圧巻のプレゼンをした[keimakai](https://twitter.com/keimakai1993)さん

![/images/2019-05-04-complex-gui/8.png](/images/2019-05-04-complex-gui/8.png)

濃いメンツが集まりました。

実際に自己紹介で使った資料は下記です。もうちょっと動画とかがあります。

[https://hackmd.io/s/HkV3jIujE](https://hackmd.io/s/HkV3jIujE)

実際の会の流れは、Twitterで「複雑GUI会」で検索すると、雰囲気がわかるかと思います。

[https://twitter.com/hashtag/複雑GUI会](https://twitter.com/hashtag/複雑GUI会)

# その他

- 「せっかくなので」というノリでバウンディングボックスが披露される
- 「VDOMなんかなくても、setInterval(cb, 16)で60fps出せば良い」というパワーワード
- みやおかさんの実況のおかげで、非参加者のコメントでTLが盛り上がる事態に
- フォントレンダリングの話題が頻出。[opentype.js](https://opentype.js.org/)などの知見が共有される
- 「contenteditable」「Safariのバグ」などのワードに反応して会場からうめき声が上がる
- バウンディングボックスのコード鑑賞コーナー
- STUDIOのバウンディングボックスの当たり判定実装に感嘆の声
- SVGはあくまでエクスポート形式とし、モデルにはしないほうがいいという知見（[daiizさんのまとめ](https://scrapbox.io/daiiz/%E8%A4%87%E9%9B%91GUI_%2F_SVG%E3%81%AE%E4%BC%9A#5cca9cefadf4e70000c6de33)を参照）
- [STUDIO](https://studio.design/ja)の二人と[pixivFACTORY](https://factory.pixiv.net/)のすばるさんが来ていたので、Web fontsのロード戦略など現場の濃い知見が共有される

# 感想

楽しかったけど、濃い話が4時間続くと流石に疲れた…

またやると思います！

# 参加者レポート

参加者のmiyaokaさんがレポートを書いてくれました！

[https://note.mu/miyaoka/n/n366ea8459461](https://note.mu/miyaoka/n/n366ea8459461)

\-----
