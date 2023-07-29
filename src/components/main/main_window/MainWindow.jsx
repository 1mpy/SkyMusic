import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Main from './MainWindow.styles'
// import Search from '../search_bar/search'
import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'
import GlobalStyle from '../../../globalstyles'
import Footer from '../footer/footer'
import ControlBar from '../../player/playerbar'

export default function MainWindow(props) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <Main>
      <GlobalStyle />
      <Nav />
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
        {/* <Search/> */}
        <CenterBlock loading={loading} />
        <SideBar loading={loading} />
        <Footer />
        <ControlBar loading={props.loading} />
      </SkeletonTheme>
    </Main>
  )
}
