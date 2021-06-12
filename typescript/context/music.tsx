import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React, { createContext, useContext, useEffect, useReducer } from 'react'

interface ReducerState {
  musicInfo?: { title: string; artists: string; imgUrl: string; comment: any[] }
  playerStatus: boolean
  loading: boolean
  toastMessage: string
}

interface Action {
  payload?: any
  type: ActionTypes
}

interface Props {
  children?: React.ReactNode
}

export enum ActionTypes {
  SET_PLAYER_INFO = 'SET_PLAYER_INFO',
  SET_STATUS = 'SET_STATUS',
  SET_LOADING = 'SET_LOADING',
  SET_TOAST = 'SET_TOAST',
}

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const initialState: ReducerState = {
  musicInfo: undefined,
  playerStatus: false,
  loading: false,
  toastMessage: '',
}

const defaultDispath: React.Dispatch<any> = () => {}
const PlayerStateContext = createContext(initialState)
const PlayerDispatchContext = createContext(defaultDispath)

export const usePlayer = () => useContext(PlayerStateContext)
export const useDispatchPlayer = () => useContext(PlayerDispatchContext)

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_PLAYER_INFO:
      return {
        ...state,
        musicInfo: action.payload,
        playerStatus: true,
        loading: false,
      }
    case ActionTypes.SET_STATUS:
      return { ...state, playerStatus: action.payload }
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case ActionTypes.SET_TOAST:
      return { ...state, toastMessage: action.payload, loading: false }
    default:
      throw new Error(`Unkown Action: ${action.type}`)
  }
}

export const PlayerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const classes = useStyles()
  const audioRef: React.RefObject<HTMLAudioElement> = React.createRef()
  const { playerStatus, musicInfo, loading, toastMessage } = state

  useEffect(() => {
    if (musicInfo) {
      playerStatus ? audioRef.current!.play() : audioRef.current!.pause()
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
                type: ActionTypes.SET_TOAST,
                payload: '',
              })
            }
          />
        </>
      </PlayerStateContext.Provider>
    </PlayerDispatchContext.Provider>
  )
}
