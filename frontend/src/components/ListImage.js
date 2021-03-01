
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageDisplay from '../components/ImageDisplay'
import FormQuestion from '../components/FormQuestion'
class ListImage extends Component {

    render() {
        let arrayImage = []
        for (let i = 1; i <= 12; i++)
        {
            arrayImage.push(i)
        }
        return (
            <>
                <Carousel>
                {
                    arrayImage.map((idx, index) =>  <div key={index}>
                        <ImageDisplay key={index}  id={idx}/>
                        <p className="legend">Picture {idx}</p>
                    </div>)
                }
                </Carousel>
                <FormQuestion/>
            </>
        );
    }
}
export default ListImage