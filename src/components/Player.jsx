import React from "react";
import { Row } from "react-bootstrap";
import { connect } from 'react-redux'
import {getSongInformation} from '../store/actions/index.js'


const mapStateToProps = (state) => ({
  songInformation: state.songInformation
})
const mapDispatchToProps = (dispatch) => ({
  
})



const Player = ({songInformation}) => (
  // <div className="container-fluid fixed-bottom bg-container pt-1">
  //   <Row>
  //     <div className="col-lg-10 offset-lg-2">
  //       <Row>
  //         {console.log(songInformation)}
  //         <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
  //           <Row>
  //             <a href="/">
  //               <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
  //             </a>
  //             <a href="/">
  //               <img src="/playerbuttons/Previous.png" alt="shuffle" />
  //             </a>
  //             <a href="/">
  //               <img src="/playerbuttons/Play.png" alt="shuffle" />
  //             </a>
  //             <a href="/">
  //               <img src="/playerbuttons/Next.png" alt="shuffle" />
  //             </a>
  //             <a href="/">
  //               <img src="/playerbuttons/Repeat.png" alt="shuffle" />
  //             </a>
  //           </Row>
  //         </div>
  //       </Row>
  //       <Row className="justify-content-center playBar py-3">
  //         <div className="col-8 col-md-6">
  //           <div id="progress">
  //             <div
  //               className="progress-bar"
  //               role="progressbar"
  //               aria-valuenow={0}
  //               aria-valuemin={0}
  //               aria-valuemax={100}
  //             ></div>
  //           </div>
  //         </div>
  //       </Row>
  //     </div>
  //   </Row>
  // </div>

  <div class="song-navbar container-fluid ">
  <div class="left-song-nav ">
    <img src="https://i.scdn.co/image/ab67616d0000b27358aa659299939bc52a2dbc22" alt="Group 'Queen' album cover"
      class="song-nav-img-resize"/>
    <div class="text-and-icons">
      <div class="text-description">
        <a href="#">
          <h5 id="navTitle">Another One Bites The Dust - Remastered 2011</h5>
        </a>
        <a href="#">
          <p>Queen</p>
        </a>
      </div>
      <div class="song-nav-icons">
        <img src="spotify-icons/heart.svg" class="song-nav-icons-resize pointer"/>
      </div>
    </div>
  </div>

  <div class="middle-song-nav">
    <div class="top-part-song-nav">
      <img src="spotify-icons/shuffle.png" class="pointer"/>
      <img src="spotify-icons/previous-2.png" class="pointer"/>
      <img src="spotify-icons/play-button.png" onclick="pausePlay ()" id="middle-icon" class="pointer"/>
      <img src="spotify-icons/previous-3.png" class="pointer"/>
      <img src="spotify-icons/loop.png" class="pointer"/>
    </div>
    <div class="btm-part-song-nav">
      <p id="currentDuration">0:00</p>
      <input type="range" onchange=" progress()" value='0' name="progress-song" class="song-bar-line pointer"
        id="pb"/>


      <p id="totalduration">3:34</p>
    </div>
  </div>

  <div class="right-song-nav">
    <div class="icons-combo">
      <img src="spotify-icons/list.png" id="first-icon" class="pointer"/>
      <img src="spotify-icons/responsive.png" class="pointer"/>
      <img src="spotify-icons/audio.png" onclick="mute()" class="pointer" id='mute'/>
      <input class="volume-line pointer" type="range" value="50" onchange="volume(event)"/>

    </div>
  </div>
</div>


);

export default connect(mapStateToProps, mapDispatchToProps)(Player)
