import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import dummyData from './components/products';
import Footer from './components/Footer';

function App() {
  
  const [products, setProducts] = useState(dummyData);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    let filtered = [...dummyData];


    if (searchText) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

   
    if (filterCategory) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

  
    if (sortType === "priceLowHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHighLow") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === "ratingHighLow") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "ratingLowHigh") {
      filtered.sort((a, b) => a.rating - b.rating);
    }

    setProducts(filtered);
  }, [searchText, sortType, filterCategory]);

  return (
    <>
      <div className="App relative w-[100vw] h-[100vh] bg-gray-100">
        
        
        <Navbar
          onSearch={setSearchText}
          onSort={setSortType}
          onFilter={setFilterCategory}
        />

        <Hero /> <br /> <br />

        <div className="flex flex-wrap justify-center gap-6">
          {products.length > 0 ? (
            products.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                price={user.price}
                category={user.category}
                rating={user.rating}
                image={user.image}
              />
            ))
          ) : (
            <p className="text-gray-600 text-lg">No products found</p>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
