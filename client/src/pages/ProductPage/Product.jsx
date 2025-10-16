import React from 'react'
import "./Product.scss"
import Slider from "../../components/Slider/Slider.jsx"
import { singlePostData } from "../../dummyData.js"
import { LocationOnOutlined, CurrencyRupeeRounded } from '@mui/icons-material'
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
                        </div>
                    </div>
                </div>

            </div>
            <div className="features">
                <div className="wrapper">
                    HI
                </div>
            </div>
        </div>
    )
}

export default Product
