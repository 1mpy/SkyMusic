import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './sideBar.styles'

export default function SideBar(props) {
  const user = { name: 'Sergey Ivanov' }
  // console.log(props)
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user?.name}</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <S.SidebarLink href="/#">
                <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
          <S.SidebarItem>
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <S.SidebarLink href="/#">
                <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
          <S.SidebarItem>
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <S.SidebarLink href="/#">
                <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
