import React from 'react'
import {connect} from 'react-redux';

const SongDetail =({selectedSong})=>{
  if (!selectedSong){
    return(
      <div>
        <h4>Select a Song</h4>
      </div>
    );
  };
    return (
      <div>
        <h4>Details For:</h4>
        <div>
          {selectedSong.title}
        </div>
        <div>
          Duration : {selectedSong.duration}
        </div>
      </div>
    );
};

const mapStateToProps=(state)=>{
  //selectedSong is now a prop for SongDetail
  return {selectedSong:state.selectedSong};
}


export default connect(mapStateToProps)(SongDetail);
