# Seven 的个人博客 / Seven's Personal Blog

> 基于 Astro 构建的极简粗野主义风格博客。Toy Brick Brutalism — 大胆的蓝色边框、手绘质感、积木堆叠美学。
> A brutalism-style personal blog built with Astro. Toy Brick Brutalism — bold blue borders, hand-drawn textures, brick-stacking aesthetics.

[![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte)](https://svelte.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://vercel.com)

**在线地址 / Live Site:** [https://seveneeth.github.io/SevenBlog/](点击这里)

---

## 📦 功能特性 / Features

### 🎨 设计与体验 / Design & UX

| 功能 | 说明 |
|------|------|
| **粗野主义风格** | 手绘质感、蓝色粗边框、阴影堆叠、积木美学 |
| **自定义光标**  | Svelte 实现的手绘风格光标，随点击弹出小星星 |
| **打字动画**    | PageBanner 和说说页面的逐字打字效果 |
| **页面过渡动画** | Astro View Transitions，页面切换顺滑流畅 |
| **骨架加载动画** | 积木掉落风格的骨架屏加载效果 |
| **响应式布局**  | 完美适配手机 / 平板 / 桌面端 |
| **文章目录**    | 桌面端侧边栏 + 移动端底部抽屉式目录，滚动高亮跟随 |
| **阅读进度条**  | 文章顶部蓝色渐变进度指示条 |
| **回到顶部按钮** | 右下角浮动按钮，滚动 300px 后显示 |
| **代码块增强**  | Mac 风格窗口控制、复制按钮、超长代码折叠展开 |


### 🗣️ 社交功能 / Social

| 功能 | 说明 |
|------|------|
| **Waline 评论** | 自托管评论系统，支持 Markdown、表情、验证码、邮件通知 |
| **分享功能**    | 生成海报（横向分享图）、分享到 QQ 空间 / X (Twitter) / 微信、复制链接、系统原生分享 |
| **RSS 订阅**    | 4 条 RSS 2.0 Feed（全量 / 仅文章 / 仅说说 / 最新 10 篇） |
| **邮件订阅**    | 基于 GitHub Issues 的更新通知方案 |

### 🔍 内容管理 / Content Management

| 功能 | 说明 |
|------|------|
| **分类筛选**    | 按分类浏览文章 |
| **标签筛选**    | 按标签浏览文章 |
| **全文搜索**    | 客户端实时搜索，匹配标题、描述、内容、标签 |
| **分页浏览**    | 支持页码导航、跳转输入、前后翻页 |
| **日历归档**    | 按年月日查看历史文章 |
| **时间线归档**  | 时间线风格的归档页面 |
| **说说 (微博客)** | 独立微博客功能，支持照片、位置、天气、心情、设备信息 |

### 🤝 友链 / Friends
暂时未开放

### 🔧 技术特性 / Technical

| 功能 | 说明 |
|------|------|
| **SSG 静态生成** | 全站静态 HTML，CDN 加速，极速加载 |
| **SEO 优化**    | Open Graph / Twitter Card / JSON-LD 结构化数据 / Sitemap / robots.txt / Canonical URL |
| **图片灯箱**    | Fancybox 灯箱看图，支持缩放、全屏 |
| **数学公式**    | KaTeX 渲染，支持行内和块级公式 |
| **Markdown 增强** | GFM 表格、任务列表、删除线等 |
| **Umami 分析**  | 隐私友好的自托管访问统计 |
| **自定义 404**  | 粗野主义风格的 404 页面 |
| **中英文双语**  | 全站中文为主，SEO 标签含英文关键词 |

---

## 🚀 快速开始 / Quick Start

### 环境要求 / Prerequisites

- **Node.js** >= 22
- **pnpm**（推荐）或 npm / yarn

### 安装 / Installation

```bash
# 克隆项目
git clone https://github.com/seveneeth/SevenBlog.git
cd xuhome

# 安装依赖
pnpm install
```

### 开发 / Development

```bash
pnpm dev
```

访问 `http://localhost:3000`，支持热更新。

### 构建 / Build

```bash
pnpm build
```

构建产物在 `dist/` 目录。

### 预览 / Preview

```bash
pnpm preview
```

---

## ⚙️ 配置指南 / Configuration Guide

所有可定制内容都已集中到 `src/config/site.ts`，文件内全部字段都有中文注释说明用途。`seo.ts` 与 `info.ts` 现在只是向后兼容的 re-export，便于旧引用过渡。

---

## 📝 内容管理 / Content Management

### 写文章 / Writing Posts

在 `src/content/posts/` 下创建 `.md` 文件，frontmatter 格式：

```markdown
---
title: "文章标题"
published: 2026-06-06 12:00:00
image: "https://example.com/cover.jpg"
description: "文章描述，用于 SEO 和卡片展示"
tags: ["Vercel", "Docker"]
category: "技术"
---

文章正文，支持 Markdown、GFM、KaTeX 公式、代码高亮。
```

### 写说说 / Writing Talks

在 `src/content/talks/` 下创建 `.md` 文件：

```markdown
---
title: "日常动态"
published: 2026-06-06 10:00:00
location: "石家庄"
weather: "晴"
mood: "开心"
device: "iPhone"
tags: ["日常"]
---

内容正文...
```

---

## 📡 RSS 订阅

项目提供 4 条 RSS 2.0 Feed，均含完整文章/说说内容、`dc:creator`、`lastBuildDate`：

| Feed | 路径 | 内容 |
|------|------|------|
| 全量 | `/rss.xml` | 全部文章 + 说说（说说标题前加 `「说说」` 前缀） |
| 文章 | `/posts.xml` | 仅文章 |
| 说说 | `/talk.xml` | 仅说说 |
| 最新 | `/latest.xml` | 最近 10 篇（文章 + 说说混合，说说带 `「说说」` 前缀） |

页脚有 RSS 快捷链接，欢迎提示中也可一键复制 RSS 地址。

---

## 🌐 部署 / Deployment

### 部署到 Vercel（推荐）

项目内置 `@astrojs/vercel` adapter，一键部署：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 生产部署
vercel --prod
```

或在 Vercel Dashboard 中导入 GitHub 仓库，自动部署。

**Vercel 环境变量：**

| 变量 | 说明 |
|------|------|
| `GEMINI_API_KEY` | Gemini API Key（可选，用于 AI 功能） |
| `APP_URL` | 站点 URL |

### 部署到其他平台 / Other Platforms

项目为 `output: 'static'`，可部署到任何静态托管平台：

```bash
pnpm build
# 将 dist/ 目录部署到你的服务器
```

支持 adapter 切换（Node / Netlify / Cloudflare Pages 等），修改 `astro.config.mjs` 即可。

---

## 🧩 设计主题 / Design Theme

本博客使用 **Toy Brick Brutalism**（积木粗野主义）设计语言：

- **主色** `#0284c7`（天空蓝）— 边框、标题、强调
- **辅色** `#0ea5e9`（亮蓝）— 链接、悬停
- **强调色** `#fde68a`（黄色）— 标签、装饰块
- **背景** `#faf8f5`（米白）— 页面底色

所有组件使用 `border-4`、`shadow-[xpx_xpx_0px_0px_#color]` 的堆叠阴影效果，营造手绘积木的立体感。

---


## 🙏 致谢 / Acknowledgements

- [Astro](https://astro.build) — 静态站点框架
- [Tailwind CSS](https://tailwindcss.com) — 原子化 CSS
- [React](https://react.dev) & [Svelte](https://svelte.dev) — UI 框架
- [Waline](https://waline.js.org) — 评论系统
- [Fancybox](https://fancyapps.com) — 图片灯箱
- [KaTeX](https://katex.org) — 数学公式渲染
- [Umami](https://umami.is) — 网站统计
- [Lucide](https://lucide.dev) — 图标库
- [Motion](https://motion.dev) — 动画库
- 所有访问本站的朋友 ❤️
