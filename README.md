# 网易云音乐web app

   > 如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！
  
  使用vue cli3构建的SPA移动端网页,有搜索、播放、和歌单功能 <br>
  api来源：https://github.com/Binaryify/NeteaseCloudMusicApi <br>
  整体UI就是网易云音乐官网的，播放就一个组件没写单独页面，用的是原生的H5<audio>
## 技术栈：
  vue+vue-router+vuex+axios;部分UI用到vux
## 运行此项目：
  
  ```
  git clone https://github.com/janyin/vue-wangyiyun-music.git
  
  cd vue-wangyiyun-music
  
  npm install
  
  npm run serve (开发编译)

  npm run build (打包发布)
  ```

## 在线预览
url:http://music.liujiangdu.top  <br>
PC端推荐在chrome调试模式下预览 <br>
手机端直接点击链接 <br>


## 网页效果截图
首页：
![](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/index.jpg)
歌单：
![](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/songlist.jpg) <br><br><br><br>
播放：
![](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/play.jpg)
搜索：
![](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/serach.jpg)

##  源码解析
src目录解析：

```
│  App.vue
│  main.js
│  router.js
│
├─api //api配置文件夹
│      common.js
│      config.js
│
├─assets //静态图片资源
│      find.svg
│      hot_bg.jpg
│      hot_icon.png
│      play.png
│
├─components
│  ├─HomeBottom //主页底部组件
│  │      foot.svg
│  │      footbg.png
│  │      index.vue
│  │
│  ├─HomeTop //主页头部组件
│  │      index.vue
│  │      logo.svg
│  │
│  ├─HotWord //热门搜索词
│  │      index.vue
│  │
│  ├─MusicPlayer //播放器组件
│  │      index.vue
│  │
│  ├─RecommendList //推荐歌单
│  │      index.vue
│  │
│  ├─SongItem //歌曲组件
│  │      index.vue
│  │
│  ├─TabIndex //tab的首页
│  │      index.vue
│  │
│  ├─TabRank //tab的排行榜页
│  │      index.vue
│  │
│  └─TabSearch //tab的搜索页
│          index.vue
│
├─store //vuex
│      actions.js
│      getters.js
│      index.js
│      mutation-types.js
│      mutations.js
│      state.js
│
├─styles
│      playlist_page.css
│      remd_list.css
│      song_item.css
│
└─views
        HomePage.vue  //主界面
        PlayListPage.vue //歌单页
```

