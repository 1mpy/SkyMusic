import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CenterBlock from '../center_block/center'
import Nav from '../navigation/nav/nav'
import SideBar from '../side_menu/sideBar'

export default function MainWindow() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <main className="main">
      <Nav />
      <SkeletonTheme baseColor="#313131" highlightColor="#444" >
        <CenterBlock loading={loading} />
        <SideBar loading={loading} />
      </SkeletonTheme>
    </main>
  )
}
