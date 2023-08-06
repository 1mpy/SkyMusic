import {
  CURRENT_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  CURRENT_PLAYLIST,
  SHUFFLE_PLAYLIST,
} from '../actions/types/tracks.js'

// Начальное состояние
const initialState = {
  playing: false,
  track: null,
  playlist: {},
  shuffledPlaylist: {},
}

// Reducer
function trackReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_TRACK: {
      const id = action.payload
      // как-то по id найти трек и передать в return?
      return {
        ...state,
        playing: true,
        track: {},
      }
    }

    case PAUSE_TRACK: {
      const id = action.payload
      // как-то по id найти трек
      return {
        ...state,
        playing: false,
        track: {},
      }
    }

    case NEXT_TRACK: {
      const id = action.payload
      // как-то по id найти трек
      return {
        ...state,
        playing: true,
        track: {},
      }
    }

    case PREVIOUS_TRACK: {
      const id = action.payload
      // как-то по id найти трек
      return {
        ...state,
        playing: true,
        track: {},
      }
    }

    case CURRENT_PLAYLIST: {
      return {
        ...state,
        playlist: action.payload,
      }
    }

    case SHUFFLE_PLAYLIST: {
      return {
        ...state,
        shuffledPlaylist: action.payload,
      }
    }

    default:
      return state
  }
}

export default trackReducer
