import React from "react";
import { connect } from 'react-redux'
import {getSongInformation} from '../store/actions/index.js'


const mapStateToProps = (state) => ({
  songInformation: state
})
const mapDispatchToProps = (dispatch) => ({
  getSongInfo:(track)=>{
    dispatch(getSongInformation(track))
  }
})

const Song = ({getSongInfo, track }) => (
  <div className="py-3 trackHover" onClick={()=>{
    getSongInfo(track)
    // console.log(track)
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
