import React from 'react';
import Song from './Song.jsx'

class MusicList extends React.Component {

  render() {

    console.log("Music:", this.props.music);

    const musicNodes = this.props.music.map(function(tune) {
      return(
        <Song key={tune['id'].attributes['im:id']}
          songName={tune['im:name'].label}
          link={tune['id'].label}>

          <div id="song-artist">
            {tune['im:artist'].label}
            <img src={tune['im:image'].label}/>
          </div>

          <div id="price">
            {tune['im:price'].label}
          </div>
        </Song>
      )

    })

    return (
      <div className="music-list">
        {musicNodes}
      </div>
    )
  }

}

export default MusicList;
