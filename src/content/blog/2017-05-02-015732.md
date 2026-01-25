---
title: 'Markdownから日本企業っぽいメールに変換出来るツールを作った'
description: ''
pubDate: 'May 02 2017'
---

<p><blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Markdown -&gt; 日本企業メールコンバータできた <a href="https://t.co/kw67jEpi0Z">https://t.co/kw67jEpi0Z</a> <a href="https://t.co/9qOTW5uQQV">pic.twitter.com/9qOTW5uQQV</a></p>&mdash; はっしゅろっく (@hashedrock) <a href="https://twitter.com/hashedrock/status/858971761190223872">2017年5月1日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p><a href="https://anydown.github.io/maildown/">DEMO</a> <a href="https://github.com/anydown/maildown">Source</a></p>

<p><s>かなりバグが残っている（ひどいのは、インライン要素は全部消えてしまう）ので、胸をはれるような代物ではないけど</s>（※追記：直しました）、Markdownから業務メール書式への変換ツールを書いた。</p>

<p>自分の考える業務メール書式とは、以下のようなもの：</p>

<ul>
<li>長文は適度に折り返される（半角76文字ぐらいで折り返されることが望ましいらしい）</li>
<li>行を開けることでセクションが表現されている</li>
<li>全角記号で飾られている</li>
</ul>


<p>経緯としては、書類をなんでもかんでもMarkdownで書いているので、メールに貼り付けるときに手で整形する必要があってつらかったために作成した。</p>

<p>自分の作業のみ効率化すっかと思ったのだけれど、何故かこの手のツールに需要があるらしく、意外とみんな手で書式整えてるようだ。</p>

<p>自分はこれに加えて、段落のインデントまでやるんだけど、作ってる最中に「これ完全に自分しかやってないメールしぐさだ」と気づいて、今日からやめることにした。</p>

<p>あと単語ごとに折り返すやつとか、もはや無理やり実装したけど、これもやってるの自分だけなのではないかという気分がしてきた。</p>

<p>メールはもはや前世紀の遺物だと思っていて、大抵のことはイシュートラッカーの方が上手く情報を蓄積できるのだし、自動通知以外の用途に使うべきではないという認識だけど、それでもみんなが使っているから、ずっと使い続けなければならず辛いところ。</p>

<p>メールやめよう運動みたいなのが起きないかなぁと思っています。</p>

<p><strong>おまけ</strong></p>

<p>anydownという、Markdownライクな記法からなんでも生成してやるぞという一人プロジェクトをやっていて、</p>

<ul>
<li>Markdownをカンバン形式のUIで編集出来る<a href="https://github.com/anydown/kanbandown">kanbandown</a></li>
<li>プレーンテキストでガントチャートを生成出来る<a href="https://github.com/hashrock/ganttpad">ganttpad</a></li>
</ul>


<p>みたいな成果物があります。こちらも興味があれば見ていってください。
Excelやメールによるコストの高いコミュニケーションをいつか撲滅したい。</p>

<p><strong>追記 2017/05/03</strong></p>

<p>インラインに関するバグは直しました。わかっているバグはもう一つあって、ネストされたリストはレンダリング出来ません。
ASTの扱い自体があまりわかっていないのが原因で、今もなんとなく雰囲気で動いている感じです。
このツール自体も結局あまり使われないような気もしてきたので、何かない限りそのままです。</p>

-----
