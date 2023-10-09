/**
 * section9: prototypeとクラス
 */

/**
 * プロトタイプチェーン
 * - すべてのオブジェクトはプロトタイププロパティを持つ
 * - get時にプロパティがない場合はプロトタイププロパティの先のプロパティを参照する
 * - set時は通常通りの挙動
 */

// Prototypeを操作する方法(そもそも良くない)
const obj = {
  a: 1,
  b: 2,
};
// get
console.log(obj.__proto__); // setterとgetterがある(非推奨)
Object.getPrototypeOf(obj); //　公式推奨の書き方
// set
Object.setPrototypeOf(obj, {
  // 遅いので非推奨
  c: 3,
});
Object.create({ c: 3 }); // オブジェクトのプロトタイプを指定して作成(推奨)
obj.a = 1;
obj.b = 2;
console.log(obj);

// for in ループにおいてはプロトタイプまで見る
for (const key in obj) {
  console.log(key);
}

// Object.keysはプロトタイプ見ないのでこっち使う方がいい
for (const key of Object.keys(obj)) {
  console.log(key);
}

// ファクトリ
let UserFactory = (name, age) => {
  return {
    name,
    age,
    greeting() {},
  };
};

// コンストラクタ(アロー関数不可)
// const UserConstructor = function (name, age) {
//   // this = Object.create(UserCOnstructor.prototype)
//   this.name = name;
//   this.age = age;
//   this.greeting = function () {};
//   // return this が省略されている
// };
// const user1 = new UserConstructor('tarte', 25);
// console.log(user1);

// プロトタイプを用いて共通部分については同じアドレスを参照するようにする（ファクトリの場合）
// const userPrototype = {
//   greeting() {},
// };
// const UserConstructor = (name, age) => {
//   const user = Object.create(userPrototype);
//   user.name = name;
//   user.age = age;
//   return user;
// };
// const user1 = UserConstructor('tarte', 25);
// console.log(user1);

// コンストラクタの場合
const UserConstructor = function (name, age) {
  // this = Object.create(UserCOnstructor.prototype)
  this.name = name;
  this.age = age;
  // return this が省略されている
};
UserConstructor.prototype.greeting = function () {}; // prototypeにプロパティ追加
const user1 = new UserConstructor('tarte', 25); // newされたときはprototypeプロパティを参照する
console.log(user1);

// 内蔵されているコンストラクタ関数
const o = new Object({ hello: 'hello' }); // const o = {}と同じ
console.log(o);

/**
 * hasOwnPropertyとin演算子の違い
 * - hasOwnPropertyはprototypeまで見ない
 * - Own=prototypeまでは見ない、の意
 *
 * hasOwnPropertyとObject.prototype.hasOwnProperty.callの違い
 * - hasOwnPropertyメソッドがオーバーライドされていても動くかどうか
 * - 後者はコンテキスト変更のみなので確実に動く
 */

/**
 * コンストラクタ関数の応用
 * - new.target
 *   - これで一つのプロパティ
 *   - newしたときはコンストラクタ自身、しないときはundefinedとなる
 *   - new忘れに対してエラーハンドリング可能
 * - returnはオブジェクト以外無視される（return thisが優先される）
 */

// class構文はコンストラクタの上位互換
// メソッドを羅列することしかできない(.prototype.greetingのようなもの)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } // init的な
  greeting() {}
  post() {}
}
// class構文は必ずnewを要求する
const user3 = new User('tarte', 25);
console.log(user3);

/**
 * クラスの便利な点
 * - getter, setterはmethodの先頭にset,getをつけるだけ
 * - staticを先頭につけると静的メソッド、静的フィールドになる
 * - 式を羅列することで、プロパティ（prototypeではなくthis）に追加可能（field）
 * - 実行順序はフィールド -> コンストラクタ
 * - フィールド名/メソッド名の先頭に#をつけるとプライベートフィールドとなる
 */

// クラスの継承
class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    console.log('Animal eat.');
  }
}

// Bird.__proto__ をAnimalにしている
// Bird.prototype.__proto__ = Animal.prototype
// [[ConstructorKind]]: "derived"
// プライベート変数は継承されない
class Bird extends Animal {
  name = 'bird';
  // constructorはsuperが必要
  constructor(age, name) {
    super(age); // thisもここ(親クラス)で作っている
    this.name = name;
  }
  eat() {
    // setterの場合はthisをsuperで代理できる
    // getterの場合は継承元のクラスをsuperで代理できる
    super.eat();
    console.log('Bird eat');
  }
  fly() {}
}

/**
 * Extendsのややこしさ解消方法
 * - this.animal = Animal(age) のようにすればbird.animal.ageみたいなアクセスが可能
 * - 継承とは別にコンポジションという（一般的には簡単なのでコンポジションを使う）
 */

// instance演算子
const bird = new Bird(3, 'pi');
console.log(bird instanceof Bird); // true
