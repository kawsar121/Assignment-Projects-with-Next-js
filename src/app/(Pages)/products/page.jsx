"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch Product
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <p>
        <span className="loading loading-ring loading-xl justify-items-center flex mx-auto mt-44"></span>
      </p>
    );
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mb-14">
      {/* <h1 className="text-center my-3 text-xl font-semibold">All Products </h1> */}
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 dark:border-gray-700 p-6 md:p-8 rounded-2xl shadow-md dark:shadow-none bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-56 mx-auto h-48 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h2 className="text-base md:text-lg font-bold mt-4 text-gray-900 dark:text-gray-100 flex-grow">
              {item.title}
            </h2>

            {/* price and category */}
            <div className="flex justify-between mt-3 items-center">
              <p className="text-gray-800 dark:text-gray-200 text-base font-semibold">
                ${item.price}
              </p>
              <p className="uppercase text-gray-500 dark:text-gray-400 text-sm tracking-wider">
                {item.category}
              </p>
            </div>

            {/* Details Button */}
            <Link
              href={`/products/${item.id}`}
              className="mt-5 bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 text-center rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition font-medium"
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
