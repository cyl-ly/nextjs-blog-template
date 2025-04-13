export const config = {
  site: {
    title: "Keep Moving",
    name: "Keep Moving",
    description: "Keep Moving",
    keywords: ["AI", "Full Stack Developer"],
    url: "https://nextjs-blog-template-six-phi.vercel.app",
    baseUrl: "https://nextjs-blog-template-six-phi.vercel.app",
    image: "https://nextjs-blog-template-six-phi.vercel.app/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Nextjs Blog Template",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Xiaochai",
    email: "ucascyl@gmail.com",
    bio: "多读书多看报，少吃零食多睡觉",
  },
  social: {
    github: "https://github.com/cyl-ly",
    x: "https://x.com/xxx",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/xxx",
    wechat: "https://storage.xxx.com/images/wechat-official-account.png",
    buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "guangzhengli/hugo-ladder-exampleSite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://nextjs-blog-template-six-phi.vercel.app"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
