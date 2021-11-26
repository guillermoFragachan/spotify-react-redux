export const GET_SONG_INFO = 'GET_SONG_INFO'




export const getSongInformation = (selectedJob) => ({
    type: GET_SONG_INFO,
    payload: selectedJob,
  })