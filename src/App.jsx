import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navigation";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import dummyData from "./components/products";
import Footer from "./components/Footer";

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
    <div className="App min-h-screen w-full bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 text-gray-800 font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar
        onSearch={setSearchText}
        onSort={setSortType}
        onFilter={setFilterCategory}
      />

      {/* Hero Section */}
      <section className="pt-20 px-4">
        <Hero />
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6 font-serif">
          🌸 Our Featured Products 🌸
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
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
            <p className="text-gray-700 text-lg bg-white px-6 py-3 rounded-lg shadow-md">
              No products found 💔
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
