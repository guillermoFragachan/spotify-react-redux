export const GET_SONG_INFO = 'GET_SONG_INFO'
export const GET_SONG_IMG = "GET_SONG_IMG"
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"




export const getSongInformation = (selectedSong) => ({
    type: GET_SONG_INFO,
    payload: selectedSong,
  })

  export const getSongImage = (selectedSong) =>({
    type: GET_SONG_IMG,
    payload:selectedSong
  })

  export const addToPlaylist = (selectedSong) => ({
    type:ADD_TO_PLAYLIST,
    payload:selectedSong
  })