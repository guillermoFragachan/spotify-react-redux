export const GET_SONGS = 'GET_SONGS'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const SEARCH_QUERY = 'SEARCH_QUERY'


export const getSongsAction = (artistName, category) => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +artistName,
                {
                    headers: new Headers({
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                    }),
                }
            )

            if (response.ok) {
                let result = await response.json();
                let songInfo = result.data;
                // console.log(songInfo)
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