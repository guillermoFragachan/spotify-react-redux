import React from "react";
import { Row } from "react-bootstrap";
import { connect } from 'react-redux'
import {getSongInformation} from '../store/actions/index.js'


const mapStateToProps = (state) => ({
  songInformation: state.songInformation

})
const mapDispatchToProps = (dispatch) => ({
  
})

/*
artist: {id: 4860761, name: 'J Balvin', tracklist: 'https://api.deezer.com/artist/4860761/top?limit=50', type: 'artist'}
duration: 242
explicit_content_cover: 0
explicit_content_lyrics: 0
explicit_lyrics: false
id: 702421822
link: "https://www.deezer.com/track/702421822"
md5_image: "ef1cb84fc7b70a390d80af20768cf065"
preview: "https://cdns-preview-8.dzcdn.net/stream/c-8c27c6029bc67bc267ad64567c33d6f0-9.mp3"
rank: 967903
readable: true
title: "LA CANCIÓN"
title_short: "LA CANCIÓN"
title_version: ""
type: "track"


*/

const Player = ({songInformation}) => (

  <div class="song-navbar container-fluid ">
{  songInformation.title ?

<div class="left-song-nav ">
  <img src={songInformation.img} alt={songInformation.title}
    class="song-nav-img-resize"/>
  <div class="text-and-icons">
    <div class="text-description">
      <a href="#">
        <h5 id="navTitle">{songInformation.title}</h5>
      </a>
      <a href="#">
        <p>{songInformation.artist.name}</p>
      </a>
    </div>
    <div class="song-nav-icons">
      <img src="spotify-icons/heart.svg" class="song-nav-icons-resize pointer"/>
    </div>
  </div>
  </div>:

<div class="left-song-nav ">
<img 
  class="song-nav-img-resize"/>
<div class="text-and-icons">
  <div class="text-description">
    <a href="#">
      <h5 id="navTitle"></h5>
    </a>
    <a href="#">
      <p></p>
    </a>
  </div>
  <div class="song-nav-icons">
    <img src="spotify-icons/heart.svg" class="song-nav-icons-resize pointer"/>
  </div>
</div>
</div>

  
  
  }

  <div class="middle-song-nav">
    <div class="top-part-song-nav">
      <img src="/playerbuttons/Shuffle.png" class="pointer"/>
      <img src="/playerbuttons/Previous.png" class="pointer"/>
      <img src="/playerbuttons/Play.png" onclick="pausePlay ()" id="middle-icon" class="pointer"/>
      <img src="/playerbuttons/Next.png" class="pointer"/>
      <img src="/playerbuttons/Repeat.png" class="pointer"/>
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

 


);

export default connect(mapStateToProps, mapDispatchToProps)(Player)
