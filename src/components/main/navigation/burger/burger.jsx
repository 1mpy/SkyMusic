import { useState } from 'react'
import * as S from "./burger.styles"
import Menu from '../navMenu/NavMenu'


export default function BurgerToMenu() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <>
      <S.NavBurger
        onClick={toggleVisibility}
        onKeyDown={toggleVisibility}
        role="button"
        tabIndex="0"
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {!visible && <Menu />}
    </>
  )
}
