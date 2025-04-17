import React from 'react';

const ProductCard = ({ product }) => (
    <div className='border rounded-2xl shadow-md p-4 hover:shadow-lg transition cursor-pointer'>
        <div className='flex gap-4'>
            <img className='w-20 h-20 rounded' src={product.images[0]}/>
            <div className='flex flex-col'>
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-600 mb-1'>{product.description}</p>
                <p className='text-gray-500 font-bold'>{`$${product.price}`}</p>
            </div>
        </div>
    </div>
);

export default ProductCard;
