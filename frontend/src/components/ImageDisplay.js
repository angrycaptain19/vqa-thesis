
import React, { Component } from 'react';

class ImageDisplay extends Component {
  render() {
    return (
      <>
        <img alt='Test' src={`img/${this.props.id}.jpg`}/>   
      </> 
    )
  }
}

export default ImageDisplay