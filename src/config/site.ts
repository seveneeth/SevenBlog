/**
 * 站点基础配置
 * 包含站点名称、作者、URL、头像、社交账号、外部服务等
 */

export const siteConfig = {
  /** 站点标题（显示在导航栏和浏览器标题中） */
  title: "SevenBolg",
  /** 站点副标题（用 "/" 分隔多句，首页打字动画会轮流展示） */
  subtitle: "HI I AM Seven/ Seven AND YOU",
  /** 站点描述（用于 SEO 和社交分享） */
  description: "Seven's personal blog and portfolio",
  /** 作者名 */
  author: "Seven",
  /** 站点 URL（影响 Canonical、Sitemap、OG、RSS 等所有绝对链接） */
  url: "https://seveneeth.github.io/SevenBlog", // GitHub Pages URL
  /** 作者头像 URL（导航栏、关于页、AuthorCard 等处使用） */
  avatar: "",
  /** 作者签名/座右铭（显示在 AuthorCard 侧边栏） */
  signature: "一起加油！",

  /** 社交链接（AuthorCard、关于页、页脚等处使用） */
  socials: {
    github: "https://github.com/seveneeth/SevenBlog",
    /** GitHub 用户名（关于页拉取仓库列表用，大写） */
    githubUser: "IMUPXUU",
    bilibili: "https://space.bilibili.com/1721816127",
    /** Bilibili mid（关于页拉取视频列表用） */
    bilibiliMid: "1721816127",
    /** AuthorCard 上显示的 Bilibili 文字 */
    bilibiliDisplayName: "UPXUU",
    email: "2092396610@qq.com",
    /** 关于页额外社交链接 */
    wechat: "@seven",
    qq: "2092396610",
    /** QQ群链接（欢迎提示中使用） */
    /** 订阅链接（欢迎提示中的"订阅"按钮，指向 GitHub Issues 等） */
    subscribe: "https://github.com/seveneeth/SevenBlog/issues",
  },

  /** 评论系统配置 */
  waline: {
    /** Waline 服务端地址 */
    serverURL: '',
  },

  /** 图片 CDN / 默认封面 */
  assets: {
    /** 文章列表缺省封面图（为空时使用随机图） */
    defaultPostCover: "",
    /** 随机图服务地址（当文章无封面时 fallback 使用，返回 JSON 需解析 url 字段） */
    randomImage: "https://bing.biturl.top/",
    /** 站点 favicon 路径（相对站点根目录） */
    favicon: "/images/me.jpg",
  },

  /** 站点运行起始时间（页脚"已在互联网中航行"计时器用） */
  startTime: new Date(2026, 9, 18, 12, 20, 0),

  /** 外部链接安全配置 — 可信域名（点击这些域名的外链不弹确认框） */
  trustedDomains: [
    'github.com',
    'bilibili.com',
    'space.bilibili.com',
    'icp.gov.moe',
  ],
};

/**
 * 导航栏菜单项配置
 * - desktop: 桌面端导航栏直接显示的项
 * - mobileMore: 移动端汉堡菜单中的额外项
 * - external: 外链项（桌面端"更多"下拉 + 移动端汉堡菜单底部）
 */
export interface NavItem {
  /** 显示名称 */
  name: string;
  /** 链接路径（站内以 / 开头，外链以 http 开头） */
  href: string;
  /** 是否在新标签打开 */
  external?: boolean;
}

export const navConfig: {
  desktop: NavItem[];
  mobileMore: NavItem[];
  external: NavItem[];
} = {
  /** 桌面端导航栏主项 */
  desktop: [
    { name: "首页", href: "/" },
    { name: "说说", href: "/talks" },
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
    { name: "归档", href: "/posts" },
    { name: "标签", href: "/tags" },
    { name: "音乐", href: "/music" },
  ],
  /**
   * 移动端汉堡菜单中的额外项
   * 注意：NavBar.astro 用 mob[N] 硬编码下标取值，新增项只能追加到末尾，
   * 插在中间会让后面所有菜单项错位。
   */
  mobileMore: [
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
    { name: "归档页面", href: "/posts" },
    { name: "标签", href: "/tags" },
    { name: "音乐", href: "/music" },
    { name: "建站统计", href: "/blogstats" },
  ],
  /** 外部链接项（桌面端"更多"下拉 + 移动端汉堡菜单底部） */
  external: [
    { name: "开往", href: "https://www.travellings.cn/go.html", external: true },
    { name: "服务状态", href: "https://up.upxuu.com/status/1", external: true },
  ],

};

/**
 * 页脚配置
 */
