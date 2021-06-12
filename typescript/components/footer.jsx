import Image from 'next/image'

/**
 * 首页底部
 */
function Footer() {
  return (
    <>
      <div className="foot">
        <div className="foot-wrapper">
          <div className="foot-logo">
            <Image src="/foot.svg" alt="logo" width="230" height="44" />
          </div>
          <div
            className="openapp"
            onClick={() =>
              window.open('https://github.com/janyin/netease-music-app')
            }
          >
            如果喜欢可以给个star--&gt;GitHub
          </div>
          <p className="copyright">模仿网站 仅供学习交流</p>
        </div>
      </div>
      <style jsx>
        {`
          .copyright {
            color: #888;
            font-size: 12px;
            line-height: 16px;
            transform: scale(0.75);
          }
          .openapp {
            line-height: 38px;
            border: 1px solid #d33a31;
            border-radius: 38px;
            font-size: 16px;
            color: #d33a31;
            margin: 15px 37px 5px;
            cursor: pointer;
          }
          .logosvg {
            display: block;
            margin: 0 auto;
            width: 230px;
            height: 44px;
          }
          .foot-logo {
            padding-top: 12%;
          }
          .foot {
            position: relative;
            padding-top: 53.3%;
            margin-top: 4px;
            background: url('/footbg.png') no-repeat;
            background-size: contain;
          }
          .foot-wrapper {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 1;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Footer
