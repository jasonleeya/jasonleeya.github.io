# 使用VuePress搭建个人网站

作为一个和Vue打了几年交道的前端程序员，个人网站自然也得是用Vue搭建，于是选择了VuePress静态网站生成器进行搭建，还是熟悉的味道，配合白嫖的静态网站托管服务，不用后端服务，不用云服务器，巴适。VuePress是一个基于Vue.js的静态网站生成器，它简单易用，使用Markdown生成文章，同时具有强大的灵活性和扩展性。本文将介绍使用VuePress搭建网站的简单步骤，让你可以轻松打造出专属的个人或团队站点

## 步骤1：使用Markdown作为主要的文档编写

VuePress是基于Node.js的，首先确保你的电脑上安装了Node.js。你可以在Node.js官网下载并安装最新版本。

## 步骤2：创建VuePress项目

打开终端，进入你想要创建项目的目录，运行以下命令：
```bash
npx create-vuepress my-website
```
这将会创建一个名为my-website的VuePress项目。

## 步骤3：进入项目目录

```bash
cd my-website
```

## 步骤4：编辑配置文件

VuePress的配置文件是.vuepress/config.js，你可以使用任何文本编辑器打开并进行编辑。这里你可以设置网站的标题、描述、主题等信息。一个简单的例子如下：
```javascript
module.exports = {
  title: '我的网站',
  description: '这是我的网站描述',
  themeConfig: {
    navbar: false, // 禁用导航栏
    sidebar: 'auto' // 自动生成侧边栏
  }
}
```

## 步骤5：创建页面

在VuePress中，页面存放在.vuepress目录下的docs文件夹中。你可以在docs文件夹下创建Markdown文件（例如README.md），这将成为网站的首页。你还可以在docs下创建其他的Markdown文件，它们会成为网站的其他页面。

## 步骤6：启动本地服务器

```bash
npm run docs:dev
```
然后访问http://localhost:8080/，你将看到你的VuePress网站。

## 步骤7：构建静态文件

当你完成了网站的开发，可以运行以下命令来生成静态文件：
```bash
npm run docs:build
```
生成的文件将会保存在.vuepress/dist目录下，你可以将这个目录下的文件部署到任何静态文件服务器上，如Netlify、GitHub Pages等。

## 总结
通过这几个简单的步骤，你已经成功地使用VuePress搭建了一个静态网站。当然，VuePress还有更多的高级特性和插件可供探索，你可以根据自己的需求进一步定制和扩展你的网站。希望你能享受使用VuePress构建个性化网站的过程！

