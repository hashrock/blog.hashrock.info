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

> [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw)
>
> — hashrock (@hashedrock) [2020年2月28日](https://twitter.com/hashedrock/status/1233352289437372418?ref_src=twsrc%5Etfw)

で、おもむろにGUIを制作している様子を配信し始めた。

> スライダー作ってる [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/f6tmHMzx67](https://t.co/f6tmHMzx67)
>
> — hashrock (@hashedrock) [2020年2月28日](https://twitter.com/hashedrock/status/1233366548661714944?ref_src=twsrc%5Etfw)

説明もなく突然GUI制作風景を配信し始めるという意味不明な行動を始めたんだけど、 反応がなかったら静かにツイ消ししようかなーと思っていた。

# miyaokaさん参戦

そこで嬉しいことに、企画意図を察したのかmiyaokaさんが乗ってきてくれた。

> はっしゅろっくさんとやっていってる [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/rWU6tQRwph](https://t.co/rWU6tQRwph)
>
> — miyaoka / STUDIO (@miyaoka) [2020年2月28日](https://twitter.com/miyaoka/status/1233407039251996672?ref_src=twsrc%5Etfw)

miyaokaさんはカオスな企画に対する理解力がすごい。混沌耐性持ちなんだと思う。

配信に使っていたpixiv Sketchでは画面共有と音声チャットが可能だったので、miyaokaさんと話しながら CodePen上でライブコーディングを進めた。

# 成果物

初日はチェックボックスを作った。連打してもこっそり戻るチェックボックス。

> チェックしきれないチェックボックス [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/w02jB8HfuD](https://t.co/w02jB8HfuD)
>
> — hashrock (@hashedrock) [2020年2月28日](https://twitter.com/hashedrock/status/1233418712918544387?ref_src=twsrc%5Etfw)

miyaokaさんはトイレットペーパーを引き出すGUIを作った。

> トイレットペーパーのGUI作った [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/KxxpBm73iU](https://t.co/KxxpBm73iU)
>
> — miyaoka / STUDIO (@miyaoka) [2020年2月28日](https://twitter.com/miyaoka/status/1233427406062440449?ref_src=twsrc%5Etfw)

これはインパクトすごくて爆伸びした（なおこの頃トイレットペーパーの買い占めが起きていた。GUIも世の中もクレージーだった）

> ゆうべ突発的にやった複数人でのライブコーディング、絵チャ的で楽しかったな。特にGUIのライブコーディングってのが見た目に分かりやすく、単目的で完成も速いので、動くものとしての進捗が出しやすい。それから画面自体にタイトルやアジェンダも書けるので要件が分かるのが良かった [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/OYJ4QFOkFM](https://t.co/OYJ4QFOkFM)
>
> — miyaoka / STUDIO (@miyaoka) [2020年2月29日](https://twitter.com/miyaoka/status/1233639988727709696?ref_src=twsrc%5Etfw)

この活動はやったりやらなかったりしながら半年ぐらい続いた。

以下、代表作です。

## かっこよくアニメーションするカレンダー

> シームレスに縦型になるカレンダー [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/Z1STtSlvRB](https://t.co/Z1STtSlvRB)
>
> — hashrock (@hashedrock) [2020年3月6日](https://twitter.com/hashedrock/status/1235935883817144326?ref_src=twsrc%5Etfw)

縦型カレンダーと月間カレンダーって、7日単位で折り返してるか1日単位で折り返してるかの 違いでしかないなぁと考え、じゃあトランジションかけられるよねと思って作ったもの。

この考え方は別の日に図示したものがある。

> カレンダーはぐるぐる巻いてるやつの仲間なんだけど、人生のイベントって濃淡あるのに時間を等分するの微妙ではと思ったりもする [pic.twitter.com/q1I1k4KFkJ](https://t.co/q1I1k4KFkJ)
>
> — hashrock (@hashedrock) [2020年2月12日](https://twitter.com/hashedrock/status/1227574947662327808?ref_src=twsrc%5Etfw)

## 遊べるラジオボタン

香川県のゲーム条例が話題になっていた頃に作ったもの。

> 遊べるラジオボタンを作りました。ゲームが禁止されてもGUIで遊べます[#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/1VNI7bjqm3](https://t.co/1VNI7bjqm3)
>
> — hashrock (@hashedrock) [2020年3月13日](https://twitter.com/hashedrock/status/1238510326712168448?ref_src=twsrc%5Etfw)

ゴルフゲーム的な感じで遊べるようにした。香川の子どもがあんまりゲーム遊べなくてかわいそうだから、 GUIで遊べればいいのでは？と思って作った。

## ドット絵チャット

> 謎のチャットができてきた [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/FdyfwkgJmB](https://t.co/FdyfwkgJmB)
>
> — hashrock (@hashedrock) [2020年3月27日](https://twitter.com/hashedrock/status/1243546624107790336?ref_src=twsrc%5Etfw)

16 x 16pxのドット絵で作った絵文字で喋れるチャット。他人の作った文字を自分も使えるのが肝。

絵文字文化ってかなり国際交流に貢献していると思っていて、絵文字しか使えないチャットがあったらどうだろうと思って作った。 あとは「文字をコミュニティ内で発明する」のは面白いのではと思った（slackの絵文字文化って結構それだなと思う）。

> [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) 1文字16pxで情報の伝達がつらい [pic.twitter.com/xaGgwXMpjM](https://t.co/xaGgwXMpjM)
>
> — miyaoka / STUDIO (@miyaoka) [2020年3月27日](https://twitter.com/miyaoka/status/1243557342089601024?ref_src=twsrc%5Etfw)

最終的にはこれだとコミュニケーションはつらいねというオチになった。

## 動くDenoくんのSVG

このブログでも度々登場してるDenoくんなんだけど、[ICSのゆきさんがよくやってる関節アニメーション](https://ics.media/entry/200225/)で動かしたら面白いんじゃないかなと思って、練習としてやってみた。

> 昔ボール紙でこういう玩具を作ったことがある気もしないでもない [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/IQk2uT7gfl](https://t.co/IQk2uT7gfl)
>
> — hashrock (@hashedrock) [2020年4月3日](https://twitter.com/hashedrock/status/1246086971249684481?ref_src=twsrc%5Etfw)

ツイートにも書いてるけど、小学生の頃工作でこういうの作ったわーというのをめっちゃ思い出した。

![f:id:hashrock:20201002215347p:plain](/images/2020-10-02-friday-gui/0.png)

こういう感じで、最近はちょっと難し目のSVGはFigmaで作ってエクスポートして作っている。パーツごとにCopy as SVGとかできて便利。

最終的な完成品。

> ただのアニメーションをGUIと言い張ることに成功した [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/TxLLYYlz56](https://t.co/TxLLYYlz56)
>
> — hashrock (@hashedrock) [2020年4月3日](https://twitter.com/hashedrock/status/1246103287687864320?ref_src=twsrc%5Etfw)

これはちょっと続きがあって、当時DenoのAPIドキュメントサイトであるdeno\_docを作っていた lcasdev の目に止まったらしくリプライがきた。

> Looks awesome! Can we use the SVG as a loading indicator for the deno\_doc frontend? [https://t.co/0ANNVH0cKW](https://t.co/0ANNVH0cKW)
>
> — Luca Casonato (@lcasdev) [2020年4月3日](https://twitter.com/lcasdev/status/1246144117001924608?ref_src=twsrc%5Etfw)

deno\_doc のローディングが結構長いから、ローディングアニメーションに使いたいとのことだった。これは嬉しかったので、SVG + CSSアニメーションに書き換えてVue依存を外した上で取り込んでもらった。

最終的に deno\_doc はDeno公式に取り込まれることになった。下記からまだアニメーションを見ることができる。

[https://doc.deno.land/](https://doc.deno.land/)

Denoと関わってると何故か熱い展開になることが多い。

# CSS豆本

Meguro.CSSの[Nakaya](https://codepen.io/YusukeNakaya/)さんから教わった、CSSで3Dをやるテクをやってみたいなと思って作ったもの。

> 端をめくってる感じにするために3D表現入れてみた[#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [#GUI活](https://twitter.com/hashtag/GUI%E6%B4%BB?src=hash&ref_src=twsrc%5Etfw) [#CSS豆本](https://twitter.com/hashtag/CSS%E8%B1%86%E6%9C%AC?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/5t27beisGa](https://t.co/5t27beisGa)
>
> — hashrock (@hashedrock) [2020年7月3日](https://twitter.com/hashedrock/status/1279058466808578048?ref_src=twsrc%5Etfw)

これは結構スムーズに実装できたので、せっかくなのでDEV.toに怪しい英語で解説記事を書いた。

[https://dev.to/hashrock/making-miniature-book-with-css-590p](https://dev.to/hashrock/making-miniature-book-with-css-590p)

# 他の作品

miyaokaさんのプルダウン小説とかも面白かった。

> [#金曜GUI](https://twitter.com/hashtag/%E9%87%91%E6%9B%9CGUI?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/gBKr6ASoMI](https://t.co/gBKr6ASoMI)
>
> — miyaoka / STUDIO (@miyaoka) [2020年5月8日](https://twitter.com/miyaoka/status/1258797164311965697?ref_src=twsrc%5Etfw)

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

\-----
