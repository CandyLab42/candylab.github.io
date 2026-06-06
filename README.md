# CandyLab 课题组官方网站

北京航空航天大学 CandyLab 官方主页，基于 Next.js 16 + TypeScript + Tailwind CSS v4 构建的极简学术风格静态网站。

## 技术栈

- **Next.js 16** (App Router, SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — 页面入场与微交互动画

## 本地开发

```bash
npm install
npm run dev       # http://localhost:3000
```

## 构建与部署

```bash
npm run build     # 生成静态文件到 .next/
```

推送到 `main` 分支后由 GitHub Actions 自动部署至 GitHub Pages。

## 项目结构

```text
app/
  layout.tsx          # SEO metadata、全局字体
  page.tsx            # 单页入口，管理 EN/ZH 语言状态
  globals.css         # 设计 token（北航蓝 #003087、字体、间距）
components/
  Navbar.tsx          # 固定顶栏，滚动毛玻璃，中英文切换
  Hero.tsx            # 全屏首页，统计数据行
  Research.tsx        # 4 个研究方向卡片
  Publications.tsx    # 代表性论文列表
  Members.tsx         # PI + 师资成员网格
  News.tsx            # 最新动态时间线
  Join.tsx            # 招募板块
  Footer.tsx          # 页脚导航与版权
lib/
  data.ts             # 所有内容的唯一数据源（双语）
```

## 内容更新

所有网站内容（成员信息、论文、新闻、研究方向）集中维护在 `lib/data.ts`，修改后重新构建即可生效。

成员头像图片放置于 `public/avatars/<slug>.jpg`，在 `lib/data.ts` 的 `avatar` 字段填写文件名后即可显示。
