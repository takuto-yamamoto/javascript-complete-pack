/**
 * sectoni10: 配列の操作
 */

// push/pop/shift/unshift
let array = [1, 2];
array.push(3);
console.log(array); // [1, 2, 3]
array.pop();
console.log(array); // [1, 2]
array.unshift(0);
console.log(array); // [0, 1, 2]
array.shift();
console.log(array); // [1, 2]

// splice(start, deleteCount, item1, item2, itemN);
array.splice(1, 2, 'Jan', 'Feb');
console.log(array); // [1, 'Jan', 'Feb']

// fill(value, start, end);
array.fill('filled', 1, 2);
console.log(array); // [1, filled, 'Feb']

// copyWithin(target, start, end);
array.copyWithin(2, 0, 2);
// 配列の長さは変えない
console.log(array); // [1, 'filled', 1]

// sort(conpareFn: ソート定義function);
array.sort();
// utf-16順にソート(数字も文字列扱いなので80が9の先に来る)
console.log(array); // [1, 1, 'filled']

// reverse();
array.reverse();
console.log(array); // ['filled', 1, 1]

// concat(item0, item1, ..., itemN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
array = array1.concat(array2, array3);
console.log(array); // [1, 2, 3, 4, 5, 6]

// join(sep)
console.log(array.join()); // '1,2,3,4,5,6'
console.log(array.join('-')); // '1-2-3-4-5-6'

// slice(start, end);
// step指定できないので注意
console.log(array.slice(2)); // [3, 4, 5, 6]
console.log(array.slice(2, 4)); // [3, 4]
console.log(array.slice(2, -1)); // [3, 4, 5]

// toString();
// joinと同じ
console.log(array.toString()); // '1,2,3,4,5,6'

// indexOf(searchElement, fromIndex);
console.log(array.indexOf(3)); // 2
// 存在しない場合は-1
console.log(array.indexOf(3, 4)); // -1

// lastIndexOf(searchElement, fromIndex)
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // 3
console.log(animals.lastIndexOf('Tiger')); // 1

// includes()
console.log(animals.includes('Dodo')); // true
console.log(animals.includes('cat')); // false

// forEach(arrow-function)
animals.forEach((element) => console.log(element));
// forEach(callbackFn)
// element, index, arrayを引数に勝手に渡してくれる
const logArrayElements = (element, index, array) => {
  console.log(`a[${index}] = ${element}`);
  console.log(array[index]);
};
// emptyにはループしない
[2, 5, , 9].forEach(logArrayElements);

// map: mapした新しい配列を返す(inplaceしない)
const map1 = animals.map((animal) => animal + '_maped');
console.log(map1); // ['Dodo_maped', ...]

// filter(各要素に対してt/fを返すfunction)
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
let result = words.filter((word) => word.length > 6);
console.log(result); // ['exuberant', 'destruction', 'present']

// flat(depth)
const nestedArray2 = [0, [1, [2, [3, 4]]]];
console.log(nestedArray2.flat()); // [0, 1, [2, [3, 4]]]
console.log(nestedArray2.flat(2)); // [0, 1, 2, [3, 4]]
console.log(nestedArray2.flat(Infinity)); // [0, 1, 2, 3, 4]

// flatMap() = map() + flat(1)
// nestedArray2だと[1, [2, [3, 4]]]の部分は1要素と捉えられる
console.log(nestedArray2.flatMap((num) => (num === 0 ? [2, 2] : 1)));

// every()
console.log(array);
console.log(array.every((element) => typeof element === 'number')); // true

// some()
console.log(array.some((element) => element === 1)); // true

// findとfindIndex
console.log(array.find((element) => element === 2)); // 2
console.log(array.findIndex((element) => element === 2)); // 1

// reduceとreduceRight
const items = [1, 2, 3];
const initialValue = 1;
// 最初はinitialValueがpreviousItemになる
result = items.reduce((previousItem, item) => {
  return previousItem + item;
}, initialValue);
console.log(result); // 7

// 配列におけるthisはbindでとる
// pass

// atはマイナスもとれる
console.log(items.at(-1));
