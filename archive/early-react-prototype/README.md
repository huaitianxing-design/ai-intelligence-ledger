# 早期 React/Vite 原型（归档）

此目录保留项目早期的 React 18 + Vite + qiankun 空数据脚手架，便于追溯框架实验；它不是当前运行中的数据看板，也不含当前的162条情报。当前可运行版本是仓库根目录的单文件 `index.html`。

## 本地运行

```bash
npm install
npm run dev
```

早期目录内的 `src/components/IntelDashboard` 仅为框架示例视图，不连接根目录看板的数据集；它展示零数据占位结构。使用当前情报数据请直接打开仓库根目录的 `index.html`。

查询示例默认不连接任何服务。需要调用外部兼容查询 API 时，本地自行设置 `VITE_DATA_QUERY_API`；生产构建设置 `VITE_CDN_BASE`。不要把内网地址、凭据或 Cookie 写进源码。

本归档不带依赖锁文件和 `node_modules`：原脚手架锁文件引用企业内部包镜像，不适用于公开仓库。
