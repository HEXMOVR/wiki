# HEXMOVR Wiki

基于 Docusaurus 的 HEXMOVR 产品文档网站，最终通过 GitHub Pages 以纯静态文件形式发布。

## 部署方式

```text
Markdown / 图片 / 配置
        ↓ git push
GitHub Actions
        ↓ docusaurus build
静态 HTML / CSS / JS / 图片 / PDF
        ↓
GitHub Pages
```

网站运行时不需要 Node.js、数据库、后端服务、Docker 或自建服务器。Node.js 只在 GitHub Actions 构建阶段使用。

## GitHub 仓库

当前配置针对：

- Owner: `HEXMOVR`
- Repository: `wiki`
- GitHub Pages 自定义域名: `https://wiki.hexmovr.com/`

## 第一次部署

GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

之后每次 push 到 `main` 都会自动构建并部署。

## 本地目录

- `docs/`：Markdown 文档
- `static/`：图片、PDF 等静态资源
- `src/css/`：网站样式
- `sidebars.ts`：左侧目录
- `docusaurus.config.ts`：网站配置
- `.github/workflows/build.yml`：GitHub Pages 自动构建与部署

## 图片

产品 Markdown 中原有的 `Picture/` 图片引用已保留。把对应图片目录放到相应产品 Markdown 所在目录即可。
