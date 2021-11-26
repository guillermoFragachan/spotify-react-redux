import { GET_SONG_INFO } from '../actions/index.js'
import { initialState } from '../index.js'


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG_INFO:
      return {
        ...state,
        songInformation: action.payload,
      }

    default:
      return state
  }
}

export default mainReducer