import { initialState } from '../index.js'
import { SEARCH_QUERY, GET_SONGS } from '../actions/index'




const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: {
          rockSongs: action.payload
        }

      }
    default:
      return state
  }
}

export default mainReducer