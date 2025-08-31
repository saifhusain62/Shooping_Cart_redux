import React from 'react'

function ProductsCard({product}) {
    const {name,category,image,date,price} = product || {};
  return (
    <div className="card w-96 shadow-sm bg-white">
  <figure>
    <img
      src={image}
      alt="Shoes" 
      className='w-full h-48 object-cover'
      />
  </figure>
  <div className="card-body text-black items-center">
    <h2 className="card-title">{name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div>{date}</div>
        <div>{category}</div>
        <p className='text-xl font-semibold '>${price}</p>
    <div className="card-actions items-center justify end">
      
      <button className="btn btn-accent text-white">Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductsCard
