/**
 * secton7: 発展的な関数の使用方法
 */

/**
 * Lexxical Env.
 * - 以下のコードにおいて?に何が入るのかを考える
 * ```
 * let apple = 'apple';
 * let orange = 'orange';
 * {
 *  let mango = 'mango';
 *  console.log(?);
 *  {
 *    let banana = 'banana';
 *  }
 * }
 * ```
 * - ECMAScriptでは...
 *  - まずgrobal envを定義したlexical env.を作成
 *  - lex-envに変数を追加していく
 *  - ブロックに遭遇したら新たなlex-envを作成する
 *  - 新たなlex-env内に既存のlex-envへの参照を張る
 *  - 新たなlex-envの中に変数などを追加していく
 *  - ブロックが出てくるたびに繰り返す
 */

/**
 * 関数の場合のレキシカル環境
 * - 定義した時？呼び出す時？
 * - 定義した時: 関数オブジェクトをlex-envに追加する
 * - 呼び出す時: lex-envを新規作成
 * - 関数が作成されたlex-envをouter-envとして指し示す
 * - 外部の変数の情報(Enviromentプロパティ)を持ったもの=クロージャ
 * - ブラウザ上ではレキシカル環境はメモリ上に保存される
 *   - GCによりメモリ最適化
 *   - 内部的に不要なレキシカルは削除(Chromeはあるが、Safariではなかったりする)
 */

/**
 * クロージャ
 * - ある関数が、自身のレキシカルスコープ内の変数の参照を持つこと
 * - 変数スコープの外部から関数を通じてその変数に動的にアクセスできる
 * - ECMAScriptはOuter Env.をオブジェクトとして管理する(アドレス指定)
 */

// 応用的な関数を使用してプライベート変数を作る
let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incremantAge: () => age++,
  };
};
const tarte = generatePerson('tarte');
console.log(tarte.getAge()); // 0
tarte.incremantAge();
console.log(tarte.getAge()); // 1
console.log(tarte.getName()); // tarte

// レキシカル環境のリセット
const tom = generatePerson('tom');
console.log(tom.getAge()); // 0
tom.incremantAge();
tom.incremantAge();
console.log(tom.getAge()); // 2

// 即時関数(関数式を()で括ったもの)
const counter = (() => {
  let count0 = 0;
  return () => {
    count0++;
  };
})();

// 再帰関数
let factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(3));
// console.log(factorial(20000)); // コールスタックエラー

/**
 * スタックと実行コンテクスト
 * - 実行する関数/状態/レキシカル環境(まとめて実行コンテクスト)スタックしていく
 * - ブラウザ上では無限にスタックできないので、Maxのスタック数が決まっている
 * - スタックなのでFILO
 */
