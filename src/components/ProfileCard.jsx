import React from 'react'
import Products from './products';

function ProfileCard(props) {
return (
    <div className="card flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 mb-10 p-4 rounded-xl bg-white text-center shadow-lg">
        <img
            className="card-image mx-auto h-40 w-40 rounded-full object-cover"
            src={props.image}
            alt={props.name}
        />
        <h2 className="card-name mt-4 text-2xl font-bold text-gray-800">{props.name}</h2>
        <p className="card-price text-md text-gray-500">Price : ₹ {props.price}</p>
        <p className="card-category text-md text-gray-500">Category: {props.category}</p>
        <p className="card-rating">{props.rating}</p>
    </div>
)
}

export default ProfileCard
