import Image from 'next/image'
import { useRouter } from 'next/router'

/**
 * 推荐歌单
 */
function RemdList(props) {
  const { id, imgUrl, play, name } = props

  const route = useRouter()
  return (
    <>
      <span className="remdli" onClick={() => route.push(`/playlist/${id}`)}>
        <div className="listimg">
          <Image src={imgUrl} alt="pic" layout="fill" />
          <span>{play}</span>
        </div>
        <p className="text">{name}</p>
      </span>
      <style jsx>
        {`
          .text {
            overflow: hidden;
            line-height: 1.2;
            font-size: 13px;
            max-height: 30px;
          }
          .remdli {
            display: block;
            float: left;
            width: 33.3%;
            box-sizing: border-box;
            padding: 0 2px;
          }
          .listimg {
            position: relative;
            padding-bottom: 100%;
          }
          .listimg img {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1;
          }
          .listimg span {
            position: absolute;
            right: 5px;
            top: 2px;
            z-index: 3;
            padding-left: 13px;
            color: #fff;
            font-size: 12px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
            background-position: 0;
            background-repeat: no-repeat;
            background-size: 11px 10px;
            text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </>
  )
}

export default RemdList
