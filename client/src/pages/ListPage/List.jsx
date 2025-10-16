import React from 'react'
import "./List.scss"
import { listData } from '../../dummyData.js'
import Filter from "../../components/Filter/Filter"
import Card from "../../components/Card/Card.jsx";
import Map from "../../components/Map/Map.jsx"

function List() {
  const items=listData;
  return (
    <div className="list">
      <div className="product-container">
        <div className="wrapper">
          <Filter/>
          {items.map((item)=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={items}/>
      </div>
    </div>
  )
}

export default List
