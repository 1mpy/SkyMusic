import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Main from './MainWindow.styles'
import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'
import GlobalStyle from '../../../globalstyles'

export default function MainWindow() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <Main>
      <GlobalStyle/>
      <Nav />
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
        <CenterBlock loading={loading} />
        <SideBar loading={loading} />
      </SkeletonTheme>
    </Main>
  )
}
