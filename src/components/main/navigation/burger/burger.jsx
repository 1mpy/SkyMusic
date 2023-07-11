import { useState } from 'react'
import Menu from '../navMenu/NavMenu'

export default function BurgerToMenu() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <>
      <div
        className="nav__burger burger"
        onClick={toggleVisibility}
        onKeyDown={toggleVisibility}
        role="button"
        tabIndex="0"
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {!visible && <Menu />}
    </>
  )
}
