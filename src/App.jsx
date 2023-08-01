import { useEffect, useState } from 'react'
import AppRoutes from './routes'
import GlobalStyle from './globalstyles'
import getTracks from './Api'
import {
  ThemeContext,
  themes,
} from './components/contexts/theme-switcher/theme'
import ThemeSwitcher from './components/utils/themeSwitcher'

function App() {
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')
  const [list, setList] = useState([])
  const [tracklistError, settracklistError] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(false)

  const [currentTheme, setCurrentTheme] = useState(themes.light)
  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracklist) => {
        console.log(tracklist)
        setList(tracklist) // имя для удобства
      })
      .catch(() => {
        settracklistError('Не удалось загрузить плейлист, попробуйте позже')
      })
      .finally(() => setLoading(false))
  }, [])

  // Color Theme

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return (
    <div className="App container">
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <ThemeSwitcher />
        <AppRoutes
          loading={loading}
          token={token}
          list={list}
          tracklistError={tracklistError}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
