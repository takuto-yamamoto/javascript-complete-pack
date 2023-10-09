/**
 * section18: JavascriptのHTTP通信
 */

/**
 * fetch()を使ってHTTP通信する
 * - bodyを何かしら送信する場合はGETかHEAD以外
 * - Content-Typeは基本自動だが、MIMEタイプで指定可能
 */
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     // Accept: 'text/plain',
//     'Content-Type': 'text/plain;charset=utf-8',
//   },
//   // body: 'hello',
//   body: new ArrayBuffer(16),
// });

/**
 * JSONを使用して決まった内容で文字列をやりとりする
 * - bodyにJSONを指定する場合はapplication/jsonをContent-Typeに指定する
 */
const bodyJSON = '[{"name": "tarte", "age": 29}]';
console.log(JSON.parse(bodyJSON));
console.log(JSON.stringify(JSON.parse(bodyJSON)));

/**
 * ファイルを渡す方法
 * - ArrayBufferもしくはBlobで送信
 * - JSでファイルを扱う場合はBlobがほとんど
 *  - ArrayBufferのWebAPI版で変更不可
 *  - Contet-Typeは自動でBlobのtypeプロパティの値が設定される
 */

/**
 * BlobとURL
 * - URL.createObjectURL(Blob)でファイルのBlobに対応するURLを生成可能
 * - URL.revokeObjectURL(Blob)でファイルのBlobに対応するURLをGC可能
 * - 基本的に自動ではGCされないので、createしたらrevokeまでセットで考える
 */

/**
 * 複数の種類のデータを送る場合は`multipart/form-data`
 * - Content-Type: multipart/form-data;boundary=hoge
 * - Body内にboundaryの文字列をバイナリ化したものがセパレータになる
 *  - Content-Disposition: form-data; name="user"
 *  - Content-Type: MIMEタイプ
 */
// let input = document.querySelector('input');
// input.addEventListener('change', () => {
//   let file = input.files[0];
//   let formData = new FormData();
//   formData.append('name', 'tarte');
//   formData.append('password', 'hogehoge');
//   formData.append('blob', new Blob(['hello']));
//   formData.append('profile', file);
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: formData,
//   });
// });

/**
 * fetchでレスポンスを受け取る方法
 * - 返り値はpromiseを返している
 */
// (async () => {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   result = await response.json(); // この時点ではHeaderのみ確定読み込み
//   console.log(result);
// })();

/**
 * CORS
 * - fetchのセキュリティリスクは改ざんと漏洩
 * - 漏洩
 *  - HTMLを取得したオリジンのURLをOriginヘッダーに登録
 *  - ACAOが*もしくはOriginと等価でなければクライアントからレスポンスは参照できない
 * - 改ざん(DELETE, PUT)
 *  - ACAOでは対策不可(クライアント側で見れなくするだけであるため)
 *  - OPTIONSによるプリフライトでオリジンとACAM, ACAHを渡す
 *  - ACAO, ACAM, ACAHを全て突破する必要がある(Authヘッダは*以外に明記が必要)
 *  - プリフライトのアクセスからACMaxAge以内ならプリフライト無しで再リクエスト可能
 */
