import * as S from "./nav.styles"
import Logo from '../logo/logo'
import Burger from '../burger/burger'



export default function Nav() {
  return (
    <S.MainNav>
      <Logo />
      <Burger />
    </S.MainNav>
  )
}
