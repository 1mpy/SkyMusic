// import MainWindow from './components/main/main_window/MainWindow'
import { useState } from 'react'
import AppRoutes from './routes'
import GlobalStyle from './globalstyles'

function App() {
  const [loading] = useState(false)
  const token = localStorage.getItem('token')
  return (
    <div className="App container">
      <GlobalStyle />
      <AppRoutes loading={loading} token={token}/>
      {/* <MainWindow /> */}
    </div>
  )
}

export default App
