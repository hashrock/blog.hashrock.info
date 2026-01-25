---
title: 'vue-cliでビルドしたプロジェクトをgh-pagesにデプロイする'
description: ''
pubDate: 'Feb 27 2018'
---

<p>vue-cliでcreateしたプロジェクトは、そのままビルドすると、出力された<code>dist/index.html</code>が<code>/js/vendor.a58fe84b.js</code>のように、絶対パスでアセットを読みに行く。</p>

<p>基本的にはこれで構わないケースが大半だけれど、Github Pagesにデプロイしたい場合は例外で、プロジェクト名と同じサブディレクトリ下に配置されてしまう。そうなると絶対パスから見に行くと404になってしまい、ページは動作しない。</p>

<h1>相対パスからアセットを読みに行くようにする</h1>

<p>こういったケースはbaseUrlオプションを設定することで回避出来る。下記のファイルを作成する。</p>

<p><code>vue.config.js</code></p>

<pre class="code" data-lang="" data-unlink>module.exports = {
  baseUrl: &#34;./&#34;
};</pre>


<p>こうすると、（先の例でいうと）index.htmlが<code>./js/vendor.a58fe84b.js</code>を読みに行くようになる。</p>

<p>アセットが色々存在するケースでは確認していないので、これではダメなケースもあるかもしれない。</p>

<p>vue.config.jsについては<a href="https://github.com/vuejs/vue-cli/blob/9040df84cb6f98b9665d957d0242f1a6075bad37/docs/config.md">公式のドキュメント</a>を参照のこと。</p>

<h1>デプロイ</h1>

<p>デプロイはどうするかというと、gh-pagesというツールを入れるのが楽。</p>

<pre class="code lang-sh" data-lang="sh" data-unlink><span class="synComment">#インストール</span>
$ yarn add gh-pages <span class="synSpecial">--dev</span>
</pre>


<p>でインストールした後、package.jsonのscriptsに下記の行を追加する。</p>

<pre class="code" data-lang="" data-unlink>&#34;deploy&#34;: &#34;gh-pages -d dist&#34;</pre>


<p>あとは<code>yarn deploy</code>を実行するだけ。</p>

<p>動きとしては、まっさらなgh-pagesブランチを作成して、dist下のファイルをすべて配置するのと同じになる。</p>

<p>Github pagesはmasterやdocsフォルダをそのままWebページとして公開出来るように最近なっているが、ビルド成果物をコミットに含めたくない場合は、firebase hostingのようなホスティングサービスを使うか、旧来のgh-pagesブランチを使う形にするのが良いと思う。ちなみにこのやり方はegoist先生がやってたやり方。</p>

-----
