/**
 * section8: 高度なオブジェクト
 */

// オブジェクトの仕様
const interests = 'exp_interests';
const person = {
  name: 'tarte', // 予約語使用可能
  age: 25,
  greeting: () => 'hello',
  3.0: 3.0, // 数字のキーが可能
  'current city': 'Tokyo', // スペース文字列も可能
  [interests]: ['music', 'travel'], // []で変数キー
};
console.dir(person);
// オブジェクトの全てのキーは文字列で管理されている
console.log(person['current city']);
console.log(person['greeting']());

// 配列で取得
console.log(Object.keys(person));
for (const key of Object.keys(person)) {
  console.log(key);
}
//// 他にもvalues, entriesがある
// console.log(Object.values(person));
// for (const value of Object.values(person)) {
//   console.log(value);
// }
// console.log(Object.entries(person));
// for (const [k, v] of Object.entries(person)) {
//   console.log(k, v);
// }

/**
 * オブジェクトのキーの順番
 * - 非負の整数を0から並べる
 * - 残りは定義された順
 */

// プロパティの削除はdelete演算子
delete person.age; // ageが削除される

// objectの省略記号
const name = 'Espresso';
const size = 350;
const coffee = {
  name, // すでに定義されている変数の場合は、値がvalue
  size,
  nutritions: {
    calories: 180,
  },
};
console.log(coffee);

// spread構文によるコピー
const coffee2 = coffee; // 同じメモリアドレスの参照
const coffee3 = {
  ...coffee,
  isHot: true,
  name: 'Latte', // 上書き
};
console.log(coffee3);

// シャローコピーに注意
coffee.nutritions.calories = 200;
console.log(coffee3); // calories: 200
//　対策例: スプレッド
const coffee4 = {
  ...coffee,
  nutritions: {
    ...coffee.nutritions,
  },
};
coffee.nutritions.calories = 220;
console.log(coffee4); // calories: 200

// onjを拡張する(既存objを拡張する)
const o1 = { a: 1 };
const o2 = { a: 2, b: 2 }; // aは更新
Object.assign(o1, o2); // 一番左が基準
console.log(o1);

// 分割代入
// const isHot = coffee.isHot;
const { isHot } = coffee; // 上と同じ
const {
  isHot: coffeeIsHot,
  nutritions: { calories: coffeeCalories, unknonw: ukw = 'unknw' },
} = coffee;
console.log(coffeeCalories);
// オブジェクトを引数に取ることでキーを関数内に直接渡せる
const sayCoffee = ({
  isHot: coffeeIsHot,
  nutritions: { calories: coffeeCalories, unknown: ukw = 'unknw' },
}) => {
  console.log(coffeeIsHot, coffeeCalories, ukw);
};
sayCoffee(coffee);

/**
 * オプショナルチェイニング
 * - ?.の直前のオブジェクトがnull/undefinedなら
 * - プロパティアクセスを省略する
 * - エラーハンドリングを省力化できる
 */
let user = undefined;
user = null;
console.log(user?.address); // undefined

// thisはグローバルオブジェクト
// 全てのレキシカル環境についている
console.log(this); // grobal obj.
let sayThis = function () {
  console.log(this); // strict ? undefined : g-obj
};
// this = 'hello' // エラー

// メソッド呼び出しにおけるthis
// メソッドにおけるthisは呼び出しもと(ドットの1つ左)を指す
const car = {
  color: 'red',
  sayThis,
  changeColor: function (color) {
    this.color = color;
  },
};
car.sayThis(); // car自身を表す
const car2 = { ...car };
car2.changeColor('white');
console.log(car.color, car2.color);

// arrow関数のレキシカル環境ではthisを持たない
let sayThis2 = () => {
  console.log(this);
};
const car3 = {
  sayThis2,
};
car3.sayThis2(); // global-obj

/**
 * arrow関数がthisを持たないのはなぜか
 * - arrow関数を囲むレキシカル環境のthisをキャプチャする
 * - 外部のthisをキャプチャする必要がない
 * - (ex. var that = this)
 */

// thisの指定(arrow関数には無効)
// sayThis.call({ hello: 'hello' }); // thisは{}オブジェクト
// sayThis2.call({ hello: 'hello' }); // アロー関数は無視される
// thisや引数をバインドして関数作成(functools.partial的な)
// sayThis.bind({ hello: 'hello' });

// メソッドの省略記号
// メソッドは基本的に関数宣言
const obj = {
  changeName(params) {}, // こんな書き方もできる
};

// getterとsetter(アクセサプロパティ)
const pastaCalculator = {
  servingSize: 60,
  member: 4,
  get total() {
    return this.servingSize * this.member;
  },
  set total(newValue) {
    this.member = newValue / this.servingSize;
  },
};
// getter: 関数をプロパティのように使用できる
console.log(pastaCalculator.total);
// 関数結果に対しset可能
pastaCalculator.total = 300;
console.log(pastaCalculator);

// Property Descriptor
// 後からアクセサプロパティを追加することが可能
// get, setは高度なプロパティに含まれる
console.log(Object.getOwnPropertyDescriptor(pastaCalculator, 'servingSize'));
Object.defineProperty(pastaCalculator, 'total', {
  configurable: true,
  enumerable: true,
  get() {},
  set(newValue) {},
});
