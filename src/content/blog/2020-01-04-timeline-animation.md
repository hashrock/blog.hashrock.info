---
title: 'テキストでタイムラインアニメーションを作れるライブラリを作った'
description: ''
pubDate: 'Jan 04 2020'
heroImage: '/images/2020-01-04-timeline-animation/0.png'
---

`0----1----2---` みたいな形式のテキストでタイムラインアニメーションを作れるライブラリを作りました。

しゅうまいさんと[「Webでタイムラインアニメーションを作るのがだるい」的な話をしていて](https://twitter.com/__syumai/status/1212993753264222209)、 AAみたいな発想で楽をできないかなと思ったのが発端になっています。

まずは下記のデモを見てください。

See the Pen [TimelineDown Example](https://codepen.io/hashrock/pen/mdyqBoN) by hashrock ([@hashrock](https://codepen.io/hashrock)) on [CodePen](https://codepen.io).

下記の文字列を渡すことで、４つの絵文字がそれぞれ個別のアニメーションをします。

```
const p1 = "--------0----1--2-------";
const p2 = "---------0----1--2------";
const p3 = "----------0----1--2-----";
const p4 = "---------------0----1--2";
```

上記文字列はFlashでいう「タイムラインUI」をアスキーアート的に表現したものです。

![f:id:hashrock:20200104002929p:plain](/images/2020-01-04-timeline-animation/0.png)

（画像は[Adobe Animate CC でフレームとキーフレームを使用する方法](https://helpx.adobe.com/jp/animate/using/frames-keyframes.html)より引用。CC BY-NC-SA）

こういうタイムラインアニメーションを作るには、今どきだとAfterEffectsなどの専用ツールを使うわけですが、 テキストだけで作れるんであれば、エディタから離れずにタイミング調整ができるのでプログラマーは嬉しいわけです。

![f:id:hashrock:20200104010451g:plain](/images/2020-01-04-timeline-animation/1.gif)

中身はどうなっているかというと、定番アニメーションライブラリGSAPの[TimelineMax](https://greensock.com/docs/v2/TimelineMax)をラップしています。 テキストをパースしてTimelineを生成しているだけで実装はほぼすっからかんです。 できることや渡せるオプションはTimelineMaxとほぼ同じと考えてください。

# 使い方

下記のコードをインポートします。

```
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@hashrock/timelinedown@1.0.3/index.browser.js"></script>
```

使っているところは下記のような感じです。

```javascript
// タイムラインを定義する。
// 文字一つが0.1秒を表す。「-」は休符のようなもの。
// 数字の文字に到達したら、後述のキーフレームによりアニメーションが起きる。
const str = "------------0----1--2";

// キーフレームを定義する。
// 配列の１つ目が「0」の文字にアサインされる。
// easeにはGSAPのイージング関数を指定することができる。
// （この場合はバウンドする）
const keyframes = [
  { x: 200 },
  { y: 200, ease: Bounce.easeOut },
  { opacity: 0 }
];

// セレクタ、タイムライン文字列、キーフレーム、オプションを順に渡す。
// この場合は「obj」というidの要素にアニメーションがかかる。
// オプションに `frameDuration` を渡すと、1フレームあたりの時間が設定できる（デフォルト0.1秒）。
// それ以外はTimelineMaxに準じる。
const tl = timelineDown("#obj", str, keyframes, {
  repeat: 99,
  frameDuration: 0.1
});
```

# リポジトリ

[https://github.com/hashrock/timelineDown](https://github.com/hashrock/timelineDown)

実務で使ったわけではないので、実用になるかわかりませんが、気が向いたら自分でも使ってみます。

# 着想元

![f:id:hashrock:20200104005406p:plain](/images/2020-01-04-timeline-animation/2.png)

CLIP STUDIOのアニメ機能で、各コマの対応レイヤを数字で指定するのが着想元になっています。 なんかワイルドなUIだなと最初思ったのですが、使っていくとこれが一番使いやすいし、コマの使いまわしができて効率的なんですよね。最近のイチオシUIでした。

# 更新（2020/01/05）

HTMLのdata属性経由でもアニメーションを設定できるようになりました。

See the Pen [TimelineDown Example Attach](https://codepen.io/hashrock/pen/JjoOqYJ) by hashrock ([@hashrock](https://codepen.io/hashrock)) on [CodePen](https://codepen.io).

\-----
