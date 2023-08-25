import {
  CURRENT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK,
  CURRENT_PLAYLIST,
  SHUFFLE_PLAYLIST,
  REPEAT_TRACK,
  PAGE_PLAYLIST,
} from '../actions/types/tracks.js'

// Начальное состояние
const initialState = {
  playing: false,
  track: null,
  playlist: [],
  pagePlaylist: [],
  shuffledPlaylist: false,
  repeat: false,
}

// Reducer
function trackReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_TRACK: {
      return {
        ...state,
        playing: true,
        track: action.payload,
      }
    }

    case PLAY_TRACK: {
      return {
        ...state,
        playing: true,
      }
    }

    case PAUSE_TRACK: {
      return {
        ...state,
        playing: false,
      }
    }

    case NEXT_TRACK: {
      return {
        ...state,
        playing: true,
        track: action.payload,
      }
    }

    case PREVIOUS_TRACK: {
      return {
        ...state,
        playing: true,
        track: action.payload,
      }
    }

    case REPEAT_TRACK: {
      return {
        ...state,
        repeat: !state.repeat, // переключатель
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
        shuffledPlaylist: !state.shuffledPlaylist, // переключатель
      }
    }

    case PAGE_PLAYLIST: {
      return {
        ...state,
        pagePlaylist: action.payload,
      }
    }

    default:
      return state
  }
}

export default trackReducer
