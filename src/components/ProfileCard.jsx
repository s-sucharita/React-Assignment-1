import React, { useState } from "react";
import Products from './products';

function ProfileCard(props) {
 

return (
    <div className="card flex flex-col transform transition duration-300 hover:scale-103 hover:shadow-2xl items-center w-full sm:w-1/2 lg:w-1/3 mb-10 p-4 rounded-xl bg-gray-300 text-center shadow-lg">
        <img
            className="card-image mx-auto h-40 w-40 object-cover"
            src={props.image}
            alt={props.name}
        />
        <h2 className="card-name mt-4 text-2xl font-bold text-gray-800">{props.name}</h2>
        <p className="card-price text-md text-gray-500">Price : ₹ {props.price}</p>
        <p className="card-category text-md text-gray-500">Category : {props.category}</p>
        <p className="card-rating">Rating : {props.rating}</p>
        <button
            onClick={() => console.log(props.name, "Added to cart")} // Add your add-to-cart products here
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Add to Cart
          </button>
    </div>
)
}

export default ProfileCard;
