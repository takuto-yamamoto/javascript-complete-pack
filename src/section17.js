/**
 * section17: Promise, aysnc/awaitを使用した非同期処理
 */

/**
 * 非同期とは
 * - ある処理が終わるのを待たずに次の処理を実行する
 * - 処理に時間がかかるAPIとかは処理完了を待たずに次の処理を実行したい
 * - 基本的にはC++による処理とJSによる処理に分けて考える
 */
// positionの取得はC++の処理、ロギングはJSの処理
/**
 * navigator.geolocation.getCurrentPosition((position) => {
 *   console.log(position)
 * })
 */

/**
 * 非同期におけるコールバックの問題
 * - コールバック地獄: コールバックが多重に呼び出されるため読みにくい
 * - エラー処理
 *  - cppでのエラー処理は潰れる
 *  - cppとjsのためのエラーハンドリングをそれぞれ各ネストにエラー処理を書く必要があり冗長
 */
// window.addEventListener('click', (e) => {
//   console.log(e);
//   setTimeout(() => {
//     console.log('set time out');
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position),
//         setInterval(() => {
//           console.log('set interval');
//         }, 3000);
//     });
//   }, 1000);
// });

/**
 * Promise
 * - 非同期処理をやりやすくするために使用
 * - new時に発動するcallbackFnを第一引数にとるコンストラクタとして使用
 */
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// // resolveされた時
// p.then(() => {
//   console.log('then');
// });
// // rejectされた時
// p.catch(() => {
//   console.log('catch');
// });
// // どちらでも最後に実行
// p.finally(() => {
//   console.log('finally');
// });

// pendingの場合は関数を全て登録
// 非同期にAPIによりステータスが変わった時に実行する
// console.dir(p); // statusはpending

// resolve|rejectの引数がPromiseの場合は子Promiseがfullfilled|rejectedになる必要がある
p = new Promise((resolve, reject) => {
  let thenableObj = {
    then(resolve2, reject2) {
      setTimeout(() => {
        resolve2('hello');
      }, 1000);
    },
  };
  resolve(thenableObj);
  // thenableObj.then(resolve, reject) に書き換えられる
});

/**
 * Promiseチェーン
 * - then|catch|finallyの後には幾つでもthen|catch|finallyをチェーンできる
 * - returnが次のthenの引数、throwが次のcatchの引数になる
 * - returnがあると次のthenを実行され、catchはスキップされる(逆も然り)
 * - 最後までreturnを使用するthenがいない場合はerror(逆も然り)
 * - finallyは順番が来たら実行される(return, throw実行しないし、引数にも取らない)
 * - finally実行後、直前まで実施していたthen/catch探しが実行される
 * - finallyのreturnは基本以降の処理で無視される
 *  - Promiseの場合はresolveされるまで待つ
 * - finallyのthrowは有効なのでthen探しがキャンセルされcatch探しが始まる
 *  - 引数としても有効
 *  - Promiseを返した場合はrejectされた場合にcatch探しが実行される
 * - 内部的にはthen|catch|finallyの全てのメソッドはpromiseオブジェクトを返している
 */

// WebAPI処理をプロミス化する方法
// Promiseで処理してくれるES6以降のAPI
// navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('mission complete!');
//   });

// Promiseで処理してくれないES6より前の非同期APIをPromise化する
// setTimeOutをプロミス化する
let promisifiedSetTimeOut = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
// コールバック地獄にならないしエラー処理もOK
// promisifiedSetTimeOut(1000)
// .then(() => {
//   console.log('promisifiedSetTimeOut1');
//   return promisifiedSetTimeOut(1000)
// })
// .then(() => {
//   console.log('promisifiedSetTimeOut2');
//   return promisifiedSetTimeOut(1000)
// })
// .then(() => {
//   console.log('promisifiedSetTimeOut3');
//   return promisifiedSetTimeOut(1000)
// })

/**
 * Promiseのstaticメソッド
 * - all(iterableObj): iterableObj内のPromiseが全てresolveされたらresolve
 * - any: allのany版
 * - allSettled: 全てがreject/resolveされたら、全ての結果を返すPromiseを返す
 * - race: allSettledのany版
 * - reject/resolve: すでにresolve/rejectされたPromiseを返す
 */

/**
 * イベントループとタスクキュー
 * - タスクキュー(FIFO)
 *  - 前提: シングルスレッド処理
 *  - script自体の実行と、非同期のコールバック
 *  - 現在何も実行されていない場合にタスクの先頭を実行する
 *  - タスクキューは複数存在してもいい(同じタスク種別は同じキューに存在する必要あり)
 * - イベントループ
 *  - mtキュー、イベントループ、tキュー...のループ
 *  - 1回のイベントで実行される全てのcbは1つのタスクとしてまとめられる
 * - マイクロタスクキュー
 *  - ブラウザはPromise専用のマイクロタスクキューを所持している
 *  - 現在のタスクが終了した場合、マイクロタスクキューが優先的に完了される
 *  - マイクロタスクキューが完了した際にレンダリングされる 
 *  - マイクロタスクキューが空の場合はタスクが1つ完了した際にレンダリングされる
 */

// レンダリングのサンプルコード
// for (let i = 0; i <= 1e5; i++) {
//   setTimeout(() => {
//     document.body.textContent = i;
//   }, 0);
// }

/**
 * レンダリングのTips
 * - レンダリングの直前にあるanimation drame callbacksキューを操作可能
 * - レンダリングがスキップされるタイミング
 *  - ディスプレイがレンダリングできない
 *  - パソコンが重い
 *  - 画面がディスプレイがない
 *  - レンダリングをしたところで見た目の変更がなく、アニメcbsにも何もない
 *  - ブラウザがスキップしたい時
 */

/**
 * イベントループのTips
 * - Web Workers API
 *  - 二つ目のイベントループを作成する
 *  - タスクキューとマイクロタスクキューで成り立つ(レンダリングはskip)
 *  - 同時並行で複数のjsを処理可能
 * - ディスパッチイベント
 *  - コールバック関数を同機的に発火可能(本来はタスクキューに追加される)
 */

// asyncとawait = Promiseを簡潔に書くことができる
let aysncFunc = async () => {
  return 'hello'
}
let result = aysncFunc() // 同期的に実行される
console.log(result) // Promiseを返す

result.then((value) => {
  console.log(`resolved ${value}`)
})

/** async内ではawaitを使用可能
 * await PromiseObjと記載し、Promiseからの返却をそのまま返せる
 * - エラーの場合はtry-catchでハンドリング可能
 * - awaitに続く処理が終わらない限り後続の処理は実行できない
 * - for await ofで非同期のジェネレータとかを順序を保って操作可能
 */
