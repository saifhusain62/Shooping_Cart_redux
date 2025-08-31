import React from 'react'

function AddProducts() {
  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4 text-black'>Add New Products</h2>

      <form className='space-y-3'>
        {/* NAME */}
        <div>
            <label className='text-sm font-medium block text-gray-600'>Product Name:</label>
            <input type="text" name="name" id="name" placeholder='product' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border-1 focus:outline focus:ring-1 focus:ring-indigo-500'/>
        </div>

        {/* CATEGORY */}
        <div>
            <label className='text-sm font-medium block text-gray-600'>Category:</label>
            <select name="category" id="category" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border-1 focus:outline focus:ring-1 focus:ring-indigo-500'>
                <option value="">Choose a category</option>
                <option value="fashion">Fashion</option>
                <option value="gadgets">Gadgets</option>
                <option value="bags">Bags</option>
            </select>
        </div>

        {/* Products Image Url */}
        <div>
            <label className='text-sm font-medium block text-gray-600'>Image URL:</label>
            <input type="text" name="image" id="image" placeholder='http://' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border-1 focus:outline focus:ring-1 focus:ring-indigo-500'/>
        </div>

        {/* Price & date */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-medium block text-gray-600'>Image URL:</label>
            <input type="number" name="price" id="price" placeholder='$' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border-1 focus:outline focus:ring-1 focus:ring-indigo-500'/>
        </div>
        <div>
            <label className='text-sm font-medium block text-gray-600'>Upload Date:</label>
            <input type="date" name="date" id="date"  className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border-1 focus:outline focus:ring-1 focus:ring-indigo-500'/>
        </div>

        </div>

        <button type='submit' className='btn btn-accent items-center text-white w-full'>Add Product</button>

      </form>
    </div>
  )
}

export default AddProducts
