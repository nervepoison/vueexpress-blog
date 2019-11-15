module.exports = {
  title: "EricTalk",
  description: "种一棵树最好的时间是十年前，其次，是现在。",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
          { text: ".Net", link: "/dotnet/" },
          { text: "Web", link: "/web/" }
        ]
      },
      { text: "关于", link: "/resume/" },
      { text: "Github", link: "https://www.github.com/Caoyt688" }
    ],
    // sidebar: {
    //   "/dotnet/": ["hello", "dotnet1"],
    //   "/web/": ["hello", "web1"]
    // },
    // sidebarDepth: 2,
    // lastUpdated: "Last Updated",

    
  },
  //pwa
  serviceWorker: true,
  markdown: {
    lineNumbers: true, // 代码块显示行号
    
  },
};
