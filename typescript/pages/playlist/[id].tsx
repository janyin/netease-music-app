import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as API from '../../apis/config'
import Song from '../../components/song'
import { PlayListResponese, RemdResponse } from '../../types/index'
import * as PARSE from '../../utils/index'

interface Props {
  playList: PlayListResponese
}
/**
 * 歌单详情页面
 */
function PlayList(props: Props) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>loading</div>
  }

  const { playList } = props
  const { imgUrl, name, tags, desc, music } = PARSE.playList(playList)
  return (
    <>
      <div className="playlistwrap">
        <section className="list_head">
          <div
            className="list_head_bg"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          <div className="getBack" onClick={() => router.back()}>
            <h3>返回</h3>
          </div>
          <div className="list_head_content">
            <div className="lhc_img">
              <Image src={imgUrl} alt="pic" width={126} height={126} />
              <span className="s_icon">歌单</span>
            </div>
            <div className="lhc_info">
              <h2 className="lhc_title">{name}</h2>
            </div>
          </div>
        </section>
        <section className="list_info">
          <div className="info_tags">
            标签:
            {tags.map((value) => (
              <em className="tag" key={value}>
                {value}
              </em>
            ))}
          </div>
          {desc && (
            <div className="info_intro">
              <span>
                简介：
                {desc.substring(0, 100)}
              </span>
            </div>
          )}
        </section>
        <div className="list_song">
          <h3>歌曲列表</h3>
          {music.map((value) => (
            <Song data={value} key={value.id} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .playlistwrap {
            background-color: #f8f8f8;
            padding-bottom: 58px;
          }
          .list_head {
            position: relative;
            padding: 5px 10px 24px 15px;
            overflow: hidden;
          }
          .list_head_bg {
            position: absolute;
            height: 126px;
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            -webkit-filter: blur(20px);
            filter: blur(20px);
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
          }

          .list_head_content {
            display: flex;
            position: relative;
            z-index: 2;
          }
          .lhc_img {
            width: 126px;
            height: 126px;
            position: relative;
            background-color: #e2e2e3;
          }
          .lhc_img img {
            width: 100%;
            vertical-align: middle;
          }
          .s_icon {
            position: absolute;
            z-index: 3;
            top: 10px;
            left: 0;
            padding: 0 8px;
            height: 17px;
            color: #fff;
            font-size: 9px;
            text-align: center;
            line-height: 17px;
            background-color: rgba(217, 48, 48, 0.8);
            border-top-right-radius: 17px;
            border-bottom-right-radius: 17px;
          }
          .lhc_info {
            flex: 1 1 auto;
            width: 1%;
            margin-left: 16px;
          }
          .lhc_title {
            padding-top: 1px;
            font-size: 17px;
            line-height: 1.3;
            color: #fefefe;
            height: 44px;
            display: -webkit-box;
            -webkit-box-pack: center;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .list_info {
            position: relative;
            margin: 0 10px 0 15px;
            padding-top: 10px;
            line-height: 19px;
            color: #666;
          }
          .info_tags {
            margin-bottom: 10px;
            line-height: 20px;
            margin-right: -10px;
          }
          .tag {
            display: inline-block;
            position: relative;
            margin-left: 10px;
            padding: 1px 8px;
            font-size: 12px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            font-style: normal;
          }
          .info_intro {
            position: relative;
            padding-bottom: 8px;
            line-height: 19px;
            color: #666;
          }
          .info_intro span {
            word-wrap: break-word;
            word-break: break-all;
            white-space: normal;
          }
          .list_song {
            padding-bottom: 20px;
          }
          .list_song h3 {
            padding: 14px 10px;
            margin: 0;
            font-size: 14px;
            color: #666;
            background-color: #eeeff0;
          }
          .getBack {
            position: relative;
            color: #fff;
            padding-left: 13px;
            margin-bottom: 10px;
            cursor: pointer;
          }
          .getBack:before {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            border: solid #fff;
            border-width: 3px 0 0 3px;
            -webkit-transform: rotate(315deg);
            transform: rotate(315deg);
            top: 5px;
            left: 0;
          }
        `}
      </style>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const remdResponse = (await API.getRemd()) as RemdResponse
  const result = PARSE.remd(remdResponse)
  const paths = result.map((item) => ({ params: { id: `${item.id}` } }))

  return {
    fallback: true,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params !== 'object') return { props: {} }
  const response = await API.getPlaylist(params.id as number | string)

  return {
    props: {
      playList: response,
    },
  }
}

export default PlayList
