import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './playlistitem.styles'
import { useThemeContext } from '../../contexts/theme-switcher/theme'
import { setCurrentTrack } from '../../../store/actions/creators/tracks'
import { trackSelector } from '../../../store/selectors/tracks'
import { isTrackPlayingSelector } from '../../../store/selectors/tracks'
import {
  checkToken,
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../services/favTracks'

import { useState } from 'react'
import { useUser } from '../../contexts/user/user'
import { useNavigate } from 'react-router-dom'

export default function PlaylistItem({ item, loading }) {
  const user = useUser()
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isUserLike = Boolean(
    item.stared_user?.find((item) => item.id === user.id)
  )
  const selectedTrack = useSelector(trackSelector)
  const isPlaying = useSelector(isTrackPlayingSelector)
  const [isLiked, setIsLiked] = useState(isUserLike)
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()

  function handeleClick() {
    dispatch(setCurrentTrack(item))
  }

  const handleLike = async (id) => {
    setIsLiked(true)
    try {
      await checkToken()
      await likeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
      }
      console.log(error)
    }
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    try {
      await checkToken()
      await dislikeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
      }
      console.log(error)
    }
  }

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id)

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
              <S.TrackLikeSvg
                alt="time"
                onClick={() => toggleLikeDislike(item.id)}
              >
                {isLiked ? (
                  <use
                    xlinkHref="img/icon/sprite.svg#icon-like"
                    fill="#ad61ff"
                  ></use>
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                )}
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackLikeSvg>
              <S.TrackTimeText>{item.duration_in_seconds}</S.TrackTimeText>
            </>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
