import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      hotWord:[],
      top:[
          {
              title:'可不可以',
              detail:'张子豪 - 可不可以',
              rank:'01'
          },
          {
              title:'盗将行',
              detail:'花粥 / 马雨阳 - 粥请客（二）',
              rank:'02'
          },
          {
              title:'年少有为',
              detail:'李荣浩 - 年少有为',
              rank:'03'
          },
          {
              title:'不染(《香蜜沉沉烬如霜》主题曲)',
              detail:'毛不易 - 香蜜沉沉烬如霜 电视剧原声音乐专辑',
              rank:'04'
          },
          {
              title:'去年夏天',
              detail:'王大毛 - 去年夏天',
              rank:'05'
          },
          {
              title:'一百万给可能',
              detail:'Chnistine Welch - 一百万给可能',
              rank:'06'
          },
          {
              title:'Way Back Home',
              detail:'SHAUN - Take',
              rank:'07'
          },
          {
              title:'飘向北方(live)',
              detail:'尤长靖 / 那吾克热LIL-EM - 中国新说唱 第10期',
              rank:'08'
          },
          {
              title:'往后余生',
              detail:'王贰浪 - 往后余生',
              rank:'09'
          },
          {
              title:'目不转睛',
              detail:'王以太 - Feel & Sight',
              rank:'10'
          },
          {
              title:'可能否',
              detail:'木小雅 - 可能否',
              rank:'11'
          },
          {
              title:'陷阱',
              detail:'王北车 - 陷阱',
              rank:'12'
          }
      ],
      last:[
          {
              title:'一江水(《天坑鹰猎》概念主题曲)',
              detail:'毛不易 - 超级剧集 天坑鹰猎 电视原声带'
          },
          {
              title:'Shallow',
              detail:'Lady Gaga / Bradley Cooper - Shallow'
          },
          {
              title:'孔雀',
              detail:'吉克隽逸 - Garden花园'
          },
          {
              title:'Diamond Heart',
              detail:'Alan Walker / Sophia Somajo - Diamond Heart'
          },
          {
              title:'Head Above Water',
              detail:'Avril Lavigne - Head Above Water'
          },
          {
              title:'考虑到可能再也见不到你',
              detail:'徐良 - 考虑到可能再也见不到你'
          },
          {
              title:'I Don\'t Know',
              detail:'Paul McCartney - Egypt Station'
          },
          {
              title:'可一可再',
              detail:'陈奕迅 / eason and the duo band - 可一可再'
          },
          {
              title:'盗火',
              detail:'汪苏泷 - 克制凶猛'
          }
      ]
  },
  mutations: {

  },
  actions: {

  }
})
