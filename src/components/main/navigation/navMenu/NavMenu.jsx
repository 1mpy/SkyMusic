import * as S from "./NavMenu.styles"


function MenuItem(props) {
  return (
    <S.MenuItem>
      <S.MenuLink href="http://">{props.name}</S.MenuLink>
    </S.MenuItem>
  )
}

export default function Menu() {
  const links = ['Главное', 'Мой плейлист', 'Войти']
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link) => (
          <MenuItem key={link} name={link} />
        ))}
      </S.MenuList>
    </S.NavMenu>
  )
}
