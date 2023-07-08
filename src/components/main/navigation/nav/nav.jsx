import Logo from '../logo/logo'
import Burger from '../burger/burger'
// import Menu from '../navMenu/NavMenu'

export default function Nav() {
  return (
    <nav className="main__nav nav">
      <Logo />
      <Burger />
    </nav>
  )
}
