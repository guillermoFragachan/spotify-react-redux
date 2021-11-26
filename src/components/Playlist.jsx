import React from "react";
import { connect } from 'react-redux'
import { Row, Col } from "react-bootstrap";
import Song from './Song'



const mapStateToProps = (state) => ({
  songs: state.playlist
})
const mapDispatchToProps = (dispatch) => ({
 
})
   



const Playlist = ({ songs }) => (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
    <Row>
    <Col xs={10}>
      <div id="searchResults">
        <h2>Playlist</h2>
        <div className=" py-3">
            

            {
                songs.map((song)=>{
                   return <Song track={song} key={song.id}  />

                })
            }
        </div>
      </div>
    </Col>
  </Row>
  </Col>

);


export default connect(mapStateToProps, mapDispatchToProps)(Playlist)