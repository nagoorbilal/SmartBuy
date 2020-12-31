import React,{useEffect, useState, useReducer} from 'react';
import {withRouter} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Card2 from '../Card/Card2';

function AllCatergories(props){
    const [Type,setType]=useState("");
    let MobileObj=[
        {
            id:1523,
            title:"Samsung S20 plus",
            description:"In good Condition with bill & box",
            image:"https://picsum.photos/500/300/?image=5",
            price:"75,000",
            wishList:true,
            offer:10,
        },
        {
            id:15254,
            title:"Note 20 plus",
            description:"In good Condition with bill & box",
            image:"https://economictimes.indiatimes.com/thumb/msid-77693773,width-1200,height-900,resizemode-4,imgsize-281950/if-you-can-charge-samsung-galaxy-note-20-ultra-daily-its-design-and-features-can-keep-you-amped-up-.jpg?from=mdr",
            price:"90,000",
            wishList:false
        },
        {
            id:65432,
            title:"IPhone 11 pro",
            description:"In good Condition with bill & box",
            image:"https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg",
            price:"1,20,000",
            wishList:true,
            offer:5,
        },
        {
            id:789654,
            title:"Vivo V20",
            description:"In good Condition with bill & box",
            image:"https://i.gadgets360cdn.com/large/vivo_v20_image_1602489106407.jpg?downsize=950:*&output-quality=80",
            price:"20,000",
            wishList:false
        },
        {
            id:456987,
            title:"Oppo F15",
            description:"In  good Condition with bill & box",
            image:"https://images-na.ssl-images-amazon.com/images/I/61pkD%2BsYp5L._SL1500_.jpg",
            price:"15,000",
            wishList:true
        },
        {
            id:45698547,
            title:"Redmi K20",
            description:"In  good Condition with bill & box",
            image:"https://images-na.ssl-images-amazon.com/images/I/61pkD%2BsYp5L._SL1500_.jpg",
            price:"15,000",
            wishList:false,
            offer:50,
        }
    ];
    let FurObj=[
        {
            id:1523,
            title:"Chair",
            description:"In good Condition ",
            image:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2222715.jpg",
            price:"8,000",
            wishList:true,
            offer:10,
        },
        {
            id:65432,
            title:"Dining Table",
            description:"In good Condition",
            image:"https://images-na.ssl-images-amazon.com/images/I/61nKGKkNHeL._SL1204_.jpg",
            price:"1,20,000",
            wishList:true,
            offer:5,
        },
        {
            id:15254,
            title:"King Size Bed",
            description:"In good Condition",
            image:"data:image/jpeg;base64,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",
            price:"90,000",
            wishList:false
        },
        {
            id:65432,
            title:"Sofa",
            description:"In good Condition",
            image:"https://5.imimg.com/data5/BH/LL/MY-7572617/sofa-set-500x500.jpg",
            price:"1,20,000",
            wishList:true,
            offer:5,
        },
        {
            id:789654,
            title:"Table",
            description:"In good Condition",
            image:"https://cdn.shopify.com/s/files/1/0191/2234/products/Honeycopy_780a3dc5-635f-491c-b573-7486c8052690_2048x.jpg?v=1591138621",
            price:"20,000",
            wishList:false
        },
    ];
    useEffect(()=> {
        let splitHash = props.location.pathname.split("/");
        setType(splitHash[2]);
    },[props.location]);    

    function Catergories(){
        if(Type === 'furniture'){
            return (FurObj);
        }else if(Type === 'mobile'){
            return (MobileObj);
        }else{
            return [];
        }
    }



    return (
        <React.Fragment>
            <Grid container spacing={0} className="BannerGrid">
                <Grid item xs={false} md={3} key="content">
                    <div style={{marginTop:100}}>Hai
                    </div>
                </Grid>
                <Grid item xs={12} md={9} key="content">
                    <div style={{marginTop:100}}>
                        <Card2 Items={Catergories()}/>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withRouter(AllCatergories);