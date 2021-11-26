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
