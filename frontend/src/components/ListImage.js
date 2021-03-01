import React, { Component } from 'react';
import ImageDisplay from '../components/ImageDisplay'

class ListImage extends Component {
  constructor() {
    super()
    this.LIMIT = 3;
    this.state = {
        page: 0,
    }
    
  }
  render() {
    const renderImages = [];
    for(let i = this.state.page*this.LIMIT; i < this.state.page*this.LIMIT + this.LIMIT; i++) {
            renderImages.push(<ImageDisplay id={i}/>);
    }
    return(
        <div>
             
            {/* <img src="https://imgur.com/8EUftjq.jpg"/>    */}
            
            {renderImages}
        </div>
    ); 
    
  }
}

export default ListImage