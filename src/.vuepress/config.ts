import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {getDirname, path} from "@vuepress/utils";

// @ts-ignore
const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "JasonLee的个人技术分享 ",
  description: "JasonLee的个人技术分享",

  theme,
  alias: {
    "@theme-hope/modules/blog/components/SocialMedia": path.resolve(
        __dirname,
        "./components/SocialMedia.js",
    ),
    "@theme-hope/modules/blog/components/BloggerInfo": path.resolve(
        __dirname,
        "./components/BloggerInfo.js",
    ),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHead.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
