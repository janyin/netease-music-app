# 基于vue的网易云音乐移动端web app

* 项目技术都比较简单，适合新手拿来练手的入门级Vue开发实战项目;
* 主要功能有：推荐歌单、搜索歌曲、歌词滚动等;

> 网易云音乐移动官网是使用React构建的, 虽然音乐播放器烂大街了，但心血来潮还是写了一个Vue版本,界面看起来和官网没多大差别;  
>[API来源][7]

## 在线预览效果

* PC端请使用Chrome手机模式;手机扫码;

 > [二维码][1]
 ---
 > [PC端点我预览][2]

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

>[首页][3]
>[播放][4]
>[评论][5]
>[歌单][6]

[1]: https://github.com/janyin/vue-wangyiyun-music/screenshot/qrcode.png
[2]: http://music.wanegbt.cn/
[3]: https://github.com/janyin/vue-wangyiyun-music/screenshot/1.png
[4]: https://github.com/janyin/vue-wangyiyun-music/screenshot/2.png
[5]: https://github.com/janyin/vue-wangyiyun-music/screenshot/3.png
[6]: https://github.com/janyin/vue-wangyiyun-music/screenshot/4.png
[7]: https://binaryify.github.io/NeteaseCloudMusicApi
