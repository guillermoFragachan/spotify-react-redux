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
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps) (Song)
