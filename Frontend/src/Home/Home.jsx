import React from 'react';
import Navbar from '../components/Navbar';
import Freebok from '../components/Freebok';
import Banner from "../components/Banner";
import Footer from "../components/Footer"


function Home() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <Freebok/>
    <Footer/></>
  )
}

export default Home
