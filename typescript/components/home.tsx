import { NewSongResult, RemdResult } from '../types/index'
import Footer from './footer'
import RemdList from './recommend'
import Song from './song'

interface Props {
  remd: RemdResult
  newSong: NewSongResult
}

/**
 * 首屏
 */
function Home({ remd, newSong }: Props) {
  return (
    <div className="content">
      <h2 className="remd">推荐歌单</h2>
      <div className="list">
        {remd.slice(0, 3).map((value) => (
          <RemdList {...value} key={value.id} />
        ))}
      </div>
      <div className="list">
        {remd.slice(3, 6).map((value) => (
          <RemdList {...value} key={value.id} />
        ))}
      </div>
      <h2 className="remd">最新音乐</h2>
      <section>
        {newSong.map((value) => (
          <Song data={value} key={value.id} />
        ))}
      </section>
      <Footer />
      <style jsx>
        {`
          .content {
            background-color: #fff;
          }
          .remd {
            display: block;
            position: relative;
            padding-left: 9px;
            margin-bottom: 14px;
            font-size: 17px;
            font-weight: 400;
            height: 20px;
            line-height: 20px;
          }
          .remd:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -9px;
            width: 2px;
            height: 16px;
            background-color: #d33a31;
          }
          .list:after {
            display: block;
            visibility: hidden;
            clear: both;
            height: 0;
            overflow: hidden;
            content: '.';
          }
        `}
      </style>
    </div>
  )
}

export default Home
