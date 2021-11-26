import { initialState } from '../index.js'
import { GET_SONG_INFO, GET_SONG_IMG, ADD_TO_PLAYLIST } from '../actions/index.js'
import { initialState } from '../index.js'
import { SEARCH_QUERY, GET_SONGS } from '../actions/index'


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
  
    case GET_SONGS:
      return {
        ...state,
        songs: {
          rockSongs: action.payload,
          popSongs: action.payload,
          category: [...state.songs.category],
        }

      }
    case GET_SONG_INFO:
      return {
        ...state,
        songInformation: action.payload,
      }
      case GET_SONG_IMG:
      return {
        ...state,
        songInformation:{ 
          ...state.songInformation,
          img:action.payload
        
        }
      }
      case ADD_TO_PLAYLIST:
        return{
          ...state,
          playlist:[...state.playlist, action.payload]
        }

    default:
      return state
  }
}

export default mainReducer