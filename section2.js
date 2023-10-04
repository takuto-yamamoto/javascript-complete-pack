/**
 * Section2: JS基礎
 */

// letは初期化不要で書き換え可能
let count;
console.log(count); // undefined
count = 0;
console.log(count); // 0
count = 30;
console.log(count); // 30

/**
 * 未定義変数はRefernceError
 * console.log(unknown)
 */

// constは初期化必要で書き換え不能
const newCount = 0;

/**
 * constへの代入はTypeError
 * newCount = 30
 * console.log(newCount)
 */

/**
 * 複数回の宣言はできない
 * let count;
 * const newCount;
 */

// 命名規則
let tomatoCount; // キャメルケース
let TomatoCount; // パスカルケース
let $tomato_Count; // ドルとアンスコは使用可能
let _tomato_Count; // スネークはできるけどダメ
let tomato7Count; // 数字使用可能(先頭は不可)
let トマトカウント; // 一応できる(ダメ)

// +1, -1の時のみ以下3パターンの記法がある
let result = 5;
result += 1;
console.log(result++); // resultを返している
console.log(++result); // result+1を返している

// データ型
let number = 10; // Number型
string = 'Hello'; // String型
number = 'Hello'; // 動的に再代入可能

// String型
const userName1 = 'tarte'; // シングル
const userName2 = 'tarte'; // ダブル
const userName3 = `tarte`; // バック
console.log('hello, ' + userName1 + '!'); // 接続可能
console.log(`hello, ${userName1}`); // バックのみ可能
// バックのみ改行可能
console.log(`hello, 
tarte`);

/**
 * StringとNumberの組み合わせ
 * - '10' + '10'  // '1010'
 * - '10' + 10  // '1010'
 * - '10' - 10  // 0
 * - 'hello' + 10  // 'hello10'
 * - 'hello' - 10  // NaN
 */

// 数字の変換
const userInput = '10';
let calcResult;
calcResult = Number(userInput) + 10; // Numberに変換
calcResult = parseInt(userInput) + 10; // intに変換
calcResult = parseFloat(userInput) + 10; // floatに変換
calcResult = +userInput + 10; // +つけるだけ
const tenNumber = 10;
calcResult = '10' + String(userInput);
calcResult = '10' + userInput.toString();

// 配列(リストではない)
let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3];
array = [1, 'apple', true, array];
let array0 = array[0];
let arrayPush = array.push('orange');
console.log(array[-1]); // できない

// 辞書=オブジェクト
// キーはクオート不要
let coffee = {
  name: 'chocolate mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinammon', 'Caramel'],
  nutririons: {
    calories: 430,
    sugars: 53,
  },
};
console.log(coffee.nutririons['calories']); // ドットアクセスと配列アクセス
coffee.isHot = false; // 読み出し
coffee.barista = 'tarte'; // 新しいプロパティ

/**
 * undefinedとnull
 * - undefined: 未定義(エラーより)
 * - null: データがない、と言う定義(想定通り)
 */

// typoof演算子
typeof 3; // Number
typeof NaN; // Number
typeof coffee; //  object
typeof array; // object(arrayではない)
typeof undefined; // undefined
typeof null; // object

/**
 * 関数
 * - () {}をつける
 * - {}で終わるブロックの後にはセミコロンをつけない
 * - jsは上から下の実行だが、関数は最初に読み込まれるので順番は逆でもOK(非推奨)
 */
const sum = add(1, 3);
function add(num1, num2) {
  return num1 + num2;
}
console.log(`sum: ${sum}`);
