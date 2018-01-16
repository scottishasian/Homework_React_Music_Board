import React from 'react';
import Song from './Song.jsx'

class MusicList extends React.Component {

  render() {

    console.log("Music:", this.props.music);

    const musicNodes = this.props.music.map(function(tune) {
      return(
        <Song songName={tune['im:name'].label}>
          {/* <div id="song-artist">
            {song.artist}
          </div> */}
        </Song>
      )

    })

    return (
      <div className="movie-list">
        {musicNodes}
      </div>
    )
  }

}

export default MusicList;
