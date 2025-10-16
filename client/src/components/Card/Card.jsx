import React from 'react'
import { Link } from "react-router-dom"
import "./Card.scss"
import { LocationOnOutlined, BedOutlined, BathtubOutlined, ChatOutlined, CurrencyRupeeRounded, BookmarkBorder } from '@mui/icons-material';

function Card({ item }) {
    return (
        <div className='card'>
            <Link to={`/${item.id}`} className='image-container'>
                <img src={item.img} alt='' />
            </Link>
            <div className="text-container">
                <div className="top">
                    <h2 className="title">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className='adress'>
                        <LocationOnOutlined fontSize='small'/>
                        <span>{item.address}</span>
                    </p>
                    <p className='price'>
                        <CurrencyRupeeRounded fontSize='small'/>
                        <span>{item.price}</span>
                    </p>
                    
                </div>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <BedOutlined/>
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="feature">
                            <BathtubOutlined/>
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                        <button><BookmarkBorder sx={{color:'black'}}/></button>
                        <button><ChatOutlined/></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
