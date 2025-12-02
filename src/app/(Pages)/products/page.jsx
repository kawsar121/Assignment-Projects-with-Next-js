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
      .finally(() => setLoading(false))
  }, []);
  if (loading) return <p><span className="loading loading-ring loading-xl justify-items-center flex mx-auto mt-44"></span></p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
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
            className="border p-10 md:p-12 rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-4 flex-grow">
              {item.title}
            </h2>

            {/* PRICE + CATEGORY (always stick together) */}
            <div className="flex justify-between mt-3">
              <p className="text-gray-700 text-base font-medium">
                ${item.price}
              </p>
              <p className="uppercase text-gray-600">{item.category}</p>
            </div>

            {/* BUTTON always bottom */}
            <Link
              href={`/products/${item.id}`}
              className="mt-4 bg-blue-600 text-white px-4 py-2 text-center rounded-lg hover:bg-blue-700 transition"
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
