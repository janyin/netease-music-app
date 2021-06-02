import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Image from 'next/image'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import * as API from '../apis/config'
import Home from '../components/home'
import Rank from '../components/rank'
import Search from '../components/search'
import * as PARSE from '../utils/index'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  )
}

const AppLayOut = ({ newSong, remd, rank, hotWord }) => {
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <>
      <AppBar color="default">
        <div className="top-fix">
          <Image src="/logo.svg" alt="logo" width="142" height="25" />
          <div className="topfr">
            <span>Next</span>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="推荐音乐" />
          <Tab label="热歌榜" />
          <Tab label="搜索" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        style={{ marginTop: 112 }}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Home newSong={newSong} remd={remd} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Rank rank={rank} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Search hotWord={hotWord} />
        </TabPanel>
      </SwipeableViews>
      <style jsx>{`
        .top-fix {
          display: flex;
          padding: 0 20px;
          width: 100%;
          height: 64px;
          background-color: #d43c33;
          box-sizing: border-box;
          align-items: center;
          justify-content: space-between;
        }
        .topfr span {
          position: relative;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          color: #fff;
          font-size: 15px;
          border: 1px solid white;
          border-radius: 37.5%/100%;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const newSongResponse = await API.getNewSong()
  const remdResponse = await API.getRemd()
  const rankResponse = await API.getRank()
  const wordResponse = await API.getWord()

  return {
    props: {
      newSong: PARSE.newSong(newSongResponse),
      remd: PARSE.remd(remdResponse),
      rank: rankResponse,
      hotWord: wordResponse.result.hots,
    },
  }
}

export default AppLayOut
