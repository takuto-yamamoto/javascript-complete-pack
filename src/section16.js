/**
 * section16: イベント操作
 */
// onclick
// 一つのイベントに対して複数の関数を割り当てられない
const button = document.querySelector('button');
button.onclick = () => {
  alert('clicked!');
};

// [add|remove]EventListener(event, funciton)
const clickListener = () => {
  console.log('clicked again!');
};
// button.addEventListener('click', clickListener)
// button.removeEventListener('click', clickListener)

// onceプロパティ
button.addEventListener('click', clickListener, {
  once: true,
});

/**
 * イベントのバブリング
 * - 親要素と子要素でイベントをリッスンしている場合、親方向へ実行が伝播していく
 * - イベントデリケーション
 *  - 親要素にリスナーを設定して、イベントに基づいて子要素でのアクションを実施
 *  - 子要素に個別にリスナーを追加する必要がない
 * - イベントのキャンセル
 *  - stopPropergation()により伝播を停止できる
 */

/**
 * イベントのキャプチャ
 * - バブリングの逆で、親から子要素に伝播するフェーズ
 * - キャプチャフェーズ -> バブリングフェーズ
 * - addEventListenerの3番目の引数がキャプチャフェースに動作するフラグ
 * - captureプロパティでも設定可能
 */

/**
 * デフォルトの挙動を制御するpreventDefault
 * - 「aタグにはしたいけど、clickで飛びたくない」みたいなことを実装できる
 * - バリデーションエラーのフォームを送信する前にエラーメッセージ出せる
 */

/**
 * イベントリスナーのプロパティ
 * - once: 1度だけ実行される
 * - capture: キャプチャフェーズで実行される
 * - passive: タッチやホイールのイベントに関してブラウザ処理を向上する
 *  - イベントをキャンセルしないことを保証する
 *  - 補償により先にスクロールすることができる
 */

// 独自のイベントを生成する
document.addEventListener('my-event', (event) => {
  console.log(event);
});
const eventDetail = { message: 'hello' };
const myEvent = new customEvent('my-event', {
  detail: eventDetail,
});
document.dispatchEvent(myEvent); // イベントの発火

/**
 * ブラウザがHTMLを受け取ってからの流れ
 * - DOMの解析を実施する
 * - CSS関連のタグに遭遇したらCSSOMの解析を同時に実施する
 * - scriptタグに遭遇した場合、CSSOMの完成を待ってからソースをダウンロード
 * - ダウンロードを早く終わらせるTips
 *  - scriptタグにdefer属性をつけることでダウンロードだけ先に実行してくれる
 * - document.readyStateがloading -> interactive -> complete と遷移
 */

/**
 * ブラウザレンダリング
 * - DOMとCSSOMの構築が完了したとき(足並みが揃った時)
 * - scriptによりDOMを更新し、JS処理が完了した場合
 */

/**
 * ChromeDevToolsでのイベントリスナー操作方法
 * - ElementsのEventListeners
 * - Ancestorsで祖先ノードのイベントをON/OFF可能
 * - 特定のイベントに対して操作やbreak-point設定が可能
 */

/**
 * 知っておくと便利なイベント
 * - onclick: 左クリックのみ
 * - mouse[down|up] event: 左右クリックどちらでも発生
 * - dbclick: ダブルクリック
 * - mouse[over|out]: マウスオーバー時とマウス離れ時
 * - drag|drop: D&D
 * - touch*: スマホの画面タッチ
 * - pointer*: マウス以外のツール(ポインター)でも可能
 *  - mouse系の上位互換なのでこっちで書くべき
 * - keydown*: キーを押した時
 * - scroll*: スクロールした時
 *  - interSection observerを使用検討
 * - change*, input*: 文字の変更やボックスのフォーカスが外れた際
 * - submit*: form送信系のアクション
 * - on/offline: ネット環境が切れた時
 * - devicemotion: 方向やジャイロセンサーで起動
 * ...etc
 */
