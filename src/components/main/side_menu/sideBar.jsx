import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './sideBar.styles'
import playlist01 from './img/playlist01.png'
import playlist02 from './img/playlist02.png'
import playlist03 from './img/playlist03.png'

export function SidebarItem(props) {
  const url =`./img/playlist0${props.id}.png` 
  return (    
    <S.SidebarItem>
      {props.loading ? (
        <Skeleton width="250px" height="150px" />
      ) : (
        <S.SidebarLink to={`/${props.path}/:${props.id}`}>
          <S.SidebarImg src={url} alt="playlist #" />
        </S.SidebarLink>
      )}
    </S.SidebarItem>
  )
}

export default function SideBar() {
  const user = { name: 'Sergey Ivanov' }
  const compilations = [
    { id: '1', path: 'category', imgUrl: playlist01 },
    { id: '2', path: 'category', imgUrl: playlist02 },
    { id: '3', path: 'category', imgUrl: playlist03 },
  ]
  // { id: '1', path: 'category', imgUrl: './img/playlist01.png' },
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user?.name}</S.SidebarPersonalName>
        <S.SidebarAvatar src="img/logout.svg">
          <svg xlinkHref="img/logout.svg" />
        </S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {compilations.map((compilation) => (
            <SidebarItem
              id={compilation.id}
              path={compilation.path}
              imageUrl={compilation.imgUrl}
            />
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
