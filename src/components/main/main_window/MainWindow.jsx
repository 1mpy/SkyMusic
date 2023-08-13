import { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import 'react-loading-skeleton/dist/skeleton.css'
import Main from './MainWindow.styles'
// import Search from '../search_bar/search'
import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'
import GlobalStyle from '../../../globalstyles'
import Footer from '../footer/footer'
import ControlBar from '../../player/playerbar'
import { trackSelector } from '../../../store/selectors/tracks'

export default function MainWindow({ loading, tracklistError }) {
  const selectedTrack = useSelector(trackSelector)
  return (
    <Main>
      <GlobalStyle />
      <Nav />
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
        <CenterBlock tracklistError={tracklistError} loading={loading} />
        <SideBar loading={loading} />
        <Footer />
        {selectedTrack && <ControlBar />}
      </SkeletonTheme>
    </Main>
  )
}
