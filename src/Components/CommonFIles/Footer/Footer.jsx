import React from 'react';
import './Footer.scss';

export default function Footer(){
    return (
        <div>            
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h6>Company</h6>
                        <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Sell on Smart Buyy</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Products</h6>
                        <ul>
                        <li>Mobiles</li>
                        <li>Mobile Asscessories</li>
                        <li>TV</li>                
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Accounts</h6>
                        <ul>
                        <li>My Account</li>
                        <li>My Cart</li>
                        <li>My Wishlist</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Support</h6>
                        <ul>
                        <li>Mobile Services</li>                    
                        <li>Contact us</li>
                        <li>Chat with us</li>
                        </ul>
                    </div>                   
                    <div className="clearfix"></div>
                </div>
                <div className="FooterDescMain">
                    <hr className="hr"/>
                    <p className="FooterDesc"><a href="http://localhost:3000">Smart Buyy</a> © 2020</p>
                </div>
            </div>
       </div>
    )
}