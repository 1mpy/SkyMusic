import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "./playerbar.styles"


export default function ControlBar(props) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <PlayerControls />
          <TrackInfo loading={props.loading} />
          <Volume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export function TrackInfo({ loading }) {
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
              Ты та...
            </S.TrackPlayAuthorLink>
          )}
        </S.TracjPlayAuthor>
        <S.TrackPlayAlbum>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackPlayAlbumLink href="http://">
              Баста
            </S.TrackPlayAlbumLink>
          )}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLlikeAndDis>
        <S.TrackPlayLike className=" _btn-icon">
          <S.TrackPlayLlikeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLlikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike className="_btn-icon">
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
        <S.PlayerBtnPlay className="btn">
          <S.PlayerBtnPlaySvg alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          </S.PlayerBtnPlaySvg>
        </S.PlayerBtnPlay >
        <S.PlayerBtnNext>
          <S.PlayerBtnNextSvg alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          </S.PlayerBtnNextSvg>
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat className="_btn-icon">
          <S.PlayerBtnRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          </S.PlayerBtnRepeatSvg>
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle className="_btn-icon">
          <S.PlayerBtnShuffleSvg  alt="shuffle">
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
        <S.VolumeProgress className="_btn">
          <S.VolumeProgressLine
            className="_btn"
            type="range"
            name="range"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
