import React from 'react'
import MusicList from './MusicList.jsx';

class MusicBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      music: []
    }
  }

  componentDidMount() {
    console.log("Component Did Mount");
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const songs = JSON.parse(jsonString);
      this.setState({music: songs.feed.entry});
    })
  }

  render() {
    return(
      <div className="music-box">
        <h1>Music Box</h1>
        <MusicList music={this.state.music}/>
      </div>
    )

  };

}

export default MusicBox;
