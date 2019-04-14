<template>
  <div class="foot">
    <div class="foot-wrapper">
      <div class="foot-logo">
        <img src="./foot.svg" alt="logo" class="logosvg">
      </div>
      <div class="openapp">打开APP，发现更多好音乐</div>
      <p class="copyright">前端小江模仿网站 仅供学习交流</p>
    </div>
  </div>
</template>

<style scoped>
.copyright{
    color: #888;
    font-size: 12px;
    line-height: 16px;
    transform: scale(.75);
}
.openapp{
    line-height: 38px;
    border: 1px solid #d33a31;
    border-radius: 38px;
    font-size: 16px;
    color: #d33a31;
    margin: 15px 37px 5px;
    cursor: pointer;
}
.logosvg{
    display: block;
    margin: 0 auto;
    width: 230px;
    height: 44px;
}
.foot-logo{
    padding-top: 12%;
}
.foot{
    position: relative;
    padding-top: 53.3%;
    margin-top: 4px;
    background: url("./footbg.png") no-repeat;
    background-size: contain;
}
.foot-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    text-align: center;
}
</style>
