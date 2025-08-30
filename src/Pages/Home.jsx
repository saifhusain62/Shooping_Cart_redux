import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from '../Components/ProductsCard';

function Home() {
   
   const products = useSelector((state)=>state.products);
   console.log(products);
  


  return (
    <div className='py-8 '>
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>
                <div className='grid lg:grid-cols-2 gap-4 gap-y-8'>
                  {
                    products.length ? products.map((product,i)=>(
                      <ProductsCard key={i} product={product}/>
                    )):<p>No Products</p>
                  }
                </div>
                </div>

            <div>
                Add New Products
                </div>
       </div>
    </div>
  )
}

export default Home
