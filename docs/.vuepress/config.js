module.exports = {
  title: "EricTalk",
  description: "种一棵树最好的时间是十年前，其次，是现在。",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "系列博文", link: "/series/" },
      { text: "技术随笔", link: "/essay/" },
      { text: "关于", link: "/resume/" },
      { text: "Github", link: "https://www.github.com/Caoyt688" }
    ],
    sidebar: {
      "/series/": getSeriesSidebar("dotnet","web"),
      "/essay/": ["test", "test1"]
    },
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  },
  //pwa
  serviceWorker: true,
  markdown: {
    lineNumbers: true // 代码块显示行号
  }
};

function getSeriesSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "hello",
        // "directory-structure",
        // "basic-config",
        // "assets",
        // "markdown",
        // "using-vue",
        // "i18n",
        // "deploy"
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        "hello",
        // "permalinks",
        // "markdown-slot",
        // "global-computed"
      ]
    }
  ];
}
