import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ControlBar({ loading }) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <PlayerControls />
          <TrackInfo loading={loading} />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export function TrackInfo({ loading }) {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          {loading ? (
            <Skeleton width="51px" height="51px" />
          ) : (
            <svg className="track-play__svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          )}
        </div>
        <div className="track-play__author">
          {loading ? (
            <Skeleton />
          ) : (
            <a className="track-play__author-link" href="http://">
              Ты та...
            </a>
          )}
        </div>
        <div className="track-play__album">
          {loading ? (
            <Skeleton />
          ) : (
            <a className="track-play__album-link" href="http://">
              Баста
            </a>
          )}
        </div>
      </div>
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function PlayerControls() {
  return (
    <div className="bar__player player">
      <div className="player__controls">
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
      </div>
    </div>
  )
}

function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <svg className="volume__svg" alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className="volume__progress _btn">
          <input
            className="volume__progress-line _btn"
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}
