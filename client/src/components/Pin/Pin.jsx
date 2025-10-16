import React from 'react'
import { Marker, Popup } from "react-leaflet"
import { Link } from 'react-router'
import "./Pin.scss"
function Pin({item}) {
    return (
        <Marker position={[item.latitude,item.longitude]}>
            <Popup>
                <div className="popup-container">
                    <div className="img-container">
                        <img src={item.img}/>
                    </div>
                    <div className="text-container">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span >{item.bedroom} bedrooms</span>
                        <b>${item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin
