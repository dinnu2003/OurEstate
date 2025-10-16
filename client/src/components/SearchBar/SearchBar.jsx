import React, { useState } from 'react'
import "./SearchBar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function SearchBar() {
    const [query,setQuery]=useState({
        type:"Buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })
    const handleType=(e)=>{
        setQuery((prev)=>({...prev,type:e.target.value}));
    }
    
  return (
    <div className="searchBar">
      <div className="type">
        <button className={query.type==="Buy"?"but active":"but"} onClick={handleType} value="Buy">Buy</button>
        <button className={query.type==="Rent"?"but active":"but"}  onClick={handleType} value="Rent">Rent</button>
      </div>
      <form>
        <input
        type="text"
        name="location"
        placeholder='Your city'/>
        <input
        type="number"
        name="minPrice"
        min={0}
        max={10000000}
        placeholder='Min Price'/>
        <input
        type="number"
        name="maxPrice"
        min={0}
        max={10000000}
        placeholder='Max Price'/>
        <button>
            <SearchRoundedIcon/>

        </button>
      </form>
    </div>
  )
}

export default SearchBar
