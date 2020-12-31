import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Body from "../Body/Body";
import Footer from './Footer/Footer';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import AllCategories from '../AllCategories/AllCategories';



function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                    <Switch>                    
                        <Route exact path={'/'} component={Body}/>
                        <Route exact path={'/all-categories/'} component={AllCategories}/>
                        <Route exact path={'/all-categories/:type'} component={() => <AllCategories />}/>
                        <Route exact path={'/services'} component={Services}/>
                        <Route exact path={'/contact-us'} component={ContactUs}/>
                        {/* <Route exact path={'/products/:id'} component={ProductDetail}/>
                        <Route exact patr={'/cart'} component={ShoppingCart}/> */}
                    </Switch>
                <Footer/>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default Routes;
