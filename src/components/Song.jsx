import React from "react";
import { Button } from "react-bootstrap";
import {BsSuitHeart,BsSuitHeartFill} from "react-icons/bs"
import { addToLikes, removeFromLikes } from "../store/actions";
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const mapStateToProps = (s) => s

const mapDispatchToProps = (dispatch) => ({
  addToLikesFeature: (tracklist) => dispatch(addToLikes(tracklist)),
  removeFromLikesFeature: (tracklist) => dispatch(removeFromLikes(tracklist))
})


const Song = ({ track, likes, addToLikesFeature, removeFromLikesFeature }) => {

  const ifLiked = likes.elements.includes(track.title)
  const toggleLike = () => {
    console.log(track.title)
    ifLiked
    ? removeFromLikesFeature(track.title)
    : addToLikesFeature(track.title)
  }

return(
  <div className="py-3 trackHover">
    <span>
      {ifLiked ? (
       <BsSuitHeartFill onClick={toggleLike} color="red" />
      ): (
        <BsSuitHeart onClick={toggleLike} color="red" />
      )
      }
    </span>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title} 
import { connect } from "react-redux";
import { getSongInformation, getSongImage, addToPlaylist } from "../store/actions/index.js";

const mapStateToProps = (state) => ({
  songInformation: state,
});
const mapDispatchToProps = (dispatch) => ({
  getSongInfo: (track) => {
    dispatch(getSongInformation(track));
  },
  getImage: (img) => {
    dispatch(getSongImage(img));
  },
  addToPlaylist: (selectedSong)=>{
    dispatch(addToPlaylist(selectedSong))
  }
});

const Song = ({ getSongInfo, track, img, getImage, addToPlaylist }) => (
  <div className="py-3 trackHover">
   
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <a
      
      onClick={() => {
        getSongInfo(track);
        getImage(img);
      }}
    >
      <img className="icon" src="/playerbuttons/Play.png" alt="shuffle" />
    </a>




    <a style={{color:"white", marginLeft:"20px"}} onClick={()=>{
      addToPlaylist(track)
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
  <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
    </a>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>

  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
