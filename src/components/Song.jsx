import React from "react";
import { connect } from 'react-redux'
import {getSongInformation, getSongImage} from '../store/actions/index.js'


const mapStateToProps = (state) => ({
  songInformation: state
})
const mapDispatchToProps = (dispatch) => ({
  getSongInfo:(track)=>{
    dispatch(getSongInformation(track))
  },
  getImage:(img)=>{
    dispatch(getSongImage(img))
  }
})
   



const Song = ({getSongInfo, track, img, getImage  }) => (
  
  <div className="py-3 trackHover" onClick={()=>{

    getSongInfo(track)
    getImage(img)

  }}>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
      
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(Song)
