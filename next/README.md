# 🎵 仿网易云音乐移动端网页【Next.JS实现】
- SSG：Static Site Generation, 静态网站生成。【页面在build time生成】
- SSR：Server Side Rendering, 服务端渲染。【页面在Each Request时生成】
- CSR：Client Side Rendering, 客户端渲染。【页面在客户端生成】
## 🍓 预览

## 😯 技术
- UI库：material-ui
- 数据请求：Axios/SWR
- 数据管理React Hooks: useContext/useReducer
- 页面渲染：首页（SSG）、播放页面（CSR）、歌单详情（动态路由，SSG）

## 🏃 运行

1、clone

```git
git clone https://github.com.cnpmjs.org/janyin/vue-music-app.git

cd vue-music-app
```

2、安装依赖

```git
cd next

yarn
```

3、本地运行

```git
yarn dev
```

4、打包

```git
yarn build
```

## ⬆️ 功能

- 推荐歌单
- 歌单详情
- 歌曲搜索
- 歌曲排行榜
