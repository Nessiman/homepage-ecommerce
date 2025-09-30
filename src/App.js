import React from 'react';
import Navbar from "./Components/Navbar.js"
import Slideshow from './Components/Slideshow.js';
import TodayHotSales from './Components/TodayHotSales.js';
import BrowseByCategory from './Components/BrowseByCategory.js';
import BestSellingProducts from './Components/BestSellingProducts.js';
import NewArrival from './Components/NewArival.js';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import PromoSection from './Components/Promotion.js';
import ExploreProducts from './Components/ExploreOurProducts.js';
import DetailPage from './Components/DetailPage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <TodayHotSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <PromoSection />
      <ExploreProducts />
      <NewArrival />
      <About />
      <Footer/>
    </div>
  );
}



export default App;
