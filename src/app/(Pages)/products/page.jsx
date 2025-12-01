"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Product
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>This is Products Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-10 rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {/* IMAGE WRAPPER */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>

            {/* PRICE */}
            <p className="text-gray-700 text-base font-medium">${item.price}</p>

            {/* BUTTON */}
            <Link
              href={`/products/${item.id}`}
              className="inline-block mt-4 bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
