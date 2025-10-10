import React from 'react'

function Navbar({ onSearch, onSort, onFilter }) {
   

  return (
    <>
      <nav className='fixed w-full flex items-center justify-around p-4 bg-yellow-700 pt-5'>
        <div className="logo">
            <h1 className='text-white font-bold text-2xl'>✨PAITHRIKA✨</h1>   
        </div>
        <ul className="nav-links flex space-x-10">
          <li>
          <select
            className="p-2 rounded text-amber-50"
            onChange={(e) => onSort(e.target.value)}
          >
            
             <option value="">Sort By</option>
             <div class="text-black">
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
            <option value="ratingLowHigh">Rating: Low to High</option>
             </div>
          </select>
        </li>

       
        <li>
          <select
            className="p-2 rounded text-amber-50"
            onChange={(e) => onFilter(e.target.value)}
          >
            
            <option value="">All Categories</option>
            <div class="text-black">
            <option value="Earrings">Earrings</option>
            <option value="Nose Ring">Nose Ring</option>
            <option value="Anklets">Anklets</option>
            <option value="Chain">Chain</option>
            <option value="Bangles">Bangles</option>
            <option value="Maati">Maati</option>
            <option value="Nettichutti">Nettichutti</option>
            </div>
          </select>
        </li>
        
        <li>
          <input
            type="text" className="p-2 rounded bg-amber-50" placeholder="Search here..." onChange={(e) => onSearch(e.target.value)}
          />
        </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
