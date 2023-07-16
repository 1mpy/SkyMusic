import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'

const StyledMain = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export default function MainWindow() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <StyledMain>
      <Nav />
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
        <CenterBlock loading={loading} />
        <SideBar loading={loading} />
      </SkeletonTheme>
    </StyledMain>
  )
}
