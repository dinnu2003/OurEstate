import React from 'react'
import './Home.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
function Home() {
  return (
    <div className='home'>
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt minus voluptatum placeat quisquam illo excepturi mollitia repudiandae voluptas nostrum cupiditate illum facere quam et fugit itaque, provident corrupti earum.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h3>years of Experiences</h3>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h3>years of Experience</h3>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h3>years of Experience</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src="bg.png" />
      </div>
    </div>
  )
}

export default Home
