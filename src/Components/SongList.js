import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{
  renderList(){
    return this.props.songs.map((song)=>{
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }


  render(){
    return <div className="ui divided list">{this.renderList()}</div>
  };
};


//takes state form redux store and turns it into props for component
const mapStateToProps=(state)=>{
  //songs is now a prop for SongList
    return {songs:state.songs};
}

//dispatch (of redux) is happening behind the scenes. Action creaters passed into connect function automatically get dispatched when called.
export default connect(mapStateToProps,{selectSong:selectSong})(SongList);
