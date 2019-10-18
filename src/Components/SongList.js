import React from 'react'
import {connect} from 'react-redux'

class SongList extends React.Component{

  render(){
      console.log(this.props);
    return <div>SongList</div>
  };
};


//takes state form redux store and turns it into props for component
const mapStateToProps=(state)=>{
    return {songs:state.songs};
}


export default connect(mapStateToProps)(SongList);
