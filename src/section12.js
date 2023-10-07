/**
 * section12: 標準ビルトインオブジェクト
 */

// プリミティブ値はメソッドも使用可能
let count = 1.23456;
let result = count.toFixed(2); // メソッドが使える!?
// `new Number(count).toFixed(2)` と同じ
// Number, String, ...というオブジェクトがある

// Numberの静的メソッド
// is系
console.log(Number.isFinite(count)); // true
console.log(Number.isInteger(count)); // false
console.log(Number.isNaN(count)); // false
// isSafeIntegerは丸められてない整数
console.log(Number.isSafeInteger(2 ** 53)); // false

// parse系
console.log(Number.parseInt(3.1)); // 3
console.log(Number.parseFloat('3.1')); // 3.0
// 第二引数には進数を設定可能
console.log(Number.parseInt('1010', 2)); // 10
// toStringでも進数を設定可能
console.log((10).toString(2)); // '1010'

/** Numberの静的プロパティ
 * - MAX|MIN_SAFE_INTEGER: 安全な最大|最小の整数
 * - MAX|MIN_VALUE: 安全な最大|最小の正の数
 * - NaN: 普通のnanと同じ
 * - Number.POSITIVE|NEGATIVE_INFINITY: 正|負の無限大
 */

/**
 * Mathオブジェクトの静的プロパティ・メソッド
 * - Math.E: e
 * - Math.PI: π
 * - Math.abs(x)
 * - Math.ceil(x): 切り上げ
 * - Math.floor(x): 切り下げ
 * - Math.trunc(x): |x|を超えない整数にxの符号をつけたもの
 * - Math.log(x)
 * - Math.max|min([...values])
 * - Math.pow(x, y): xのy乗
 * - Math.random()
 * - Math.round(x): xを整数に四捨五入
 * - Math.sqrt(x)
 */

/**
 * BigIntの生成方法
 * - const a = 5n // nをつける
 * - const b = BigInt(10) // BigIntオブジェクト
 * - const c = BigInt('7') // BigIntオブジェクト
 */

// String.prototypeのメソッド
const str = '   I like apples   ';
console.log(str.slice(3, -3));
console.log(str.trim());
console.log(str.split(''));
console.log(str.replace('like', 'love'));
console.log(str.trim().startsWith('I like'));

// 正規表現の定義方法
let regexp = new RegExp('apples');
regexp = /apples\d/; // ここで正規表現を入れる
regexp = /\s/;
regexp = /\w/;
regexp = /\D/; // \d以外
regexp = /./; // 改行以外
regexp = /^I/;
regexp = /3$/;
regexp = /p{2}/; // pを2回連続
regexp = /p{2,4}/; // pを2回以上4回連続
regexp = /p+/; // pを1回以上
regexp = /p?/; // pを0か1回
regexp = /p*/; // pを0回以上
regexp = /(apple)+/ // appleを1回以上
regexp = /(apple|ogange)+/ // appleかorangeを1回以上
regexp = /[0-9a-zA-Z]/ // 0-9, a-z, A-Zのどれか1文字
regexp = /[^J-Z]/ // JからZ以外

console.log(regexp.test('I like apples3')); // true

/**
 * 正規表現のメソッド
 * - regexp.test(); // 含むかどうか
 * - regexp.match(); // gフラグをつけると該当する要素を配列にして返す
 * - regexp.matchAll(); // gフラグのないmatchの返り値を全て配列化
 * - regexp.replaceAll(); // イメージ通りのreplace
 * - regexxp.replace(); // 第一引数はgフラグつける
 */

/** エラーハンドリング
 * - throw new Error('description') 
 * - ReferenceError: 未定義の変数を参照
 * - TypeError
 * - SyntaxError
 * - RangeError: インデックスエラー
 * - URIError: 不正なURI引数
 */

/**
 * ArrayBuffer
 * - バイナリデータの生のメモリブロックを指す
 * - 同じバイナリデータに対して異なるデータ型やエンディアンででアクセス可能
 * - 大量のバイナリデータを効率的に扱える
 * - バイナリ送受信を必要とするWebAPIとかで使用
 * - バイナリデータを直接的に操作可能(普通はJSエンジンが勝手にやる)
 * 
 * TypedArray
 * - バイナリデータに特定のデータ型でアクセスする
 * 
 * Dataview
 * - エンディアン指定や、同じバイナリデータの複数の形式での読み書き可能
 */ 

/**
 * MapとObject
 * - Mapはキーになんでも使える
 * - Mapは順序を記憶する
 * - Mapは効率的に変更操作を行える
 * - Mapはgetter, setterのみでしかアクセスできない
 * - MapはJSONシリアライズが大変
 */

/**
 * SetとArray
 * - Setはユニークな値の集合
 * - Setはインデックスアクセスができない
 */

/**
 * WeakSetとWeakMap: Set, Mapの弱いバージョン
 * - オブジェクトのみを値にもつ
 * - オブジェクトへの参照がなくなった場合、GCされる
 * - オブジェクトが消える際にそのメタデータも一緒に消したい、など
 */
