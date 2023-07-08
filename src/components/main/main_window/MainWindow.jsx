import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'

export default function MainWindow() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <SideBar/>
    </main>
  )
}
