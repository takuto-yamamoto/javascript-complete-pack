/**
 * section5: 関数の応用
 */

// 関数宣言のパターン
// パターン1: functionによりオブジェクトに関数コードを代入
function add(num1, num2) {
  return num1 + num2;
}
console.log(add.name);
const newAdd = add;
console.log(newAdd(3, 4));
// パターン2: 関数を変数に格納する（constが使用可能）
// console.log(sayHi()); // 巻き上げられないのでerror
let sayHi = function hi() {
  return 'hi';
};
console.log(sayHi()); // hi

// 関数とメソッドの違い
const person = {
  name: 'tarte',
  sayHi: function () {
    return 'hi';
  },
};
// メソッド=オブジェクトの関数プロパティ
console.log(person.sayHi);
console.log(person.sayHi()); // function呼び出し

// アロー関数
sayHi = (name) => {
  return `Hi  ${name}`;
};
// lambdaっぽい書き方もできる
sayHi = (name) => `Hi ${name}`;
// パラメータが1つの場合は()も省略できる
// sayHi = name => `Hi ${name}`;

// ()で括ればバグらずにオブジェクトも返せる
// デフォルト値も設定可能(キーワード引数はあと)
sayHi = (name = 'User') => ({
  name: name,
});
console.log(sayHi());

// 定義済みパラメータは引数内でも使用可能
sayHi = (name, message = `${name}!`) => `Hi! ${message}`;
console.log(sayHi('tarte'));

// 引数が無限の関数
// ...を使用して配列化
let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 2, 3, 4, 5)); // 15

// アロー関数以外ではargumentsを使用可能
sum = function () {
  console.log(arguments[0]);
};

// コールバック関数
// 関数の引数に関数を渡す
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, (result) => {
  console.log(result);
});
// subtract(10, 3, (result) => {
//   alert(result);
// });

/**
 * 無名関数は代入した変数やプロパティ名がnameに入る
 * エラー時にスタックトレースができないので注意
 */
