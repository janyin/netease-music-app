import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import Comment from '../components/comment'
import { ActionTypes, useDispatchPlayer, usePlayer } from '../context/music'

/**
 * 播放页面
 */
function Player() {
  const playerInfo = usePlayer()
  const router: NextRouter = useRouter()
  const dispatch = useDispatchPlayer()

  useEffect(() => {
    if (!playerInfo || !playerInfo.musicInfo) {
      router.back()
    }
  }, [playerInfo])

  if (!playerInfo || !playerInfo.musicInfo) {
    return null
  }

  const {
    musicInfo: { title, artists, imgUrl, comment },
    playerStatus,
  } = playerInfo

  const changeStatus = () => {
    dispatch({
      type: ActionTypes.SET_STATUS,
      payload: !playerStatus,
    })
  }

  return (
    <>
      <div>
        <div
          className="song_bg"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="wrapper">
          <div className="player_getBack" onClick={() => router.back()}>
            <h3>返回</h3>
          </div>
          <div className="icon_rotate" onClick={changeStatus}>
            <div className="needle" />
            <div className="icon_center">
              <div className="song_img">
                <div
                  className={`default_img rotateDiv ${
                    !playerStatus && 'noRotate'
                  }`}
                >
                  <Image src={imgUrl} width={212} height={212} alt="pic" />
                </div>
              </div>
            </div>
            {!playerStatus && <span className="play_btn" />}
          </div>
          <div className="song_info">
            <p className="song_title">
              {title} —{artists}
            </p>
          </div>
          <div className="comment_wrap">
            <p>{comment?.length > 0 ? '热门评论' : '暂无评论'}</p>
            {comment?.map((val, index) => (
              <Comment key={val.username + index} data={val} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .rotateDiv {
            animation: rotate 16s linear infinite;
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(359deg);
            }
          }

          .noRotate {
            animation-play-state: paused;
          }

          .link_comment {
            position: fixed;
            left: 25%;
            bottom: 3vw;
            width: 50%;
            height: 30px;
            border: 1px solid #ff3a3a;
            border-radius: 40px;
            font-size: 16px;
            text-align: center;
            background: #ff3a3a;
            color: #fff;
            line-height: 30px;
          }

          .lrc_item {
            padding-bottom: 8px;
          }

          .lrc_content {
            font-size: 16px;
            line-height: 1.5;
            overflow: hidden;
            text-align: center;
            color: hsla(0, 0%, 100%, 0.6);
          }

          .lrc_wrapper {
            position: relative;
            height: 40vw;
            margin-top: 14px;
            overflow: hidden;
          }

          .song_title {
            text-align: center;
            font-size: 18px;
            line-height: 1.1;
            color: #fefefe;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .song_info {
            margin-top: 25px;
            padding: 0 35px;
          }

          .play_btn {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 65px;
            height: 65px;
            background-image: url('/play_btn.png');
            background-size: contain;
            transform: translate(-50%, -50%);
            z-index: 10;
          }

          .default_img img {
            width: 100%;
          }

          .default_img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            background: url('/disc_default.png') no-repeat;
            background-size: contain;
          }

          .song_img {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 212px;
            height: 212px;
            margin: -106px 0 0 -106px;
            z-index: 1;
          }

          .icon_center {
            width: 100%;
            height: 100%;
          }

          .icon_center::before {
            content: ' ';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1;
            background: url('/disc_plus.png') no-repeat;
            background-size: contain;
          }

          .wrapper {
            z-index: 1;
            position: relative;
            width: 100vw;
            padding-top: 80px;
            box-sizing: border-box;
          }

          .icon_rotate {
            position: relative;
            margin: 0 auto;
            height: 342px;
            width: 342px;
          }

          .needle {
            position: absolute;
            width: 110px;
            height: 157px;
            top: -80px;
            left: 150px;
            background: url('/needle_plus.png') no-repeat;
            background-size: contain;
            z-index: 2;
          }

          .song_bg {
            background-color: #161824;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: auto 100%;
            transform: scale(1.2);
            transform-origin: center;
            filter: blur(2px);
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            animation: bgchange 50s linear infinite;
          }

          @keyframes bgchange {
            from {
              background-position: 0%;
            }

            to {
              background-position: 100%;
            }
          }

          .song_bg::before {
            content: ' ';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .active_lrc {
            color: #eb1206;
            font-weight: 600;
            font-size: 18px;
          }

          .player_getBack {
            position: absolute;
            top: 3vw;
            left: 3vw;
            color: #fff;
            padding-left: 13px;
            margin-bottom: 10px;
            cursor: pointer;
          }

          .player_getBack h3 {
            padding-top: 0.2vw;
            margin: 0;
          }

          .player_getBack:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            border: solid #fff;
            border-width: 3px 0 0 3px;
            -webkit-transform: rotate(315deg);
            transform: rotate(315deg);
            top: 7px;
            left: 0;
          }
          .comment_wrap {
            margin: 10vw 0;
            padding: 0 1vw;
          }
          .comment_wrap p {
            margin: 3vw 0;
            font-size: 18px;
            color: #fff;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Player
