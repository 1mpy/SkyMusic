import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './playlistitem.styles'
import { useThemeContext } from '../../contexts/theme-switcher/theme'
import { setCurrentTrack } from '../../../store/actions/creators/tracks'
import { trackSelector } from '../../../store/selectors/tracks'
import { isTrackPlayingSelector } from '../../../store/selectors/tracks'

export default function PlaylistItem({ item, loading }) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const selectedTrack = useSelector(trackSelector)
  const isPlaying = useSelector(isTrackPlayingSelector)
  function handeleClick() {
    dispatch(setCurrentTrack(item))
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {loading ? (
              <Skeleton width="51px" height="51px" />
            ) : selectedTrack?.id !== item.id ? (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            ) : (
              <S.Pulse active={isPlaying} />
            )}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            {loading ? (
              <Skeleton />
            ) : (
              <S.TrackTitleLink
                style={{ color: theme?.color }}
                onClick={handeleClick}
              >
                {item.name} <S.TrackTitleSpan />
              </S.TrackTitleLink>
            )}
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackAuthorLink style={{ color: theme?.color }} href="http://">
              {item.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAuthorAlbum>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackAuthorAlbumLink href="http://">
              {item.album}
            </S.TrackAuthorAlbumLink>
          )}
        </S.TrackAuthorAlbum>
        <div className="track__time">
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>{item.duration_in_seconds}</S.TrackTimeText>
            </>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
