# 見積もり補助ツール PWA

GitHub Pagesで配布できる静的Webアプリです。

## 機能

- 重量計算
  - 板材 / フラットバー
  - 丸棒
  - 角材
  - 六角材
  - 丸パイプ
  - 角パイプ
- 単位換算
  - 長さ: mm / inch / cm / feet / m
  - 重量: g / kg / lb / oz
  - 圧力: MPa / psi / kgf/cm²
  - 温度: °C / °F
- 材料費・概算見積
  - 重量
  - 材料単価
  - ロス率
  - 加工費
  - 管理費
  - 利益率
- PWA対応
  - インストール可能
  - キャッシュ対応

## GitHub Pagesでの使い方

1. GitHubで新しいリポジトリを作成
2. このフォルダ内のファイルをアップロード
3. Settings → Pages
4. Branchを `main`、Folderを `/root` に設定
5. 表示されたURLを開く

## カスタマイズ

材質の密度はアプリ内の「設定」タブから変更できます。
初期値は `app.js` の `DEFAULT_MATERIALS` にあります。
