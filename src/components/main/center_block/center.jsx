import { styled } from 'styled-components'
import Search from '../search_bar/search'
import Filter from '../filter/filter'
import Playlist from '../playlist/playlist'

// import ControlBar from '../../player/playerbar' !!!!ВЫКЛЮЧЕН ПЛЕЕР!!!!

const StyledCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

const StyledCenterblockHeader = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

const StyledCenterblockContent = styled.h2`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

const StyledContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

const StyledContentPlaylist = styled.div`
  width: ${(props) => props.$width};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`

const StyledPlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export default function CenterBlock(props) {
  return (
    <StyledCenterblock>
      <Search />
      <StyledCenterblockHeader>Треки</StyledCenterblockHeader>
      <Filter />
      <StyledCenterblockContent>
        <StyledContentTitle>
          <StyledContentPlaylist $width="447px">Трек</StyledContentPlaylist>
          <StyledContentPlaylist $width="321px">
            ИСПОЛНИТЕЛЬ
          </StyledContentPlaylist>
          <StyledContentPlaylist $width="245px">АЛЬБОМ</StyledContentPlaylist>
          <StyledContentPlaylist $width="60px" $textAlign="end">
            <StyledPlaylistTitleSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </StyledPlaylistTitleSvg>
          </StyledContentPlaylist>
        </StyledContentTitle>
        <Playlist loading={props.loading} />
        {/* <ControlBar loading={props.loading} /> */} !!!!ВЫКЛЮЧЕН ПЛЕЕР!!!!
      </StyledCenterblockContent>
    </StyledCenterblock>
  )
}
