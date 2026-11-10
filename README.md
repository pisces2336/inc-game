# ABYSSAL FRONTIER — 深海開拓計画

深海基地「ノーチラス」を拡張し、資源生産・電力・研究・遠征のバランスを取りながら未知の深度を開拓する、ブラウザ向けインクリメンタル戦略ゲームです。連打ではなく、生産チェーン・電力配分・研究・遠征の判断が進行の中心になります。

## 遊び方
- **基地管制**: 資源生産、電力、次の目標を確認します。
- **施設管理**: 温室・採掘ドリル・発電施設・研究室などを建設・強化します。
- **研究開発**: 研究データと資源を使い、生産倍率や新しい技術を解放します。
- **深層探査**: 潜航艇を派遣して報酬と新しい深度を獲得します。遠征はリアルタイムで進行します。
- **契約ボード**: 資源を納品して追加報酬を獲得します。
- **記録アーカイブ**: 実績、運用ログ、恒久強化「コア点火」を確認します。

進行状況は localStorage に自動保存され、再訪時は最大8時間分のオフライン生産が反映されます。

## 開発
Node.js 20+ を推奨します。

```bash
npm install
npm run check
npm run build
npm run dev
```

TypeScript + Viteで静的ファイルを生成します。バックエンドや外部APIは不要です。

## GitHub Pages
リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。mainへのpush後、Actionsがビルド・デプロイします。
公開URL: https://pisces2336.github.io/inc-game/

## 技術構成
- TypeScript 5 / Vite
- Vanilla DOM UI（ランタイム依存なし）
- localStorage セーブ / オフライン進行
- GitHub Actions + GitHub Pages