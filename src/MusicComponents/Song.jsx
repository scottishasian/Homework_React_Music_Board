import React from 'react';

class Song extends React.Component {

  render() {
    return(
      <div className='song'>
        <h4>
          {/* {this.props.songName} */}
          <a href={this.props.link}>
            {this.props.songName}
          </a>
        </h4>
        {this.props.children}

      </div>
    )
  }
}

export default Song;
