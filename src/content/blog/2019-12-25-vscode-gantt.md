---
title: 'VSCodeのガントチャート拡張を作った'
description: ''
pubDate: 'Dec 25 2019'
heroImage: '/images/2019-12-25-vscode-gantt/0.gif'
---

<p><a href="https://hashrock.hatenablog.com/entry/2018/12/26/010433">去年</a>に引き続きクリスマスイブになんか作ったシリーズです。</p>

<p>下記のような感じで、ガントチャートを雑に作れるVSCodeの拡張機能を作りました。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/0.gif" alt="f:id:hashrock:20191225020947g:plain" title="f:id:hashrock:20191225020947g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>テキストを編集してもいいし、プレビューを操作してもいいというのがこのツールの売りです。
変更内容は相互に同期します。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/1.gif" alt="f:id:hashrock:20191225021016g:plain" title="f:id:hashrock:20191225021016g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>VSCodeなので、当然ながらコピペやマルチカーソル、置換なんかも普通に使えます。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/2.gif" alt="f:id:hashrock:20191225021045g:plain" title="f:id:hashrock:20191225021045g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>VSCodeの編集機能で、GUI部分の貧弱さを補おうというコンセプトです。
実用性や自由度は低めですが、文法や操作方法を覚える必要も最低限になっているんじゃないかなと思います。</p>

<p>あと、ただのテキストなんで、Git管理もできますね。</p>

<p>２週間程度の短期予定を立てる用途を想定しています（自分はその程度の予定しか立てません）。
要望に答える可能性は低いですが、プルリクを頂ければ割と軽率にマージすると思います。</p>

<h1>かんたんな導入方法</h1>

<p>まずVSCodeを開き、おもむろに <code>hello.gantt</code> という名前のファイルを作ってください。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/3.png" alt="f:id:hashrock:20191225014432p:plain" title="f:id:hashrock:20191225014432p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>すると、下記のようなダイアログが出現します。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/4.png" alt="f:id:hashrock:20191225014550p:plain" title="f:id:hashrock:20191225014550p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>「Marketplaceを検索」を選択すると、下記のような画面になります。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/5.png" alt="f:id:hashrock:20191225014623p:plain" title="f:id:hashrock:20191225014623p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p><code>Install</code> を押すとガントチャート拡張がインストールされます。</p>

<p>なお、原因を調査していますが、インストール直後に機能を使おうとすると、下記のエラーが出ることがわかっています。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/6.png" alt="f:id:hashrock:20191225020100p:plain" title="f:id:hashrock:20191225020100p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>ですので、一旦VSCodeは再起動してください。</p>

<p>あとはganttファイルを開き、Show Ganttをクリックすると、ガントチャートエディタが開きます。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-25-vscode-gantt/7.png" alt="f:id:hashrock:20191225021948p:plain" title="f:id:hashrock:20191225021948p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<h1>リポジトリ</h1>

<p><a href="https://github.com/anydown/vscode-ganttdown">https://github.com/anydown/vscode-ganttdown</a></p>

<h1>余談</h1>

<p>人類と時間の付き合いは長いわけですが、カレンダーみたいにめくらなきゃいけないものを使っていたり、
ガントチャートをExcelで頑張って塗り絵していたりと、色々時間周りで改善の余地があるんじゃないかなぁと思っています。</p>

<p>自分は「<a href="https://shirasaka.tv/11309">ご都合いかがでしょうかメーカー</a>」が面白いと思っていたり、「<a href="https://chouseisan.com/">調整さん</a>」が大好きだったりするんですが、
なんか新しい時間UIが作れたらいいなぁ的なことを、よく<a href="https://scrapbox.io/daiiz/">daiiz</a>さんと話していたりなんかします。</p>

<p><a href="https://shirasaka.tv/11309">https://shirasaka.tv/11309</a></p>

<p>ガントなんかも、しっかり作ろうとすると数十分かかってしまうものですが、１分以内に作って捨てる、みたいにできると、「考えるために書く」ような使い方ができたりと、色々捗るのではと思っています。</p>

-----
