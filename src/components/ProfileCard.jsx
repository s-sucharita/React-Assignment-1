import React from 'react'

function ProfileCard(props) {
  return (
    
      <div class="card w-100 rounded-xl bg-white p-6 text-center shadow-lg">
        <img class ='card-image mx-auto h-40 w-40 rounded-full object-cover' src={props.image} alt={props.name} /> 
        <h2 class ='card-name mt-4 text-2xl font-bold text-gray-800'>{props.name}</h2>
        <p class ='card-price text-md text-gray-500'>Price : ₹ {props.price}</p>
        <p class ='card-category text-md text-gray-500'>Category: {props.category}</p>
        <p class ='card-rating'>{props.rating}</p>
    </div>
  )
}

export default ProfileCard
