/**
 * section20.js: ブラウザにデータを保存する
 */

/**
 * localStrage
 * - キャッシュデータや履歴データの削除により消滅
 * - オリジンが同じであれば別タブでも同じStrageを使用可能
 * sessionStrage
 * - タブを削除すると消滅
 */
// localStorage
localStorage.setItem('name', 'tarte');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

// sessionStrage
sessionStorage.setItem('name', 'tarte-session');
console.log(sessionStorage.getItem('name'));

// localStrageを使用してオリジンごとにデータを共有する
window.addEventListener('storage', (event) => {
  console.log(event);
})
localStorage.clear()

// // Cookie
// document.cookie = 'name=tarte';
// document.cookie = 'id=123';
// // キーバリューの取得は泥臭くやるしかない
// console.log(document.cookie.split('; ')).forEach((cookie) => {
//   let [k, v] = cookie.split('=');
//   if (k === 'name') {
//     console.log(v);
//   }
// });

// // Cookieの色々な操作はセミコロンスペース
// document.cookie = 'name=tarte; max-age=10';
// let date = new Date();
// date.setDate(date.getDate() + 1);
// document.cookie = `name=tarte; expires=${date.toUTCString()}`;

// Cookieを削除する方法はmax-age=0
// ほっといてもブラウザ閉じると消える
document.cookie = 'name=tarte; max-age=0';

// path属性ででアクセスできるパスを制限
// items配下からしかアクセスできないcookie
document.cookie = 'name=tarte; path=/items; max-age=0';

// domains属性を使用してサブドメインにもcookieを共有する
// fuga.jpとサブドメインとで共有される
// ドメインが異なると別のCookieだと認識される
document.cookie = 'name=tarte; domain=fuga.jp'

/**
 * Cookieヘッダ
 * - document.cookieの値がリクエスト時に入る
 * - サーバリクエストの認証とかで使用される
 * Set-Cookieヘッダ
 * - レスポンスヘッダを使用してサーバからCookieを設定可能
 * - サーバのホストに対するCookieを操作
 */

/**
 * その他のCookieあれこれ
 * - secure属性: httpsのみcookieが共有される
 * - httponly属性: javascriptからは使用できないcookie
 * - samesite属性: XSRF対策
 *  - strict: 今いるページと異なるホストに対してはCookieはつかない
 *  - Lax: 基本strictだが、aタグで遷移した場合はcookie保持
 */

/**
 * Access-Control-Allow-Credentials
 * - fetchのredentialsプロパティでもcookie制御可能
 * - includeになっている場合は
 *  - ACAOに*は不可
 *  - ACACがtrueになっている必要がある
 */

/**
 * decode|encodeURIComponent
 * - セミコロンなど変な文字を使用してCookieを決めたい場合に使用
 * - セミコロンなど変な文字をEscapeしてくれる
 */

/**
 * indexedDB
 * - localStrageと同じでオリジンごとに記録可能
 * - localStrageよりも高度な操作が可能
 */
