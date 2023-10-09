/**
 * section15: JSでDOMを操作する方法
 */

// DOMノードを取得
console.log(document.documentElement); // htmlタグ内
console.log(document.head); // headタグ内
console.log(document.body); // bodyタグ内
// childNodesを遡るとDOMツリーを追える(NodeListを返す)
console.log(document.childNodes); // DOCTYPEとhtml
console.log(document.hasChildNodes()); // true
console.log(document.firstChild); // 最初のノード
console.log(document.lastChild); // 最後のノード
console.log(document.body.parentNode); // html
console.log(document.head.nextSibling); // text
console.log(document.body.previousSibling); // text

// 要素だけを取得する
console.log(document.body.children);
// Elementインターフェースにしか使えない(rootは無理)
console.log(document.documentElement.parentElement); // null

// 特定の要素を取得するクエリーセレクター
// document|element.querySelector(cssSelector);
console.log(document.querySelector('script'));
console.log(document.querySelectorAll('meta'));
// 祖先のみ参照するclosest
console.log(document.body.closest('html'));
// querySelectorにマッチするかを返すmatch
console.log(document.body.matches('body'));

/**
 * DOMを変更する方法
 * - 文字列を変更する方法
 * - 要素をcreateする方法
 */
// 文字列による変更
document.body.innerHTML = '<h1>Hello</h1>';
document.querySelector('h1').innerHTML = '<h1>hello</h1><div>tarte</div>';
// innerAdjacentHTML
// - [before|after][begin|end]
// - XSSに注意
document.body.insertAdjacentHTML('afterbegin', '<p>beforebegin</p>');

/**
 * textContent: ユーザーインプットを画面に表示させる
 * - text部分のみを操作する
 * - XSS対策にもなる
 */
console.log(document.body.textContent);
console.log(document.textContent); // null
// タグとして認識されず全て文字列になる
// document.body.textContent = '<div>hello<div/>'

/** createElement()による変更
 * 1. ノードを作成
 * 2. ノードをDOMツリーに挿入
 */
// ノードを作成
let p = document.createElement('p');
p.innerHTML = 'hello'
p.textContent = 'hello'
// ノードを挿入(XSS対策されている)
document.querySelector('div').append(p);
// document.querySelector('div').prepend(p);
// document.querySelector('div').before(p);
// document.querySelector('div').after(p);

/** ノードの削除/置き換え/クローン
 * - 全く同じノードはDOMツリーに1つしか存在できない
 * - 同じノードを複数挿入したい場合はcloneNode([recursive])
 * - 削除したい場合はremove(CSSSelector)
 * - 置き換えたい場合はreplaceWith(Node1, [Node2, ...NodeN])
 */

/**
 * ノードの情報を詳しく見る
 * - nodeType: ノードIDが返却される
 * - nodeName: ノードの種類ごとに返却内容が異なる
 * - id, classNameなど予約された属性をタグ内で指定できる(変更可能)
 * - element.attributesでnamedNodeMapという属性一覧を取得可能
 * - attributes.attr.valueでgetter, setter可能
 * - setAttribute(attr, value)
 * - getAttribute(attr, value)
 * - removeAttibute(attr, value)
 */

/**
 * HTMLに独自の属性をつける
 * - デメリット: 仕様書で予約された場合に動かないリスク
 * - `data-`から始まる属性は今後予約されないことが約束されている
 * - datasetプロパティで`data-`から始まる属性をprefix除いて取得可能
 */

/**
 * スタイルの変更はCSSOMも可能だが、基本はDOMを直接操作する
 * - styleタグでclassを操作してclassを操作する
 *  - elementNode.classListに追加削除更新をかける
 * - styleを操作する
 *  - styleオブジェクトプロパティを操作する
 *  - 初期値は全てnullなのでstyleの更新のみに対応
 *  - プロパティを削除したい場合は空文字もしくはhidden=true
 */

/**
 * 画面のスクロールを操作する方法
 * - window.scrollTo, window.scrollByでスクロール位置を操作可能
 * - behaviorなどのアニメーション振る舞いも指定可能
 * - elementNode.scrollIntoView()により要素ノードが一番上にいくようにスクロールされる
 */

/**
 * 全てのオブジェクトはliveとstaticに変更可能
 * - そのオブジェクトが常に最新の状態になっているか
 * - ほとんどliveだが、例えばquerySelectorAllはstatic
 */

/**
 * 付記: SVGとキャンバス、ミューテーションオブザーバー
 * - canvasやsvgはその場でイメージを描いて表示できる
 * - 簡単はsvg, 複雑なことしたい場合はcanvas
 * - ミューテーションオブザーバーはDOMの変更を検知可能
 */

