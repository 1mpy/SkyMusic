import { useRef, useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './playerbar.styles'
import formatTime from '../utils/formatTime'
import { useSelector, useDispatch } from 'react-redux'
import {
  playlistSelector,
  trackSelector,
  isTrackPlayingSelector,
  repeatTrackSelector,
  shufflePlaylistSelector,
} from '../../store/selectors/tracks'
import {
  setCurrentTrack,
  playTrack,
  pauseTrack,
  nextTrack,
  previousTrack,
  repeatTrack,
  shufflePlaylist,
} from '../../store/actions/creators/tracks'

export default function ControlBar() {
  const dispatch = useDispatch()
  const list = useSelector(playlistSelector)
  const selectedTrack = useSelector(trackSelector)
  const isPlaying = useSelector(isTrackPlayingSelector)
  const audioElem = useRef(null)
  const isLoop = useSelector(repeatTrackSelector)
  // const [isLoop, setIsLoop] = useState(false)
  const isShuffle = useSelector(shufflePlaylistSelector)
  // const [isShuffle, setIsShuffle] = useState(false)
  const clickRef = useRef(null) // progressbar ref
  const [volume, setVolume] = useState(60) // for volume bar
  const [progress, setProgress] = useState(0)

  const handleStart = () => {
    audioElem.current.play()
    dispatch(playTrack())
  }

  const handleStop = () => {
    audioElem.current.pause()
    dispatch(pauseTrack())
  }

  const handleRepeat = () => {
    dispatch(repeatTrack())
  }

  const handleShuffle = () => {
    dispatch(shufflePlaylist())
  }
  // PLAY/PAUSE

  useEffect(() => {
    try {
      audioElem.current.src = selectedTrack.track_file
      if (isPlaying) handleStart()
      else handleStop()
    } catch (error) {}
  }, [selectedTrack.track_file])

  const togglePlay = isPlaying ? handleStop : handleStart

  // Previous track

  const prevTrack = () => {
    // console.log("1")
    const index = isShuffle
      ? Math.floor(Math.random() * list.length) + 1
      : list.findIndex((x) => x.id === selectedTrack.id)
    if (index !== 0) {
      dispatch(previousTrack(list[index - 1]))
    } else if (isShuffle) {
      dispatch(previousTrack(list[index - 1]))
    } else return
  }

  // Next track

  const playNextTrack = () => {
    console.log(isShuffle)
    const index = isShuffle
      ? Math.floor(Math.random() * (list.length - 1))
      : list.findIndex((x) => x.id === selectedTrack.id)
    if (index !== list.length - 1) {
      dispatch(nextTrack(list[index + 1]))
    } else if (isShuffle) {
      dispatch(nextTrack(list[index + 1]))
    } else return
  }

  // TrackBar

  const trackPlaying = () => {
    const { duration } = audioElem.current
    const curTime = audioElem.current.currentTime
    // console.log(duration, curTime)
    setProgress((curTime / duration) * 100)
    if (!selectedTrack?.length)
      dispatch(
        setCurrentTrack({
          ...selectedTrack,
          length: duration,
        })
      )
  }

  // timechange on progressbar
  const changeTime = (e) => {
    const width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const divprogress = (offset / width) * 100
    audioElem.current.currentTime = (divprogress / 100) * selectedTrack.length
  }

  // VOLUME BAR

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100
    }
  }, [volume, audioElem])
  return (
    <>
      <audio
        style={{ visibility: 'hidden' }}
        controls
        ref={audioElem}
        loop={isLoop}
        onTimeUpdate={trackPlaying}
        onEnded={playNextTrack}
      >
        <source src={selectedTrack.track_file} type="audio/mpeg" />
        <track kind="captions" label="" />
      </audio>

      <S.Bar>
        <S.PlayerTime>
          <span className="current-time">
            {formatTime(audioElem.current?.currentTime || 0)}
          </span>{' '}
          /
          <span className="duration">
            {formatTime(audioElem.current?.duration || 0)}
          </span>
        </S.PlayerTime>
        <S.BarContent>
          <div
            onClick={changeTime}
            ref={clickRef}
            onKeyDown={changeTime}
            role="presentation"
          >
            <S.BarPlayerProgress style={{ width: `${`${progress}%`}` }} />
          </div>
          <S.BarPlayerBlock>
            <PlayerControls
              togglePlay={togglePlay}
              prevTrack={prevTrack}
              nextTrack={playNextTrack}
              isLoop={isLoop}
              setIsLoop={handleRepeat}
              isPlaying={isPlaying}
              isShuffle={isShuffle}
              setIsShuffle={handleShuffle}
            />
            <TrackInfo selectedTrack={selectedTrack} />
            <Volume volume={volume} setVolume={setVolume} />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}

export function TrackInfo({ loading = false, selectedTrack }) {
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
              {selectedTrack.name}
            </S.TrackPlayAuthorLink>
          )}
        </S.TracjPlayAuthor>
        <S.TrackPlayAlbum>
          {loading ? (
            <Skeleton />
          ) : (
            <S.TrackPlayAlbumLink href="http://">
              {selectedTrack.author}
            </S.TrackPlayAlbumLink>
          )}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLlikeAndDis>
        <S.TrackPlayLike>
          <S.TrackPlayLlikeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLlikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLlikeAndDis>
    </S.TrackPlay>
  )
}

export function PlayerControls({
  togglePlay,
  prevTrack,
  nextTrack,
  isLoop,
  isPlaying,
  isShuffle,
  setIsShuffle,
  setIsLoop,
}) {
  return (
    <S.BarPlayer>
      <S.PlayerControls>
        <S.PlayerBtnPrev onClick={prevTrack}>
          <S.PlayerBtnPrevSvg alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev" />
          </S.PlayerBtnPrevSvg>
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay onClick={togglePlay}>
          {isPlaying ? (
            <S.PlayerBtnPauseSvg alt="pause">
              <use xlinkHref="img/icon/sprite.svg#icon-pause" />
            </S.PlayerBtnPauseSvg>
          ) : (
            <S.PlayerBtnPlaySvg alt="play">
              <use xlinkHref="img/icon/sprite.svg#icon-play" />
            </S.PlayerBtnPlaySvg>
          )}
        </S.PlayerBtnPlay>
        <S.PlayerBtnNext onClick={nextTrack}>
          <S.PlayerBtnNextSvg alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          </S.PlayerBtnNextSvg>
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat
          className={isLoop ? 'active' : ''}
          onClick={setIsLoop}
        >
          <S.PlayerBtnRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          </S.PlayerBtnRepeatSvg>
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle
          className={isShuffle ? 'active' : ''}
          onClick={setIsShuffle}
        >
          <S.PlayerBtnShuffleSvg alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
          </S.PlayerBtnShuffleSvg>
        </S.PlayerBtnShuffle>
        <trackInfo />
      </S.PlayerControls>
    </S.BarPlayer>
  )
}

function Volume({ volume, setVolume }) {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImg>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </S.VolumeSvg>
        </S.VolumeImg>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            style={{
              background: `linear-gradient(to right,  ${volume}%, ${volume}%)`,
            }}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}




