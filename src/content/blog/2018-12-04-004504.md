---
title: 'Node.jsの次にDenoを使いたい'
description: ''
pubDate: 'Dec 04 2018'
heroImage: 'https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20181204/20181204004036.png'
---

<p>Node.jsの作者Ryan Dahlが作った「<a href="https://github.com/denoland/deno">Deno</a>」が面白くて、最近追っかけている。</p>

<p>TypeScript版Node.jsというのが雑な説明になる。yosuke-furukawaさんの下記の記事が詳しい。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fyosuke-furukawa.hatenablog.com%2Fentry%2F2018%2F06%2F07%2F080335" title="Node.js  における設計ミス By Ryan Dahl - from scratch" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335">yosuke-furukawa.hatenablog.com</a></cite></p>

<p>ES Modules周りとnpmのことも考えると、まっさらから再設計したほうがスッキリしてて気持ちいいというのと、単にTypeScriptが好きというのもあるけど、今追っかけている理由は、Denoがセキュリティ的にいい感じに見えるからだったりする。</p>

<h1>flatmap-stream事件</h1>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fqiita.com%2Fmysticatea%2Fitems%2Faac027f9183ea9f0f9b1" title="セキュリティ インシデント flatmap-stream@0.1.1 と npm-run-all での対応 - Qiita" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://qiita.com/mysticatea/items/aac027f9183ea9f0f9b1">qiita.com</a></cite></p>

<p>npmパッケージがビットコインの窃盗に利用される（未遂）という事件がつい先日発生した。</p>

<p>これははっきり言って防ぎようがない事件で、minifyしたコード内に埋められてもその差分に誰が気づくんだという話である。むしろこれによく気づいたな・・・という印象。見過ごされていてもおかしくない。</p>

<p>この件、自分は攻撃者以外の全員がかわいそうだな…と思った。作者がOSSに対して過大な責任を負うのも違うし、OSSのコミット権渡すときも他人の善意を疑いたくない。npm側ができることも限られている。</p>

<p>しかし、気軽に小さなライブラリに依存してしまう文化は、ライブラリの作者に大きな責任を負わせてしまう。</p>

<p>これは、誰かの努力じゃなく仕組みで解決したい問題だ。</p>

<h1>信用できないコードを実行する</h1>

<p>Denoの<a href="https://github.com/denoland/deno/blob/master/Roadmap.md">ロードマップ</a>には下記のように書かれている。</p>

<blockquote><p>We want to be secure by default; user should be able to run untrusted code, like the web.
「Webのように」信頼されていないコードをユーザが実行できるように、デフォルトでセキュアにしたい。</p></blockquote>

<p>「コードを信用しないままに実行する」というのは今までブラウザがずっとやってきたことだ。サンドボックスがあり、ファイルへの書き込みのような危険な処理にはユーザへの承認を求める。</p>

<p>Denoは「脅威」として下記の２つを挙げている。</p>

<ul>
<li>ローカルファイルの変更や削除</li>
<li>情報漏えい</li>
</ul>


<p>それを防ぐために、下記をデフォルトで禁止している。</p>

<ul>
<li>ネットワークアクセス</li>
<li>ローカルファイルへのWrite</li>
<li>JS以外の拡張</li>
<li>サブプロセス</li>
<li>環境変数へのアクセス</li>
</ul>


<p><s>ファイル読み込みは許可しているのは面白いところだ。ローカルファイルを読めたところで、ネットワークアクセスがなければ漏洩することはできないので、問題ないという考えだろうか。</s></p>

<p><b>※2018/12/04 16:30訂正</b></p>

<p><a href="https://github.com/denoland/deno/issues/1225">現在は --allow-read フラグを追加する方向で話が進んでいる</a>ため、ファイルの読み込みもデフォルトは禁止になる見込みだそうです。Thanks: <a href="https://twitter.com/kt3k">@kt3k</a></p>

<p>Denoはまだまだ開発途上ではあるけど、すでに簡単なHTTPサーバを書くことが可能になっている。</p>

<pre class="code lang-typescript" data-lang="typescript" data-unlink><span class="synStatement">import</span> <span class="synIdentifier">{</span> serve <span class="synIdentifier">}</span> <span class="synStatement">from</span> <span class="synConstant">&quot;https://deno.land/x/net/http.ts&quot;</span><span class="synStatement">;</span>
<span class="synStatement">const</span> s <span class="synStatement">=</span> serve<span class="synStatement">(</span><span class="synConstant">&quot;0.0.0.0:8000&quot;</span><span class="synStatement">);</span>

<span class="synStatement">async</span> <span class="synIdentifier">function</span> main<span class="synStatement">()</span> <span class="synIdentifier">{</span>
  <span class="synStatement">for</span> <span class="synStatement">await</span> <span class="synStatement">(const</span> req <span class="synStatement">of</span> s<span class="synStatement">)</span> <span class="synIdentifier">{</span>
    req.respond<span class="synStatement">(</span><span class="synIdentifier">{</span> body: <span class="synStatement">new</span> TextEncoder<span class="synStatement">()</span>.encode<span class="synStatement">(</span><span class="synConstant">&quot;Hello World</span><span class="synSpecial">\n</span><span class="synConstant">&quot;</span><span class="synStatement">)</span> <span class="synIdentifier">}</span><span class="synStatement">);</span>
  <span class="synIdentifier">}</span>
<span class="synIdentifier">}</span>

main<span class="synStatement">();</span>
</pre>


<p>このコードを実行すると、下記のようなプロンプトが表示される。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20181204/20181204004036.png" alt="f:id:hashrock:20181204004036p:plain" title="f:id:hashrock:20181204004036p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>面倒なようだけど、これから必要になることかもしれない。</p>

-----
