import PlaylistItem from './playlistitem'
import ContentPlaylist from './playlist.styles'
import { useDispatch, useSelector } from 'react-redux'
import { pagePlaylistSelector } from '../../../store/selectors/tracks'

export default function Playlist({ loading, tracklistError }) {
  const list = useSelector(pagePlaylistSelector)
  const dispatch = useDispatch()
  const setUpTrack = (item) => {
    dispatch(setCurrentTrack(item)) 
    dispatch(setCurrentPlaylist(list))
  }
  const tempTracks = Array(10).fill({
    name: '',
    author: '',
    album: '',
    duration_in_seconds: '',
  })
  const tracks = loading ? tempTracks : list

  return (
    <ContentPlaylist>
      <p>{tracklistError}</p>
      {tracks?.map((item) => (
        <PlaylistItem
          key={item?.id}
          item={item}
          loading={loading}
          onClick={() => setUpTrack(item)}
        />
      ))}
    </ContentPlaylist>
  )
}
