---
title: 'VSCodeのガントチャート拡張を作った'
description: ''
pubDate: 'Dec 25 2019'
heroImage: '/images/2019-12-25-vscode-gantt/0.gif'
---

[去年](https://hashrock.hatenablog.com/entry/2018/12/26/010433)に引き続きクリスマスイブになんか作ったシリーズです。

下記のような感じで、ガントチャートを雑に作れるVSCodeの拡張機能を作りました。

![f:id:hashrock:20191225020947g:plain](/images/2019-12-25-vscode-gantt/0.gif)

テキストを編集してもいいし、プレビューを操作してもいいというのがこのツールの売りです。 変更内容は相互に同期します。

![f:id:hashrock:20191225021016g:plain](/images/2019-12-25-vscode-gantt/1.gif)

VSCodeなので、当然ながらコピペやマルチカーソル、置換なんかも普通に使えます。

![f:id:hashrock:20191225021045g:plain](/images/2019-12-25-vscode-gantt/2.gif)

VSCodeの編集機能で、GUI部分の貧弱さを補おうというコンセプトです。 実用性や自由度は低めですが、文法や操作方法を覚える必要も最低限になっているんじゃないかなと思います。

あと、ただのテキストなんで、Git管理もできますね。

２週間程度の短期予定を立てる用途を想定しています（自分はその程度の予定しか立てません）。 要望に答える可能性は低いですが、プルリクを頂ければ割と軽率にマージすると思います。

# かんたんな導入方法

まずVSCodeを開き、おもむろに `hello.gantt` という名前のファイルを作ってください。

![f:id:hashrock:20191225014432p:plain](/images/2019-12-25-vscode-gantt/3.png)

すると、下記のようなダイアログが出現します。

![f:id:hashrock:20191225014550p:plain](/images/2019-12-25-vscode-gantt/4.png)

「Marketplaceを検索」を選択すると、下記のような画面になります。

![f:id:hashrock:20191225014623p:plain](/images/2019-12-25-vscode-gantt/5.png)

`Install` を押すとガントチャート拡張がインストールされます。

なお、原因を調査していますが、インストール直後に機能を使おうとすると、下記のエラーが出ることがわかっています。

![f:id:hashrock:20191225020100p:plain](/images/2019-12-25-vscode-gantt/6.png)

ですので、一旦VSCodeは再起動してください。

あとはganttファイルを開き、Show Ganttをクリックすると、ガントチャートエディタが開きます。

![f:id:hashrock:20191225021948p:plain](/images/2019-12-25-vscode-gantt/7.png)

# リポジトリ

[https://github.com/anydown/vscode-ganttdown](https://github.com/anydown/vscode-ganttdown)

# 余談

人類と時間の付き合いは長いわけですが、カレンダーみたいにめくらなきゃいけないものを使っていたり、 ガントチャートをExcelで頑張って塗り絵していたりと、色々時間周りで改善の余地があるんじゃないかなぁと思っています。

自分は「[ご都合いかがでしょうかメーカー](https://shirasaka.tv/11309)」が面白いと思っていたり、「[調整さん](https://chouseisan.com/)」が大好きだったりするんですが、 なんか新しい時間UIが作れたらいいなぁ的なことを、よく[daiiz](https://scrapbox.io/daiiz/)さんと話していたりなんかします。

[https://shirasaka.tv/11309](https://shirasaka.tv/11309)

ガントなんかも、しっかり作ろうとすると数十分かかってしまうものですが、１分以内に作って捨てる、みたいにできると、「考えるために書く」ような使い方ができたりと、色々捗るのではと思っています。

\-----
