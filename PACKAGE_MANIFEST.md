# 仓库打包清单（2026-09-25 数据快照）

这份清单区分“可移植功能文件”和“因安全/版权/环境差异而有意不分发的材料”，不是把所有工作区杂项机械塞进 ZIP。

## 组件结构摘要

```text
ai-intelligence-ledger/
├── index.html
├── offline/AI情报勾稽看板_离线版.html
├── data/AI情报勾稽底稿.xlsx
├── crawler/crawl.py
├── archive/early-react-prototype/  # 早期空数据React/Vite源码（已去内网地址/元数据）
├── backend/
│   ├── app.py
│   ├── init_db.py
│   ├── requirements.txt
│   ├── install.sh
│   ├── start.sh
│   ├── health.sh
│   ├── README.md
│   ├── .env.example
│   └── .gitignore
├── docs/
│   ├── screenshot-home.png
│   └── backend-cover.png
├── README.md
├── PACKAGE_MANIFEST.md
├── LICENSE_NOTICE.md
├── SHA256SUMS.txt
└── .gitignore
```

使用者自行初始化并以自己的 GitHub 身份提交。未附开源许可证，详见 `LICENSE_NOTICE.md`。

## ZIP 内实际文件清单

```text
ai-intelligence-ledger/
├── .gitignore
├── LICENSE_NOTICE.md
├── PACKAGE_MANIFEST.md
├── README.md
├── SHA256SUMS.txt
├── archive/early-react-prototype/.gitignore
├── archive/early-react-prototype/README.md
├── archive/early-react-prototype/docs/architecture.md
├── archive/early-react-prototype/docs/features/intelligence-ledger.md
├── archive/early-react-prototype/index.html
├── archive/early-react-prototype/package.json
├── archive/early-react-prototype/public/favicon.svg
├── archive/early-react-prototype/src/App.tsx
├── archive/early-react-prototype/src/api/client.ts
├── archive/early-react-prototype/src/api/index.ts
├── archive/early-react-prototype/src/api/queries/HELLO_example.ts
├── archive/early-react-prototype/src/api/types.ts
├── archive/early-react-prototype/src/components/HelloPanel/index.css
├── archive/early-react-prototype/src/components/HelloPanel/index.tsx
├── archive/early-react-prototype/src/components/IntelDashboard/index.css
├── archive/early-react-prototype/src/components/IntelDashboard/index.tsx
├── archive/early-react-prototype/src/main.css
├── archive/early-react-prototype/src/main.tsx
├── archive/early-react-prototype/src/types/qiankun.ts
├── archive/early-react-prototype/tsconfig.json
├── archive/early-react-prototype/vite.config.ts
├── backend/.env.example
├── backend/.gitignore
├── backend/README.md
├── backend/app.py
├── backend/health.sh
├── backend/init_db.py
├── backend/install.sh
├── backend/requirements.txt
├── backend/start.sh
├── crawler/crawl.py
├── data/AI情报勾稽底稿.xlsx
├── docs/backend-cover.png
├── docs/screenshot-home.png
├── index.html
├── offline/AI情报勾稽看板_离线版.html
```

共 41 个文件；逐文件 SHA-256 见 `SHA256SUMS.txt`。

## 纳入项及用途

| 路径 | 用途 / 核验 |
|---|---|
| `index.html` | 当前实际运行的单文件看板入口，零依赖静态展示 |
| `offline/AI情报勾稽看板_离线版.html` | 离线命名副本；与入口字节完全一致 |
| `data/AI情报勾稽底稿.xlsx` | 全量10张表，保留结构化情报、主张、事实与状态 |
| `crawler/crawl.py` | 日常抓取与增量同步；相对仓库路径，Cookie 不随仓库分发 |
| `archive/early-react-prototype/` | 早期空数据 React/Vite 源码、样式、组件、类型与架构文档；去除内网元数据和锁文件 |
| `backend/app.py` | 可选研报与 OnePage API：数据库、PDF、AI分析 |
| `backend/init_db.py` | 数据表初始化脚本 |
| `backend/requirements.txt` | 后端 Python 依赖 |
| `backend/install.sh` / `start.sh` / `health.sh` | 通用安装、启动、健康检查脚本 |
| `backend/.env.example` | 配置字段模板，仅占位符 |
| `backend/README.md` | 配置、可信代理、部署与安全说明 |
| `docs/screenshot-home.png` / `backend-cover.png` | 首页截图与后端封面 |
| `README.md` | 项目说明、运行与 GitHub Pages 操作步骤 |
| `PACKAGE_MANIFEST.md` | 本清单、对账结果及排除说明 |
| `LICENSE_NOTICE.md` | 未授予开源许可的提示 |
| `SHA256SUMS.txt` | ZIP 内文件校验和 |
| `.gitignore` / `backend/.gitignore` | 忽略密钥、本机缓存与日志 |

