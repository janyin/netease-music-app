import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles'
import React, { createContext, useContext, useEffect, useReducer } from 'react'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const PlayerStateContext = createContext()
const PlayerDispatchContext = createContext()

export const usePlayer = () => useContext(PlayerStateContext)
export const useDispatchPlayer = () => useContext(PlayerDispatchContext)

export const SET_PLAYER_INFO = 'SET_PLAYER_INFO'
export const SET_STATUS = 'SET_STATUS'
export const SET_LOADING = 'SET_LOADING'
export const SET_TOAST = 'SET_TOAST'

const initialState = {
  musicInfo: '',
  playerStatus: false,
  loading: false,
  toastMessage: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYER_INFO:
      return {
        ...state,
        musicInfo: action.payload,
        playerStatus: true,
        loading: false,
      }
    case SET_STATUS:
      return { ...state, playerStatus: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_TOAST:
      return { ...state, toastMessage: action.payload, loading: false }
    default:
      throw new Error(`Unkown Action: ${action.type}`)
  }
}

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const classes = useStyles()
  const audioRef = React.createRef()
  const { playerStatus, musicInfo, loading, toastMessage } = state

  useEffect(() => {
    if (musicInfo) {
      playerStatus ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [playerStatus, musicInfo])

  return (
    <PlayerDispatchContext.Provider value={dispatch}>
      <PlayerStateContext.Provider value={state}>
        <>
          {children}
          {musicInfo && (
            <audio
              src={musicInfo?.musicUrl?.replace(/http:/, 'https:')}
              loop
              autoPlay
              ref={audioRef}
            >
              你的浏览器暂时不支持H5播放
            </audio>
          )}
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={!!toastMessage}
            message={toastMessage}
            autoHideDuration={3000}
            onClose={() =>
              dispatch({
                type: SET_TOAST,
                payload: '',
              })
            }
          />
        </>
      </PlayerStateContext.Provider>
    </PlayerDispatchContext.Provider>
  )
}
