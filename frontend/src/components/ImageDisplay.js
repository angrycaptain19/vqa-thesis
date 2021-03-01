
import React, { Component } from 'react';

class ImageDisplay extends Component {
  render() {
    return (
      <>
        <img alt='Test' src={`../asset/img/${this.props.id}.jpg`}/>   
      </> 
    )
  }
}

export default ImageDisplay