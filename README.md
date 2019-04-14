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
├─api              
│      common.js   //设置请求地址具体url
│      config.js  //api配置相关
│      
├─assets         //静态图片
│      find.svg
│      hot_bg.jpg
│      hot_icon.png
│      play.png
│      
├─components
│  │  Player.vue      //播放功能
│  │  SearchHot.vue   //搜索热词
│  │  Song.vue        //歌曲信息
│  │  SongList.vue    //歌单信息
│  │  
│  ├─Footer  //主页的底部UI
│  │      foot.svg
│  │      Foot.vue
│  │      footbg.png
│  │      
│  ├─Tabs   //三大Tab页面,主页/排行榜/搜索
│  │      Home.vue
│  │      Rank.vue
│  │      Search.vue
│  │      
│  └─Top    //主页的头部UI
│          logo.svg
│          Top.vue
│          
├─store     //vuex
│      actions.js
│      getters.js
│      index.js
│      mutation-types.js
│      mutations.js
│      state.js
│      
├─style     //css配置
│      foot.css
│      list.css
│      playlist.css
│      song.css
│      top.css
│      words.css
│      
└─views      //路由配置，两个页面，主布局页面/歌单页面
        mainLayOut.vue
        PlayList.vue
```

