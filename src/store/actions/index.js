export const ADD_TO_LIKES = 'ADD_TO_LIKES'
export const REMOVE_FROM_LIKES = 'REMOVE_FROM_LIKES'

export const addToLikes = (tracklist) => ({
    type: ADD_TO_LIKES,
    payload: tracklist
})

export const removeFromLikes = (tracklist) => ({
   type: REMOVE_FROM_LIKES,
   payload: tracklist
})


export const getSongsAction = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/")
            if(response.ok) {
                const { songs } = await response.json()
                dispatch({
                    type: "FETCH_SONGS",
                    payload: songs,
                })
            }else{
                console.log("error")
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const GET_SONGS = 'GET_SONGS'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const SEARCH_QUERY = 'SEARCH_QUERY'
export const GET_SONG_INFO = 'GET_SONG_INFO'
export const GET_SONG_IMG = "GET_SONG_IMG"
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"


export const getSongsAction = (artistName, category) => {
    return async (dispatch) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +artistName,
                {
                    headers: new Headers({
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                    })
                }
            )

            if (response.ok) {
                let result = await response.json();
                let songInfo = result.data;
                dispatch({
                    type: GET_SONGS,
                    payload: songInfo,
                })
                // dispatch({
                //     type: SEARCH_QUERY,
                //     payload: artistName
                // })
                // setTimeout(() => {
                //     dispatch({
                //         type: TOGGLE_LOADER,
                //         payload: false,
                //     })
                // }, 1000)
            } 
            // else {
            //     console.log('error in fetching')
            //     dispatch({
            //         type: TOGGLE_LOADER,
            //         payload: false,
            //     })
            // }
        } catch (error) {
            console.log(error)
            dispatch({
                type: TOGGLE_LOADER,
                payload: false,
            })
        }
    }
}






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
