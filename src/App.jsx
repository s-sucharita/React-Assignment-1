import React from 'react'
import './App.css';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import dummyData from './components/products';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="App relative w-[100vw] h-[100vh] bg-gray-100">
        <Navbar />
        <Hero /> <br />  <br />
        <div className='flex flex-wrap justify-center gap-6'>
        {dummyData.map((user) =>(<ProfileCard
          key={user.id}
          name={user.name}
          price={user.price}
          category={user.category}
          rating={user.rating}
          image={user.image}
          
         />))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App



