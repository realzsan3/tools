const TOOLS_CONFIG = {

  // ── 页面基础配置 ──────────────────────────────
  page: {
    title:    "实用小工具",
    subtitle: "用完就走",
    owner:    "zsan",
    back:     "https://919333.xyz",
    github:   "https://github.com/realzsan3",   // ← 替换成你的 GitHub 主页
  },

  // ── 工具列表 ──────────────────────────────────
  // 新增工具只在这里加一个对象即可，页面自动渲染
  // status 可选值：'可用' | 'demo' | '开发中'
  tools: [
    {
      name:   "PDF 加水印",
      desc:   "本地处理数据，不上传，保护隐私",
      url:    "https://pdfwm.111533.xyz",  // ← 替换成真实 URL
      emoji:  "📄",
      tag:    "文件处理",
      status: "可用",
    },
    {
      name:   "财务自由/养老提款计算器",
      desc:   "本地",
      url:    "https://firegrid.919333.xyz",  // ← 替换成真实 URL
      emoji:  "💰",
      tag:    "理财",
      status: "demo",
    },
    {
      name:   "记忆助手",
      desc:   "借助AI提高记忆",
      url:    "https://mq.111533.xyz",  // ← 替换成真实 URL
      emoji:  "🧠",
      tag:    "学习",
      status: "可用",
    },
  ],

  // ── 筛选器配置 ────────────────────────────────
  // 工具数量超过此值时，tag 筛选器自动显示
  filterMinCount: 7,

};
