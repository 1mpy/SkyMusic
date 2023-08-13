import PlaylistItem from './playlistitem'
import ContentPlaylist from './playlist.styles'
import { useSelector } from 'react-redux'
import { playlistSelector } from '../../../store/selectors/tracks'

export default function Playlist({
  loading,
  tracklistError,
  setSelectedTrack,
}) {
  const list = useSelector(playlistSelector)

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
          // title={item?.name}
          // author={item?.author}
          // album={item?.album}
          // time={item?.duration_in_seconds}
          loading={loading}
          onClick={() => setSelectedTrack(item)}
        />
      ))}
    </ContentPlaylist>
  )
}
