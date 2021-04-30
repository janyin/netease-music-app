# 基于 vue 的网易云音乐移动端 web app
- VScode在线预览代码：https://github1s.com/janyin/vue-music-app
- React 版本：https://github.com/janyin/react-music-app
- 项目技术都比较简单，适合新手拿来练手的入门级 Vue 开发实战项目;
- 主要功能有：推荐歌单、搜索歌曲、歌词滚动等;
- [API 来源][2]

## 预览效果

- PC 端请使用 Chrome 手机模式[点我在线预览][1];

- <strong>如果喜欢可以右上角给个 ⭐Star⭐, 谢谢！</strong>

## 技术栈

- 构建工具：Vue cli3;
- 框架：Vue + Vue router + Vuex;
- http 请求：axios;
- 歌词滚动：better-scroll;
- 部分 UI 组件：Vux;

## 运行此项目

- 使用 GitHub 镜像地址：https://github.com.cnpmjs.org 下载更快

```git
git clone https://github.com.cnpmjs.org/janyin/vue-music-app.git

cd vue-music-app

npm install

npm run serve (开发编译)

npm run build (打包发布)
```

## 效果截图

- ![index](https://i.loli.net/2021/02/03/Pm8Vv5iXaOrM6y9.png)

## 项目目录

<details>
<summary>展开查看</summary>
<pre><code>

│ App.vue //根组件
│ main.js //项目入口
│ router.js //vue router 路由配置
│
├─api  
│ getData.js // Api 数据请求参数配置
│
├─assets // 静态资源
│ disc_default.png
│ disc_plus.png
│ find.svg
│ foot.svg
│ footbg.png
│ hot_bg.jpg
│ hot_icon.png
│ like.svg
│ logo.svg
│ needle_plus.png
│ playbar.png
│ play_btn.png
│
├─components //组件目录
│ │ comment.vue //单个评论组件
│ │ header.vue //首页头部
│ │ miniPlayer.vue //底部迷你播放器
│ │ song.vue //单个歌曲组件
│ │  
│ ├─indexTab //index 选项卡
│ │ footer.vue //index 底部
│ │ index.vue //index 选项卡组件入口
│ │ recommendList.vue //推荐歌单组件
│ │
│ ├─rankTab //排行榜选项卡
│ │ index.vue //排行榜组件
│ │  
│ └─searchTab //搜索选项卡
│ index.vue //搜索选项卡组件入口
│ trending.vue //热门搜索词组件
│
├─page //页面目录
│ home.vue //主页
│ player.vue //播放页面
│ playList.vue //歌单页面
│
├─store //Vuex
│ actions.js
│ getters.js
│ index.js
│ mutations.js
│ state.js
│
├─styles //css 目录
│ comment.css
│ player.css
│ playlist_page.css
│ remd_list.css
│ song_item.css
│
└─utils //公用 JS 目录
global.js //图片懒加载配置
lrcparse.js //歌词数据解析

</code></pre>

</details>

[1]: https://vue-wangyiyun-music.now.sh/#/
[2]: https://binaryify.github.io/NeteaseCloudMusicApi
