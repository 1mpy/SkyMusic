import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './playlistitem.styles'
import { useThemeContext } from '../../contexts/theme-switcher/theme'

export default function PlaylistItem(props) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const currentTrack = useSelector(state => state.track)
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {props.loading ? (
              <Skeleton width="51px" height="51px" />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            {props.loading ? (
              <Skeleton />
            ) : (
              <S.TrackTitleLink
                style={{ color: theme?.color }}
                onClick={props.onClick}
              >
                {props.title} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          {props.loading ? (
            <Skeleton />
          ) : (
            <S.TrackAuthorLink style={{ color: theme?.color }} href="http://">
              {props.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAuthorAlbum>
          {props.loading ? (
            <Skeleton />
          ) : (
            <S.TrackAuthorAlbumLink href="http://">
              {props.album}
            </S.TrackAuthorAlbumLink>
          )}
        </S.TrackAuthorAlbum>
        <div className="track__time">
          {props.loading ? (
            <Skeleton />
          ) : (
            <>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>{props.time}</S.TrackTimeText>
            </>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
