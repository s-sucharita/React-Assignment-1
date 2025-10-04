import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import ProfilelCard from './components/ProfileCard';
import dummyData from './components/products';


function App() {
  return (
    <>
      <div className="App relative w-[100wh] h-[100vh] bg-gray-100">
        <Navbar />
        <Hero /> <br />  <br />
        <div className='flex flex-wrap justify-center gap-6'>
        {dummyData.map((user) =>(<ProfilelCard
          key={user.id}
          name={user.name}
          price={user.price}
          category={user.category}
          rating={user.rating}
          image={user.image}
         />))}
        </div>
      </div>
    </>
  );
}

export default App



