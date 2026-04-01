---
title: '「金曜GUI」という活動をやっていた'
description: ''
pubDate: 'Oct 02 2020'
heroImage: '/images/2020-10-02-friday-gui/0.png'
---

今年２月から「金曜になにかGUIを一つ作る」というフロントエンド素振り活動をしていたのだけど、最近あんまりやらなくなってしまったため、一旦成果物をまとめる。

# 発端

今年２月末の金曜日のこと。

ちょうど自粛ムードが広がりはじめた頃で街に活気がなく、微妙に暗い気分が広がっていた。

そういえば今日プレミアムフライデーだったなーとか思い出し、 明るいことの一つもあればいいのにと考えながら、とぼとぼ帰っていた。

**「こういう時って自分から動き出すと気分が晴れたりするよなぁ。GUI作ってたら気分が晴れるんじゃないだろうか」**

と考えるに至り、突発的に下記のツイートをした。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1233352289437372418"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


で、おもむろにGUIを制作している様子を配信し始めた。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1233366548661714944"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


説明もなく突然GUI制作風景を配信し始めるという意味不明な行動を始めたんだけど、 反応がなかったら静かにツイ消ししようかなーと思っていた。

# miyaokaさん参戦

そこで嬉しいことに、企画意図を察したのかmiyaokaさんが乗ってきてくれた。


<blockquote class="twitter-tweet"><a href="https://twitter.com/miyaoka/status/1233407039251996672"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


miyaokaさんはカオスな企画に対する理解力がすごい。混沌耐性持ちなんだと思う。

配信に使っていたpixiv Sketchでは画面共有と音声チャットが可能だったので、miyaokaさんと話しながら CodePen上でライブコーディングを進めた。

# 成果物

初日はチェックボックスを作った。連打してもこっそり戻るチェックボックス。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1233418712918544387"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


miyaokaさんはトイレットペーパーを引き出すGUIを作った。


<blockquote class="twitter-tweet"><a href="https://twitter.com/miyaoka/status/1233427406062440449"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


これはインパクトすごくて爆伸びした（なおこの頃トイレットペーパーの買い占めが起きていた。GUIも世の中もクレージーだった）


<blockquote class="twitter-tweet"><a href="https://twitter.com/miyaoka/status/1233639988727709696"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


この活動はやったりやらなかったりしながら半年ぐらい続いた。

以下、代表作です。

## かっこよくアニメーションするカレンダー


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1235935883817144326"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


縦型カレンダーと月間カレンダーって、7日単位で折り返してるか1日単位で折り返してるかの 違いでしかないなぁと考え、じゃあトランジションかけられるよねと思って作ったもの。

この考え方は別の日に図示したものがある。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1227574947662327808"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## 遊べるラジオボタン

香川県のゲーム条例が話題になっていた頃に作ったもの。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1238510326712168448"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


ゴルフゲーム的な感じで遊べるようにした。香川の子どもがあんまりゲーム遊べなくてかわいそうだから、 GUIで遊べればいいのでは？と思って作った。

## ドット絵チャット


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1243546624107790336"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


16 x 16pxのドット絵で作った絵文字で喋れるチャット。他人の作った文字を自分も使えるのが肝。

絵文字文化ってかなり国際交流に貢献していると思っていて、絵文字しか使えないチャットがあったらどうだろうと思って作った。 あとは「文字をコミュニティ内で発明する」のは面白いのではと思った（slackの絵文字文化って結構それだなと思う）。


<blockquote class="twitter-tweet"><a href="https://twitter.com/miyaoka/status/1243557342089601024"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


最終的にはこれだとコミュニケーションはつらいねというオチになった。

## 動くDenoくんのSVG

このブログでも度々登場してるDenoくんなんだけど、[ICSのゆきさんがよくやってる関節アニメーション](https://ics.media/entry/200225/)で動かしたら面白いんじゃないかなと思って、練習としてやってみた。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1246086971249684481"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


ツイートにも書いてるけど、小学生の頃工作でこういうの作ったわーというのをめっちゃ思い出した。

![f:id:hashrock:20201002215347p:plain](/images/2020-10-02-friday-gui/0.png)

こういう感じで、最近はちょっと難し目のSVGはFigmaで作ってエクスポートして作っている。パーツごとにCopy as SVGとかできて便利。

最終的な完成品。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1246103287687864320"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


これはちょっと続きがあって、当時DenoのAPIドキュメントサイトであるdeno\_docを作っていた lcasdev の目に止まったらしくリプライがきた。


<blockquote class="twitter-tweet"><a href="https://twitter.com/lcasdev/status/1246144117001924608"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


deno\_doc のローディングが結構長いから、ローディングアニメーションに使いたいとのことだった。これは嬉しかったので、SVG + CSSアニメーションに書き換えてVue依存を外した上で取り込んでもらった。

最終的に deno\_doc はDeno公式に取り込まれることになった。下記からまだアニメーションを見ることができる。

[https://doc.deno.land/](https://doc.deno.land/)

Denoと関わってると何故か熱い展開になることが多い。

# CSS豆本

Meguro.CSSの[Nakaya](https://codepen.io/YusukeNakaya/)さんから教わった、CSSで3Dをやるテクをやってみたいなと思って作ったもの。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1279058466808578048"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


これは結構スムーズに実装できたので、せっかくなのでDEV.toに怪しい英語で解説記事を書いた。

[https://dev.to/hashrock/making-miniature-book-with-css-590p](https://dev.to/hashrock/making-miniature-book-with-css-590p)

# 他の作品

miyaokaさんのプルダウン小説とかも面白かった。


<blockquote class="twitter-tweet"><a href="https://twitter.com/miyaoka/status/1258797164311965697"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


他の作品は「[#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hashtag_click&f=live)」タグを眺めてもらえればと思います。

金曜以外にもやることがあり「[#GUI活](https://twitter.com/hashtag/GUI%E6%B4%BB?src=hashtag_click&f=live)」というタグもあります。

あとから参加してきてくれた、nekobatoさんやyymmさんの作品もあります。

# まとめ

やっぱりGUIをスクラッチで作るの楽しいなぁと思った。かなりの三日坊主なんだけど、これは割と続いてよかった。

半年やってみて別に実装力が上がったとは思わないんだけど、 意味わからん要件来てもまあ時間かければ作れるだろみたいな根拠のない自信はついたかもしれない。

「#金曜GUI」 は勝手にやっていいやつなので、皆さんもぜひGUIを作ってみてください。

# 2020/10/05追記

miyaokaさんがアンサーブログを書いてくれました。miyaokaさんの成果物について掘り下げた文章が読めるのでぜひ読んでみてください。

[https://note.com/miyaoka/n/n09fb5cf0cff9](https://note.com/miyaoka/n/n09fb5cf0cff9)

