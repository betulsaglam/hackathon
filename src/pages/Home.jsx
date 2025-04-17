import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { API_KEY } from '../constants/secret';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.jotform.com/form/251063264709961/properties?apiKey=${API_KEY}`).then(res => res.json()).then(res => {
            console.log(res.content.products);
            const data = res.content.products.map(p => ({ ...p, images: JSON.parse(p.images)}));
            setData(data);
        });
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto justify-center">
                {data.map((product) => (
                <ProductCard key={product.pid} product={product} />
                ))}
            </div>
        </div>
    );

};

export default Home;
