import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import ProfilelCard from './components/ProfileCard';


function App() {
  return (
    <>
      <div className="App relative w-[100wh] h-[100vh] bg-gray-100">
        <Navbar />
        <Hero /> <br />  <br />
        <ProfilelCard />

      </div>
    </>
  )
}

export default App