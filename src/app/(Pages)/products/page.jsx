"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    // Fetch Product
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=> res.json())
        .then(data=>{
            console.log(data.products)
            setProducts(data.products)
            setLoading(false)
        })
    },[])
    if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>This is Products Page</h1>
      <div>
        {
            products.map((iteam) => <p key={iteam.id}>{iteam.title}</p>)
        }
      </div>
    </div>
  );
};

export default Products;
