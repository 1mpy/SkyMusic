import * as S from './NavMenu.styles'

function MenuItem(props) {
  return (
    <S.MenuItem>
      {/* <S.MenuLink href="http://">{props.name}</S.MenuLink> */}
      <S.MenuLink className="App-link" to={props.path}>
        {props.name}
      </S.MenuLink>
    </S.MenuItem>
  )
}

export default function Menu() {
  const links = [
    { name: 'Главное', path: '/' },
    { name: 'Мои треки', path: '/fav' },
    { name: 'Выйти', path: '/login' },
  ]
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link) => (
          <MenuItem name={link.name} path={link.path} />
        ))}
      </S.MenuList>
    </S.NavMenu>
  )
}
