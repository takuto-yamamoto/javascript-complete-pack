/**
 * section14: HTMLはブラウザ内でDOMに変換される
 */

/**
 * DOMの流れ
 * - HTMLは解析されDOMになる
 * - JSがHTMLを操作するためにはDOMを直接操作する
 * - 最終的にDOMをレンダリングする
 */

/**
 * DOMとは
 * - HTMLの情報をプログラムから扱いやすい形にしてメモリに保存したもの
 * - 最初に一度だけ解析して、あとはDOMを操作すればOK
 */

/**
 * DOMの具体的な構造
 * - 各タグごとにメタデータをキーバリューの構造で階層的に管理
 * - ツリー状に保存している(これ以上の仕様指定はない)
 * - chromeであれば各タグをcppのクラスとして実装し、親子関係をプロパティとしている
 * - root->DOCTYPE, root->htmlというrootデータを定義している
 */

/**
 * DOMのノード
 * - テキストノード: <text>
 * - 要素ノード: その他
 * - ドキュメントノード: rootノード
 * - コメントノード: <!--comment--!>
 * - DOCTYPEノード: DOCTYPE
 */

/**
 * document: JSからWebAPIでDOMを操作する
 * - documentノードとdocumentオブジェクトは全く同じ
 * - 他のノードはdocumentノードのプロパティ/メソッドから操作可能
 * - ノードとJS objは同じアドレスを参照しているのでGCも適切に実施される
 */

/**
 * Interfaceの継承
 * - 例えばHTMLInputElementだと...
 * - HTMLElementを継承し、
 * - Elementを継承し、
 * - Nodeを継承している
 */