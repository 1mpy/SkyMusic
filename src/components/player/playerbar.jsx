import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './playerbar.styles'

export default function ControlBar({selectedTrack}) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <PlayerControls />
          <TrackInfo selectedTrack={selectedTrack} />
          <Volume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
// {name: "", author:"",album:"", duration_in_seconds:""
export function TrackInfo({loading=false, selectedTrack }) {
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          {loading ? (
            <Skeleton width="51px" height="51px" />
          ) : (
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackPlaySvg>
          )}
        </S.TrackPlayImg>
        <S.TracjPlayAuthor>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackPlayAuthorLink href="http://">
              {selectedTrack.name }
            </S.TrackPlayAuthorLink>
          )}
        </S.TracjPlayAuthor>
        <S.TrackPlayAlbum>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackPlayAlbumLink href="http://">{selectedTrack.author }</S.TrackPlayAlbumLink>
          )}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLlikeAndDis>
        <S.TrackPlayLike>
          <S.TrackPlayLlikeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLlikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLlikeAndDis>
    </S.TrackPlay>
  )
}

export function PlayerControls() {
  return (
    <S.BarPlayer>
      <S.PlayerControls>
        <S.PlayerBtnPrev>
          <S.PlayerBtnPrevSvg alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev" />
          </S.PlayerBtnPrevSvg>
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay>
          <S.PlayerBtnPlaySvg alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          </S.PlayerBtnPlaySvg>
        </S.PlayerBtnPlay>
        <S.PlayerBtnNext>
          <S.PlayerBtnNextSvg alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          </S.PlayerBtnNextSvg>
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat>
          <S.PlayerBtnRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          </S.PlayerBtnRepeatSvg>
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle>
          <S.PlayerBtnShuffleSvg alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
          </S.PlayerBtnShuffleSvg>
        </S.PlayerBtnShuffle>
        <trackInfo />
      </S.PlayerControls>
    </S.BarPlayer>
  )
}

function Volume() {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImg>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </S.VolumeSvg>
        </S.VolumeImg>
        <S.VolumeProgress>
          <S.VolumeProgressLine type="range" name="range" />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
