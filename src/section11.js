/**
 * メタプログラミング
 * Proxy, Reflect, Symbols, イテレータ, ジェネレータ, タグ付きテンプレート
 */

/**
 * Proxy
 * - オブジェクトや関数の基本的な操作にカスタム動作を設定できる
 * - get, set, has, deletePropertyなどのトラップがある
 * - プロパティのバリデーション、自動初期化、プライベート化などが可能
 */
const target = {};
const handler = {
  get: function (target, prop, receiver) {
    console.log(`Getting ${prop}`);
    // Reflectは基本操作を関数として提供する(Proxyの返り値とかにする)
    return Reflect.get(target, prop, receiver);
  },
};

const proxy = new Proxy(target, handler);

proxy.name = 'myProxy';
console.log(proxy.name);

/**
 * Symbol
 * - 必ずユニーク
 * - オブジェクトのキーとして使用可能
 * - for in ループなどではアクセスされないため、デバッグに便利
 * - Symbolを使用することで名前の衝突を避けることが可能
 * - イテレータ動作やtoString動作を変更可能
 * - ユニーク値なので外部からアクセスできない(オブジェクト内部状態変更不可)
 */

/**
 * ジェネレータ
 * - 遅延評価が可能(巨大なデータや無限のデータを効率的に生成可能)
 * - 非同期タスクを処理可能
 * - カスタムイテレータを処理可能(ネストされたイテレーションをフラットにしたり)
 */
// 無限配列
function* infiniteNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

const numbers = infiniteNumbers();

console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2

// フィボナッチ数列
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

/**
 * タグ付きテンプレート
 * - バッククオートで文字列を書く=テンプレートリテラル
 * - テンプレートリテラルの最初に関数名をつけることで、
 * - テンプレートリテラルの処理方法をカスタマイズする
 * - サニタイズとか言語マッピングとか機械的な文字列処理に使用
 */
