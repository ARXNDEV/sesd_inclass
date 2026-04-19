import React, { useState, useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {
  const [category,setCategory]=useState("All");
  const { token } = useContext(StoreContext);
  
  return (
    <div>
      <Header/>
      {token && (
        <div id="explore-menu-section">
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category}/>
        </div>
      )}
      <AppDownload/>
    </div>
  )
}

export default Home
