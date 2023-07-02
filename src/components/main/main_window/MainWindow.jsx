import CenterBlock from "../center_block/center"
import Nav from "../navigation/nav/nav"



export function MainWindow() {
    return (
      <main className="main">
        <Nav/>
        <CenterBlock/>
      </main>
    )
  }