/**
 * section13: jsを使用したブラウザ操作
 */

/**
 * WebAPIについて
 * - プログラミングでブラウザを簡単に操作するためのインターフェース
 * - C++で実装された関数群にglobalからアクセス可能
 * - ECMAScriptの使用ではなくエンジン側で規定しているもの
 * - HTMLやXMLと密接に関わる
 */

// window.alert: ウィンドウにメッセージを表示
// window.confirm: OK/Cancelを入力させる
// window.prompt: テキストを入力させる

// navigator: クライアント環境の情報
console.log(navigator.userAgent)
console.log(navigator.credentials)

// screen: ディスプレイ情報の取得
console.log(window.screen.width)

// location: ページの情報・移動
console.log(location.href)
console.log(location.port)
// location.assign(location.href) // 無限移動
// location.reload() // 無限移動
// location.replace(url) // 現在のURL履歴情報を削除してから移動

// history: webページの履歴を取り扱う
console.log(history.length) // 履歴の保持数
// history.forward() // 一つ先
// history.back() // 一つ前
// history.go(0) // reload
// history.go(-1) // back
// history.go(1) // forward
// history.pushState() // セッション履歴に追加

// URL: URLを解析する
let url = new URL('https://github.com/takuto-yamamoto/javascript-complete-pack/blob/main/src/section9.js')
console.log(url)

// setTimeOutとsetInterval
// 何秒後に処理をするかを指定する
let timerId = setTimeout(() => {
  console.log('hello')
}, 1000); // 1000ミリ秒後に処理を開始する
clearTimeout(1) // timerIdで指定してクリア
console.log('apple') // こっちが先

// 1秒ごとに実行したい時とかはsetInterval
let intervalId = setInterval(() => {
  console.log('hello')
}, 1000)
setTimeout(() => {
  clearInterval(intervalId);
}, 3000)

/**
 * その他便利なやつ
 * - window.getSelection: 選択テキストの操作
 * - intersection.Observer: スクロール操作
 * - Payment Request: 支払い
 * - PointerLock: マウス見えないようにする
 * - Audio, FullScreen, GameControler...
 * - 暗号化
 * - 通知とかネイティブアプリ化とかバイブレーションとかセンサーとか
 */