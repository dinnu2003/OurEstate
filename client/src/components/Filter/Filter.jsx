import React from 'react'
import "./Filter.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Filter() {
    const property = ["any", "Apartment", "House", "Land", "Villa"]
    return (
        <div className='filter'>
            <h1>Search results for London</h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' name="city" placeholder='Location' />
                </div>

            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor='type' >Type</label>
                    <select id='type'>
                        <option>any</option>
                        <option>Buy</option>
                        <option>Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor='property' >Property</label>
                    <select id='property'>
                        {property.map(item => (
                            <option key={item} >{item}</option>
                        ))}
                    </select>
                </div>
                <div className="item">
                    <label htmlFor='minPrice'>Min</label>
                    <input type='number' id='minPrice' name="minPrice" placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor='maxPrice'>Max</label>
                    <input type='number' id='maxPrice' name='maxPrice' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor='bedroom'>Bedroom</label>
                    <input type='number' id='bedroom' placeholder='any' />
                </div>
                <button><SearchRoundedIcon/></button>

            </div>


        </div>
    )
}

export default Filter
