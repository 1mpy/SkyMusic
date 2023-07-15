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
        <div className="player__btn-prev">
          <svg className="player__btn-prev-svg" alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev" />
          </svg>
        </div>
        <div className="player__btn-play _btn">
          <svg className="player__btn-play-svg" alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className="player__btn-next">
          <svg className="player__btn-next-svg" alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          </svg>
        </div>
        <div className="player__btn-repeat _btn-icon">
          <svg className="player__btn-repeat-svg" alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div className="player__btn-shuffle _btn-icon">
          <svg className="player__btn-shuffle-svg" alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
          </svg>
        </div>
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
        <S.VolumeProgress className="volume__progress _btn">
          <S.VolumeProgressLine
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
