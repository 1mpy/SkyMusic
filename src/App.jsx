// import MainWindow from './components/main/main_window/MainWindow'
import { useEffect, useState } from 'react'
import AppRoutes from './routes'
import GlobalStyle from './globalstyles'
import getTracks from './Api'

function App() {
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')
  const [list, setList] = useState([])
  const [tracklistError, settracklistError] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(false)
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

  return (
    <div className="App container">
      <GlobalStyle />
      <AppRoutes
        loading={loading}
        token={token}
        list={list}
        tracklistError={tracklistError}
        selectedTrack= {selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      {/* <MainWindow /> */}
    </div>
  )
}

export default App
