# 基于vue的网易云音乐移动端web app

* 项目技术都比较简单，适合新手拿来练手的入门级Vue开发实战项目;
* 主要功能有：推荐歌单、搜索歌曲、歌词滚动等;

> 网易云音乐移动官网是使用React构建的, 虽然音乐播放器烂大街了，但心血来潮还是写了一个Vue版本,界面看起来和官网没多大差别;  
>[API来源][2]

## 在线预览效果

* PC端请使用Chrome手机模式;手机扫码;

 > ![二维码](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/qrcode.png)
 
 ---
 > [PC端点我预览][1]

## 用到的部分技术

* 构建工具：Vue cli3;
* 框架：Vue + Vue router + Vuex;
* http请求：axios;
* 歌词滚动：better-scroll;
* 部分UI组件：Vux;

## 运行此项目
  
  ```git
  git clone https://github.com/janyin/vue-wangyiyun-music.git
  
  cd vue-wangyiyun-music
  
  npm install
  
  npm run serve (开发编译)

  npm run build (打包发布)
  ```

## 效果截图

>![首页](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/1.png)

>![播放](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/2.png)

>![评论](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/3.png)

>![歌单](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/4.png)

[1]: http://music.wanegbt.cn/
[2]: https://binaryify.github.io/NeteaseCloudMusicApi
