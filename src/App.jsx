import { SideBar } from "./components/main/side_menu/sideBar";
import { MainWindow } from "./components/main/main_window/MainWindow";
import { Footer } from "./components/main/footer/footer";

function App() {
  return (
    <div className="App container">
      <MainWindow />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
