import React from 'react';
import './Body.css';
import Filter from '../BodyFilter/BodyFilter';
import Carousel from './SlideShow/SlideShow';
// import Card from '../Card/Card';


export default function Body(){
    
    return (
        <div className="BodyContainer">
            {/* <div className="FilterDiv">
                <Filter/>
            </div>            
            <div className="BodyDiv">
                <div className="BodyInnerDiv">
                    Body
                </div>
            </div> */}
            <Carousel />
            {/* <Card/> */}            
        </div>
    )
}