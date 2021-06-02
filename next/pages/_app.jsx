import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { PlayerProvider } from '../context/music'
import theme from '../context/theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlayerProvider>
  )
}
