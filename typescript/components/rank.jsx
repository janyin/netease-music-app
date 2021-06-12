import * as PARSE from '../utils/index'
import Song from './song'

/**
 * 排行榜
 */
function Rank({ rank }) {
  const data = PARSE.rank(rank)
  return (
    <div>
      <div className="hot_top">
        <div className="hot_flex">
          <div className="hot_icon" />
          <div className="hot_time">
            更新日期：
            {PARSE.getTime()}
          </div>
        </div>
      </div>
      <section className="ranklist">
        {data.map((value) => (
          <Song data={value} key={value.id} />
        ))}
      </section>
      <style jsx>
        {`
          .hot_time {
            text-align: left;
            margin-top: 10px;
            color: hsla(0, 0%, 100%, 0.8);
            font-size: 12px;
            transform: scale(0.91);
            transform-origin: left top;
          }
          .hot_icon {
            width: 142px;
            height: 67px;
            background-image: url('/hot_icon.png');
            background-position: -24px -30px;
            background-size: 166px 97px;
          }
          .hot_flex {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
            padding-left: 20px;
            box-sizing: border-box;
          }
          .hot_top {
            position: relative;
            padding-top: 38.9%;
            overflow: hidden;
            background: url('/hot_bg.jpg') no-repeat;
            background-size: contain;
          }
          .hot_top:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .ranklist {
            padding-bottom: 68px;
          }
        `}
      </style>
    </div>
  )
}

export default Rank
