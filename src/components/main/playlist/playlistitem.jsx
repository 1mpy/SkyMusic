import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            {props.loading ? (
              <Skeleton width="51px" height="51px" />
            ) : (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            )}
          </div>
          <div className="track__title-text">
            {props.loading ? (
              <Skeleton />
            ) : (
              <a className="track__title-link" href="http://">
                {props.title} <span className="track__title-span" />
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {props.loading ? (
            <Skeleton />
          ) : (
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          )}
        </div>
        <div className="track__album">
          {props.loading ? (
            <Skeleton />
          ) : (
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          )}
        </div>
        <div className="track__time">
          {props.loading ? (
            <Skeleton />
          ) : (
            <>
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </svg>
              <span className="track__time-text">{props.time}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
