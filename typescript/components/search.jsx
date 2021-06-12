import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import SearchList from './searchList'
import Trending from './trending'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    padding: '0 10px',
    backgroundColor: '#fbfcfd',
    height: 60,
    width: '100%',
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  inputRoot: {
    color: 'inherit',
    background: '#ebecec',
    borderRadius: '30px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

/**
 * 搜索页面
 */
function Search({ hotWord }) {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
        </div>
        <InputBase
          placeholder="搜索歌曲、歌手、专辑"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
      {searchValue ? (
        <SearchList searchValue={searchValue} />
      ) : (
        <Trending
          hotWord={hotWord}
          clickWord={(value) => setSearchValue(value)}
        />
      )}
    </div>
  )
}

export default Search
