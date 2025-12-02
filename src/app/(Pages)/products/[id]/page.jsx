"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [detailsData, showDetailsData] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const products = data.products;
        const findData = products.find((d) => d.id == id);
        showDetailsData(findData);
      });
  }, [id]);
  console.log(detailsData);
   if (!detailsData) return <p className="text-center mt-10">Loading...</p>;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div>
        <img
          src={detailsData.thumbnail}
          alt={detailsData.title}
          className="w-80 object-cover mx-auto rounded-lg mb-6"
        />
      </div>
        <div>
            {/* Price, Category */}
      <h1 className="text-2xl font-bold mb-4">{detailsData.title}</h1>
      <div className=" mb-4">
        <p className="text-xl font-semibold">${detailsData.price}</p>
        <p className="uppercase text-gray-600">{detailsData.category}</p>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Tags:</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {detailsData.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">{detailsData.description}</p>

      {/* Reviews */}
      <h2 className="text-xl font-bold mt-6 mb-3">Customer Reviews</h2>
      {detailsData.reviews?.map((review, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg mb-3 bg-gray-50 shadow-sm"
        >
          <p className="font-semibold">⭐ {review.rating} / 5</p>
          <p className="italic text-gray-700">{review.comment}</p>
          <p className="text-sm text-gray-500 mt-2">— {review.reviewerName}</p>
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default DetailsPage;
