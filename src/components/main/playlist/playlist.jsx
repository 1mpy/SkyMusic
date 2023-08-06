import PlaylistItem from './playlistitem'
import ContentPlaylist from './playlist.styles'

export default function Playlist({
  loading,
  list,
  tracklistError,
  setSelectedTrack,
}) {
  // const [list, setList] = useState([])
  // const [tracklistError, settacklistError] = useState(null)

  // useEffect(() => {
  //   getTracks()
  //     .then((tracklist) => {
  //       console.log(tracklist)
  //       setList(tracklist) // имя для удобства
  //     })
  //     .catch(() => {
  //       settracklistError('Не удалось загрузить плейлист, попробуйте позже')
  //     })
  // }, [])
  const tempTracks = Array(10).fill({
    name: '',
    author: '',
    album: '',
    duration_in_seconds: '',
  })
  const tracks = loading ? tempTracks : list
  // [{name: "", author:"",album:"", duration_in_seconds:""
  // }]

  return (
    <ContentPlaylist>
      <p>{tracklistError}</p>
      {tracks?.map((item) => (
        <PlaylistItem
          key={item?.id}
          title={item?.name}
          author={item?.author}
          album={item?.album}
          time={item?.duration_in_seconds}
          loading={loading}
          onClick={() => setSelectedTrack(item)}
        />
      ))}
    </ContentPlaylist>
  )
}
