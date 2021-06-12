import { useRouter } from 'next/router'
import * as API from '../apis/config'
import { ActionTypes, useDispatchPlayer } from '../context/music'
import { CommentResponse } from '../types/index'
import * as PARSE from '../utils/index'

interface Props {
  data: {
    title: string
    alias: string
    artists: string
    album: string
    rank?: boolean
    color?: boolean
    id: string
  }
}

/**
 * 歌曲组件
 */
function Song({ data }: Props) {
  const { title, alias, artists, album, rank = false, color = false, id } = data
  const dispatch = useDispatchPlayer()
  const route = useRouter()

  const playMusic = async () => {
    dispatch({
      type: ActionTypes.SET_LOADING,
      payload: true,
    })
    try {
      const { success } = (await API.checkMusic(id)) as { success: boolean }
      if (success) {
        const resData = (await Promise.all([
          API.getMusicUrl(id),
          API.getComment(id),
          API.getMusicDetail(id),
        ])) as Array<{
          data: { url: string }[]
          songs: any[]
          hotComments: CommentResponse
        }>

        if (!Array.isArray(resData)) {
          return
        }
        const musicUrl = resData[0]?.data[0]?.url
        const imgUrl = resData[2]?.songs[0]?.al?.picUrl

        if (!musicUrl) {
          dispatch({
            type: ActionTypes.SET_TOAST,
            payload: '该歌曲无法播放',
          })
          return
        }
        dispatch({
          type: ActionTypes.SET_PLAYER_INFO,
          payload: {
            id,
            musicUrl,
            imgUrl,
            artists,
            title,
            comment: PARSE.comment(resData[1]?.hotComments),
          },
        })

        route.push('/player')
      } else {
        dispatch({
          type: ActionTypes.SET_TOAST,
          payload: '该歌曲无法播放',
        })
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_TOAST,
        payload: '该歌曲无法播放',
      })
    }
  }
  return (
    <>
      <div className="song" onClick={playMusic}>
        {rank && (
          <div className={`song_num ${color && 'highlight'}`}>{rank}</div>
        )}
        <div className="song_wrapper">
          <div className="song_info">
            <div className="song_title">
              {title}
              {alias && <span>({alias})</span>}
            </div>
            <div className="song_detail">
              <i className="sq" />
              {artists} -{album}
            </div>
          </div>
          <div className="song_play">
            <span className="play_icon" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .song {
            display: flex;
            padding-left: 10px;
            color: #333;
          }
          .song_num {
            color: #999;
            align-items: center;
            width: 28px;
            font-size: 17px;
            display: flex;
          }
          .highlight {
            color: #df3436 !important;
          }
          .song_wrapper {
            position: relative;
            display: flex;
            flex: 1 1 auto;
          }
          .song_wrapper:after {
            width: 300%;
            height: 300%;
            transform: scale(0.333333);
            position: absolute;
            z-index: 20;
            content: ' ';
            top: 0;
            left: 0;
            pointer-events: none;
            box-sizing: border-box;
            transform-origin: top left;
            border: 0 solid rgba(0, 0, 0, 0.1);
            border-bottom-width: 2px;
          }
          .play_icon {
            display: inline-block;
            width: 22px;
            height: 22px;
            background: url('/hot_icon.png') no-repeat;
            background-position: -24px 0;
            background-size: 166px 97px;
          }
          .song_info {
            text-align: left;
            flex: 1 1 auto;
            padding: 6px 0;
            width: 0;
          }
          .song_play {
            display: flex;
            padding: 0 10px;
            align-items: center;
          }
          .sq {
            display: inline-block;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            background: url('/hot_icon.png') no-repeat;
            background-size: 166px 97px;
          }
          .song_detail {
            font-size: 12px;
            color: #888;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
          }
          .song_title {
            font-size: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
          }
          .song_title span {
            color: #888;
          }
        `}
      </style>
    </>
  )
}

export default Song
