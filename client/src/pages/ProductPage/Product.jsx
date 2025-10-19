import React from 'react'
import "./Product.scss"

import Slider from "../../components/Slider/Slider.jsx"
import { singlePostData, userData } from "../../dummyData.js"
import Map from "../../components/Map/Map.jsx"
import { LocationOnOutlined, CurrencyRupeeRounded, Construction, Pets, Savings, AspectRatio, BedOutlined, BathtubOutlined, DirectionsBus, LocalDining, ChatOutlined,  School, BookmarkBorder } from '@mui/icons-material'
function Product() {
    const data = singlePostData;
    return (
        <div className='product'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={data.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{data.title}</h1>
                                <div className="address">
                                    <LocationOnOutlined fontSize='small' />
                                    <span>{data.address}</span>
                                </div>
                                <div className="price">
                                    <CurrencyRupeeRounded fontSize='small' />
                                    <span>{data.price}</span>
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ad mollitia deserunt reiciendis consequuntur. Porro quos impedit ducimus perferendis. Quia ut tempore asperiores quasi, modi totam expedita nisi fugiat. Possimus.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <Construction/>
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <Pets/>
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <Savings/>
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <AspectRatio/>
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <BedOutlined/>
                            <span>2 bedroom</span>
                        </div>
                        <div className="size">
                            <BathtubOutlined/>
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <School/>
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <DirectionsBus/>
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <LocalDining/>
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <ChatOutlined/>
                            Send a Message
                        </button>
                        <button>
                            <BookmarkBorder sx={{color:'black'}}/>
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Product
