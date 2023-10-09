/**
 * section19: Node.jsとnpm
 */

/**
 * nodejs
 * - jsのサーバサイド実行環境
 * - WebAPIは持たないが、ファイル操作などのAPIを持っている
 * - プロセスAPIやモジュールAPIなどもある
 * - イベントループ(MTキューなど)や非同期の概念も存在
 * 
 * npm
 * - node package manager
 * - PJのnode.js設定を管理するpackage.json
 * - node-modulesにモジュールを再起的に追加
 * - npm installでpackage.json内の依存関係を全てinstallする
 * - ~は3桁目のアップデートを許容、^は2桁目のアップデータを許容
 * - package-lock.jsonには厳密なバージョン管理が可能
 * - npm ciをするとpackage-lock.jsonに基づいてinstall
 * - scriptsにコマンドエイリアスを記載して簡潔に操作可能
 *  - npm run hogeのようにrunコマンドを使用してscripts実行
 * - npx hogeで.node_modules/.bin/hoge を実行してくれる
 *  - 存在しないhogeを実行した場合は一時的にhogeをinstallしてくれる
 * - npm -gでグローバルに保存
 * - npm --save-devで開発用パッケージを管理(devDependencies)
 */