export const footerConfig = {
  /** 版权文字 */
  copyrightText: "© 2026 Seven. All Rights Reserved. ",
  /** ICP 备案信息（留空则不显示） */
  icp: {
    
  },
  /** 页脚底部链接列表 */
  links: [
    { name: "友情链接", path: "/friends", external: false },
    { name: "RSS", path: "/rss.xml", external: true },
    { name: "Sitemap", path: "/sitemap.xml", external: true },
    { name: "隐私政策", path: "/privacy", external: false },
  ],
  /** 页脚开源仓库文字 */
  repoText: "本站已开源 ",
  /** 页脚开源仓库链接 */
  repoUrl: "https://github.com/seveneeth/SevenBlog",
  /** 页脚开源仓库显示名 */
  repoDisplayName: "SEVENEETH/SEVENBLOG",
};

/**
 * SEO 配置
 */
export const seoConfig = {
  /** 默认页面标题（无 title 时使用） */
  defaultTitle: "Seven's blog",
  /** 标题后缀（拼接到每个页面 title 之后） */
  titleTemplate: " - Seven's blog",
  /** 默认页面描述 */
  defaultDescription: "Seven 的个人博客，记录一位独立开发者的生活随笔、编程实践与技术思考。涵盖 Web 开发、Astro 建站、开源项目与日常感悟，用文字连接数字世界的每一份热爱。",
  /** 默认 OG 图片 URL */
  defaultImage: "https://upxuu.com/images/me.jpg",
  /** SEO 关键词 */
  keywords: ["Seven", "blog", "开发者", "生活", "学习", "技术分享", "seven的碎碎念"],
  /** Twitter Card 配置 */
  twitter: {
    card: "summary_large_image",
    site: "@seven",
    creator: "@seven",
  },
  /** DNS 预解析域名列表 */
  dnsPrefetch: [
    "//f.xxu6.top",
    ...(siteConfig.waline.serverURL
      ? ["//" + new URL(siteConfig.waline.serverURL).host]
      : []),
  ],
  /** 预连接资源列表 */
  preconnect: [
    { url: "https://f.xxu6.top", crossOrigin: "anonymous" },
    ...(siteConfig.waline.serverURL
      ? [{ url: siteConfig.waline.serverURL, crossOrigin: "anonymous" }]
      : []),
  ],
  /** robots meta 内容 */
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

/**
 * 页面横幅（PageBanner）配置
 */
export const bannerConfig = {
  /** Banner 主标题（一般等于站点标题） */
  title: "seven's blog",
  /** 背景网格图案透明度（0-1） */
  gridPatternOpacity: 0.12,
  /** 各页面类型的标签文字 */
  labels: {
    category: "Category",
    tag: "Tag",
    post: "POST",
    talk: "TALK",
  },
  /** 说说页打字动画内容 */
  talkTicker: {
    sequence: [
      "seven的碎碎念~",
      2500,
      "LIFE AND STUDY",
      2500,
    ],
  },
};

/**
 * 副标题打字动画配置（首页 Banner 左侧）
 */
export const subtitleConfig = {
  sequence: [
    "HI I AM SEVEN",
    2500,
    "SEVEN AND YOU",
    2500,
  ],
};

/**
 * 欢迎提示（WelcomeToast）配置
 */
export const welcomeConfig = {
  /** 是否启用欢迎提示 */
  enabled: true,
  /** 提示显示时长（毫秒） */
  duration: 5000,
  /** 天气 API 地址（用于显示访客位置和天气） */
  weatherApi: "https://uapis.cn/api/v1/misc/weather",
  /** 默认问候语（天气 API 失败时显示） */
  fallbackMessage: "Hi！远方的朋友",
  /** sessionStorage 键名（标记是否已展示过） */
  sessionKey: "xuhome_visit_flag",
  /** 提示中的快捷链接 */
  quickLinks: [
    { name: "订阅", href: siteConfig.socials.subscribe, color: "green" },
    { name: "RSS", href: "", action: "copyRss", color: "orange" },
  ],
};

/**
 * 内容相关配置（文章/说说）
 */
export const contentConfig = {
  /** 文章列表每页数量 */
  postsPerPage: 10,
  /** 阅读速度（字/分钟，用于计算预计阅读时间） */
  readingSpeed: 400,
  /** 文章版权许可信息 */
  license: {
    /** 许可协议名称 */
    name: "All Rights Reserved",
    /** 许可协议链接 */
    url: "/about",
  },
};

/**
 * 关于页面配置
 */
export const aboutConfig = {
  /** 关于页浏览器标题 */
  title: "关于我",
  /** 关于页 SEO 描述 */
  description: "Seven的个人介绍、独立开发者履历与前端技术栈栈架构建。",
  /** 角色标签 */
  role: "前端开发者 / 独立创作者",
  /** 简介文字（{author} 会被替换为 siteConfig.author） */
  intro: `你好，世界！我是 ${siteConfig.author}，个名大二学生\n目前专注于学习前端 Python和ai相关技术，立志成为ai时代的全栈工程师,加油！`,
  /** 技能标签列表 */
  skills: [
    "React", "HTML", "Node.js",  "CSS","Python",
    "Next.js",, "Vite", "Git", "AI",
  ],
  /** GitHub 介绍文字 */
  githubBio: "HI I am Seven. A developer, student, simple people from JiangXi, China.",
  /** Bilibili 板块标题 */
  bilibiliTitle: "MY bilibili @SEVEN",
  /** GitHub 仓库链接（关于页"找到我"区块） */
  githubLink: "https://github.com/seveneeth",
  /** GitHub 显示文字 */
  githubValue: "@seveneeth\nseven",
  /** 邮箱显示文字 */
  emailValue: "ME@QQ.COM",
  /** 邮箱链接 */
  emailLink: "mailto:ME@QQ.COM",
  /** 微信显示文字 */
  wechatValue: "@seven",
  /** QQ 显示文字 */
  qqValue: "2092396610",
  /** GitHub Socials 区块的邮箱链接 */
};

/**
 * 全站文案配置（i18n）
 * 所有页面中的固定文字都从这里读取，方便修改和未来国际化
 */
export const i18nConfig = {
  /** 404 页面 */
  notFound: {
    title: "页面未找到",
    bigText: "404",
    message: "这个页面好像不见了",
    backHome: "回到首页",
    browseArchive: "浏览归档",
  },
  /** 归档页面 */
  archive: {
    title: "文章归档",
    description: "博客文章时间轴归档",
    timelineTitle: "时间轴",
    emptyText: "暂无文章归档",
    emptySubtext: "还没有发布任何文章",
    /** 区块标题（Layout 中显示的栏目名，可与页面 title 不同） */
    sectionTitle: "归档",
  },
  /** 首页 */
  home: {
    /** 首页浏览器标题（传给 Layout 的 title） */
    title: "Seven的博客",
    /** 首页 SEO 描述 */
    description: "Seven 的个人博客，分享 Web 开发、Astro 建站与开源项目实践的技术文章，以及大二学生的日常随笔与生活思考。原创内容覆盖前端开发、Vite 生态、AI 应用和平时生活分享，适合开发者与年轻创作者阅读。",
    /** 首页文章列表区块标题 */
    sectionTitle: "最新文章",
  },
  /** 说说页 */
  talks: {
    /** 说说页浏览器标题 */
    title: "说说",
    /** 说说页区块标题 */
    sectionTitle: "说说",
    /** 说说列表页 SEO 描述 */
    description: "Seven 的说说微动态——生活碎碎念、随手记录与日常分享。",
  },
  /** 说说详情页 */
  talk: {
    /** 说说详情页标题缺失时的回退文案 */
    detailFallbackTitle: "说说详情",
  },
  /** 分类页 */
  category: {
    /** 分类页标题后缀（拼在分类名后） */
    titleSuffix: " 分类",
    /** 分类页描述模板（{name} 会被替换为分类名） */
    descriptionTemplate: "{name} 分类下的全部文章 - Seven的个人博客",
  },
  /** 标签页 */
  tag: {
    /** 标签页标题后缀（拼在标签名后） */
    titleSuffix: " 标签",
    /** 标签页描述模板（{name} 会被替换为标签名） */
    descriptionTemplate: "标签 {name} 下的全部文章 - Seven的个人博客",
  },
  /** 友链页面 */
  friends: {
    title: "友情链接",
    description: "Seven的友情链接，汇集各路神仙的有趣博客、个人小站。",
  },
  /** 隐私政策页面 */
  privacy: {
    title: "隐私政策",
    description: "Seven 博客的隐私政策——我们如何收集、使用和保护你的个人信息。",
    lastUpdated: "2026 年 9 月 128日",
    effectiveDate: "2026 年 9 月 18 日",
    contactEmail: "me@Seven.com",
  },
  /** 统计页面 */
  stats: {
    title: "网站统计",
  },
  /** 文章详情页 */
  post: {
    readingTime: "预计阅读",
    readingTimeUnit: "分钟",
    copyrightTitle: "作者",
    publishedTitle: "发布于",
    licenseTitle: "许可协议",
    relatedPosts: "相关文章",
    prevPost: "上一篇",
    nextPost: "下一篇",
    noMorePrev: "没有更多上一篇了",
    noMoreNext: "没有更多下一篇了",
    tocTitle: "目录",
    tocEmpty: "无目录",
    /** 移动端浮动目录按钮的 aria-label */
    viewToc: "查看目录",
  },
  /** 搜索 */
  search: {
    placeholder: "搜索文章标题、简述、内容或标签...",
    clear: "清除",
    noResults: "哎呀，没有找到文章",
    jumpTo: "跳转...",
    go: "GO",
  },
  /** 通用 */
  common: {
    darkMode: "暗色",
    lightMode: "亮色",
    more: "更多",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleDarkMode: "切换暗色模式",
  },
};