## 数据与副本对账

- HTML `cards` 与 Excel `03_公众号信息`：162个情报 ID 全部一致。
- HTML `claims` 与 Excel `04_勾稽矩阵`：16个主张 ID 全部一致。
- HTML `facts` 与 Excel `06_公司公开信息`：68个事实 ID 全部一致。
- 离线副本与 `index.html`：SHA-256 相同。
- HTML 情报流水不含“公司官方”源卡，官方事实保留在公司公开信息层。
- Excel 私有 CDN 链接：0条；HTML 内部后端和私有研报 CDN URL：0条。
- 运行过 Python 语法编译、三组数据 ID 对账与静态页浏览器渲染检查。

## 有意不分发项（不是遗漏）

1. **内部平台部署资料**：`.cowork.json`、平台记忆、内部 workId/访问地址、部署 ID 和一次性打包文件。它们只对原内部平台有意义，公开会泄露内部部署信息。
2. **真实/本地配置**：`ai.properties`、`db.properties`、`.env`。即使原文件是 mock，也不放任何密码式配置；后端改用环境变量，只留 `.env.example`。
3. **研报原始 PDF 与私有 CDN URL**：不分发券商原件。HTML/Excel 里的私有链接已移除或换成“私有库存档”标记。
4. **一次性内部发布与补录脚本**：`backfill_publish.py`、`complete_publish.py` 绑定本机工作区和内部发布接口；通用日常更新由 `crawler/crawl.py` 提供。
5. **Cookie、缓存和构建基线**：搜狗 Cookie、`__pycache__`、`node_modules`、`.baseline.json` 等均是本机凭据、缓存或生成状态，不是运行源文件；Cookie 文件名已加入 `.gitignore`。
6. **早期 React/Vite 空库脚手架**：已将纯业务源码与必要构建配置归档至 `archive/early-react-prototype/`，用于“不要有任何遗漏”下保留研发原型；注明它是0条数据的旧模板，不是当前162条数据看板。原 `AGENTS.md`、`manifest.json`、`miniapp.json`、`.baseline.json`、`pnpm-lock.yaml` 与 `node_modules` 不复制，因为含内部平台规范/作者身份/内网镜像或生成状态；API 内网端点已改为需本地显式配置的 `VITE_DATA_QUERY_API`。
7. **原 Cowork 专用后端配置**：不公开专用 SSO / AI 网关接法。仓库里的后端已改为环境变量、可信反向代理 HMAC 身份验证及标准 Anthropic Messages API，属于可移植参考实现，不是原服务的逐字副本或一键部署包。
8. **Git 历史与许可证**：ZIP 不含提交历史，避免把工作邮箱写入公开提交；未附开源许可证或 MIT 授权，避免擅自授予代码/内容复用权，详见 `LICENSE_NOTICE.md`。

## 部署和验证边界

静态看板可直接打开；研报上传、AI识别、用户隔离和 OnePage 生成需要单独配置并部署 `backend/`。后端默认只绑定 `127.0.0.1`，不应直接暴露到公网。若经反向代理访问，代理必须剥离客户端传来的 `X-Authenticated-User` 与 `X-Identity-Signature`，再注入经过认证且匹配 HMAC 的身份。上线前仍需自行配置 TLS、数据库、模型 API、密钥与网络访问控制。

本次验证未连接真实 PostgreSQL、LLM 服务或代理；当前运行环境缺少 FastAPI 依赖，因此没有声称这些集成链路已端到端实测。
