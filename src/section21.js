/**
 * section20: モジュールとファイル分割
 */

/**
 * import文とexport文
 * - モジュールでしか使用できない
 * - どうすればモジュールになるのか？
 *  - ブラウザならscriptタグのtype="module"である必要がある
 *  - node.jsであればpackage.jsonで設定する必要がある
 */

/**
 * モジュールとスクリプトの違い
 * - モジュールはデフォルトでstrictモード
 * - thisの動きがちょっと違う
 * - モジュール変数はモジュール内のみにスコープを持つ(ブロック文で囲われているイメージ)
 *  - export文で外部にexpose可能
 * - モジュールではいきなりawaitで実行可能(即時関数とかやらなくていい)
 * - type="module"ならデフォルトでdefer属性がつく
 * - scriptでnomodule属性を使用可能(moduleが理解できるブラウザは無視していい)
 */

/**
 * export可能な構文
 * - export const|let|var hoge = 'hoge';
 * - export function funcA() {};
 * - export function* funcB() {};
 * - export async function funcC() {};
 * - export async function* funcD() {};
 * - export class ClassA{};
 *
 * export構文として以下も可能
 * - export { hoge as H, funcC, funcD }
 */

/**
 * import構文
 * - import { A, B, Cat as C } from './hoge.js'
 * - import * as fuga from './fuga.js'
 *  - fuga.funcAとかするのが面倒 & importの透明性も低いので微妙
 */

/**
 * デフォルトimport|export
 * - export { hoge as H, funcC, funcD as default }
 * - export
 * - import 好きな名前, {名前つきimportと同様} from './hoge.js'
 * - import {default as A, 名前つきimportと同様} from './hoge.js'
 *
 * 注意点
 * - 1箇所しか使用できないし
 * - 名前つきexportと共存することは少ない
 */

/**
 * モジュールの実行順序
 * - import文があった場合はimport先のファイルを先に解析する
 * - import文は巻き上げられるし、export文は巻き下げられる
 * - 実行だけするimportの書き方もある
 *  - import 'path/to/file.js'
 */

/**
 * モジュールのメモリ管理
 * - importした場合はメモリの参照のみ保持する(参照渡し)
 * - importしたものを再export時もメモリの参照のみをexportする
 * - 循環参照時は巻き上げの順序次第で失敗する場合がある
 * - 再エクスポート
 *  - export { module } from 'path/to/import.js'
 *  - この場合は以降のコードでmoduleにアクセスできるわけではない
 */

/**
 * import文の動的な変更
 * - scriptタグのtype="importmap"でjson形式でimport参照先のパスを指定可能
 * - import()で動的かつ巻き上げられずにimportすることができる(Promiseを返却)
 *  - *でimportした場合と同じ結果が格納される
 *  - パスはバッククオートでもOK（普通のimport文はダメ）
 */
