import Footer from './components/main/footer/footer'
import MainWindow from './components/main/main_window/MainWindow'
// import SideBar from './components/main/side_menu/sideBar'
import  './style.css'

function App() {
  return (
    <div className="App container">
      <MainWindow />
      {/* <SideBar /> */}
      <Footer />
    </div>
  )
}

export default App
