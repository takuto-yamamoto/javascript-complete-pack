/**
 * Section4: 条件分岐と繰り返しとエラー処理
 */

// 条件分岐はif, else if, else
let cond = false;
let maybeOk = true;
if (cond) {
  console.log('OK!');
} else if (maybeOk) {
  console.log('maybe ok...');
} else {
  console.log('NG!');
}

// 演算子は===もしくは==
// ==の場合は文字列と数値でも等価
let num = '3';
if (num === 3) {
  console.log('num');
} else if (num == 3) {
  console.log('num string'); // こっちになる
}

// 仕様確認
// プリミティブなデータ型は値自体で比較
const num1 = 3;
const num2 = 3;
console.log(num1 === num2); // true
// objデータはメモリ参照を保持するため、アドレス比較
const coffee1 = { name: 'cafe latte' };
const coffee2 = { name: 'cafe latte' };
console.log(coffee1 === coffee2); // false

//Truthyとfalsy
//0や空文字列, nullやundefined以外は全てtrue
if ('hello') {
  console.log('ok'); // ok
} else {
  console.log('ng');
}

// 条件演算子はシェルと同じ
// && は左がtrueの場合右の値を返す(||より優先される)
// ||は左がfalseの場合右の値を返す
let andCond;
let orCond;
andCond = 'hello' && 'hi'; // 'hi'
orCond = false || 'hi'; // 'hi
console.log(andCond, orCond);
// 定義時でも可能
const userInput = '';
const userName = userInput || 'defalut';
console.log(userName); // default

// ちなみにこんなこともできる
let num3 = (num = 3); // 3

// null合体演算子??
// 左側の値がnullもしくはundefinedの場合に右側の値を返す
let myName;
myName = '' ?? 'User'; // ''
myName = '' && 'User'; // 'User'

/**
 * ??演算子とand/or演算子は同時に使わない
 * null || undefined ?? 'foo' // エラー
 * (null || undefined) ?? 'bar' // 'bar'
 */

// 反転は!演算子
// !!演算子は数値などのtruthyなデータをbooleanに変更可能
let x = 15;
console.log(!!x); // true

/**
 * ChromeDevToolsの条件付きBP
 * - 条件に応じてbreakするかどうかを決定する
 */

// ブロック文でスコープを定義する
const hello1 = 'hello1';
{
  // console.log(hello1) // アクセスできない
  const hello = 'hello';
}
// console.log(hello) // アクセスできない

// 三項演算子
let condition = true ? 'OK' : 'No'; // OK
condition = false ? 'OK' : 'No'; // NO
console.log(condition);

// switch-case-default文
function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato': {
      const message = 'tomato is red';
      console.log(message);
      break;
    }
    case 'carrot': // 複数のケースで処理をまとめられる
    case 'pampkin':
      // 一つめのmessageはブロックスコープなので再定義可能
      const message = 'tomato is red';
      console.log(message);
      console.log(`${vegetable} is orange!`);
      break;
    case 'onion':
      console.log('onion is white!');
      break;
    default:
      console.log(`${vegetable} is not found.`);
  }
}
vegetableColor('tomato');

// while文
let count = 0;
while (count < 10) {
  console.log(count);
  count += 1;
}

// 最初に必ず実行する内容がある場合は、do wihle文
let tomatoCount = 100;
do {
  console.log(tomatoCount); // 100で一回出力される
  tomatoCount += 1;
} while (tomatoCount < 10);

// for文
for (let i = 0; i < 10; i++) {
  console.log(i); // 0~9で出力
}

// 複雑なfor文
for (let i = 0, j = 0; i < 10 && j < 5; i++, j++) {
  console.log(i); // 0~4で出力
}

// for-ofループ
// 普通に書くとこう
const fruits = ['apple', 'banana', 'grape'];
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}
// for-ofループ(配列に対してのみ使用)
// ループごとスコープなのでconstでOK
for (const fruit of fruits) {
  console.log(fruit); // 同じ出力
}

// for-inループ(オブジェクトに使用)
const coffee = {
  name: 'Cafe latte',
  isHot: true,
};
for (const key in coffee) {
  console.log(key);
  console.log(coffee.key); // undefined
  console.log(coffee[key]);
}

/**
 * 本来breakされる箇所以外でcontinue/breakしたい場合は、
 * breakしたい階層にlabelをつけて`break label;`とする
 * label: if (cond) { doSomething() }
 */

// try-catch-finally
try {
  console.log(1);
  console.log(unknown_var);
} catch (e) {
  console.log(2, e);
  // return/break後に実行される
} finally {
  console.log('done!');
}

// throwとcatchの丸括弧
try {
  console.log('try');
  throw 'error';
} catch (e) {
  console.log('catch', e);
}
