import React, { useState } from 'react';
import './BodyFilter.css';

export default function Filter(){
    const [CatItems,setCatItems]=useState(["Mobiles","TV","Dress"]);


    return (
        <div className="FilterInnerDiv">
            <div className="FilterHeader">Filters</div>
            <div className="FilterCat">
                <div className="FilterCatHeader">
                    Catergories
                </div>
                <div className="FilterCatBody">
                <div class="nav-wrapper">
                    <ul class="nav--no-borders flex-column nav">                        
                        {CatItems.map((val,i) => {
                            return <li class="nav-item" key={i}>
                                <div class="nav-link ">
                                    <span>{val}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>                   
                </div>
            </div>                
        </div>
    )
}