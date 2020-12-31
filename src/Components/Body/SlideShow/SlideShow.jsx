import React from 'react';
import Carousel from "react-material-ui-carousel"
import './SlideShow.scss';

import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12} md={12 / totalItems} sm={12 / totalItems} lg={12 / totalItems}  key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    Explore Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={false}  md={12 / totalItems} sm={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "iPhone",
        Caption: "At very low price",
        contentPosition: "left",
        Items: [
            {
                Name: "11 Pro Max",
                Image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-5.jpg"
            },
            {
                Name: "iPhone SE",
                Image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-og?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1585603351523"
            }
        ]
    },
    {
        Name: "Samsung",
        Caption: "At very low price",
        contentPosition: "middle",
        Items: [
            {
                Name: "S20",
                Image: "https://images.samsung.com/in/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg"
            },
            {
                Name: "Note 20",
                Image: "https://images.samsung.com/in/smartphones/galaxy-note20/images/galaxy-note20_highlights_kv_video_end.jpg"
            }
        ]
    },
    {
        Name: "Redmi",
        Caption: "At very low price",
        contentPosition: "right",
        Items: [
            {
                Name: "Note 9 Pro Max",
                Image: "https://images.firstpost.com/wp-content/uploads/large_file_plugin/2020/08/1597303694_RedmiNote9Pro24x3.jpg"
            },
            {
                Name: "K20 Pro",
                Image: "https://i.gadgets360cdn.com/large/Redmi_K20_Pro_Back_1563446848447.jpg"
            }
        ]
    },
    {
        Name: "Realme",
        Caption: "At very low price",
        contentPosition: "left",
        Items: [
            {
                Name: "Realme 7 pro",
                Image: "https://i.gadgets360cdn.com/large/realme_7_pro_review_back_1599208128978.jpg"
            },
            {
                Name: "X2 Pro",
                Image: "https://fdn.gsmarena.com/imgroot/reviews/19/realme-x2-pro/lifestyle/-727w2/gsmarena_013.jpg"
            }
        ]
    }
]

export default function BannerExample(){

    return (
        <div style={{width:"100%",marginTop:-15}}>
                <Carousel
                    className="Example"
                    autoPlay={true}
                    timer={1500}
                    animation={"slide"}
                    indicators={false}
                    timeout={400}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}
                >
                    {items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
                    })}
                </Carousel>
        </div>
    )
}