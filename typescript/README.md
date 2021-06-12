# 🎵 仿网易云音乐移动端网页【Next.JS 实现】

- SSG：Static Site Generation, 静态网站生成。【页面在 build time 生成】
- SSR：Server Side Rendering, 服务端渲染。【页面在 Each Request 时生成】
- CSR：Client Side Rendering, 客户端渲染。【页面在客户端生成】

## 🍓 预览

https://netease-music-app.vercel.app/

## 😯 技术

- UI 库：material-ui
- 数据请求：Axios/SWR
- 数据管理 React Hooks: useContext/useReducer
- 页面渲染：首页（SSG）、播放页面（CSR）、歌单详情（动态路由，SSG）

## 🏃 运行

1、clone

```git
git clone https://github.com/janyin/netease-music-app

cd netease-music-app
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
