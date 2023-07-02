function MenuItem(props) {
  return (
    <li classNameName="menu__item">
      <a href="http://" classNameName="menu__link">
        {props.name}
      </a>
    </li>
  )
}

export default function Menu() {
  const links = ['Главное', 'Мой плейлист', 'Войти']
  return (
    <div classNameName="nav__menu menu">
      <ul classNameName="menu__list">
        {links.map((link) => (
          <MenuItem key={link} name={link} />
        ))}
      </ul>
    </div>
  )
}
