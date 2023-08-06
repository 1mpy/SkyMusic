import {
  CURRENT_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  CURRENT_PLAYLIST,
  SHUFFLE_PLAYLIST,
} from '../types/tracks.js'

export const currentTrack = (id) => ({
  type: CURRENT_TRACK,
  payload: id,
})

export const pauseTrack = (isPlaying) => ({
  type: PAUSE_TRACK,
  payload: isPlaying,
})

export const nextTrack = (id) => ({
  type: NEXT_TRACK,
  payload: id,
})

export const previousTrack = (id) => ({
  type: PREVIOUS_TRACK,
  payload: id,
})

export const currentPlaylist = (playlist) => ({
  type: CURRENT_PLAYLIST,
  payload: playlist,
})

export const shufflePlaylist = (playlist) => ({
  type: SHUFFLE_PLAYLIST,
  payload: playlist,
})

// export const repeatTrack = () => ({
//   type: REPEAT_TRACK,
//   payload: {},
// })
