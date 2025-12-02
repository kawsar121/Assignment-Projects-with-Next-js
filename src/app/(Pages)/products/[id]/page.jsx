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
    <div className="max-w-md mx-auto p-3 border w-72 md:w-full border-gray-300 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-900 transition-all">
      {/* Product Image */}
      <div className="flex justify-center mb-3">
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 w-40">
          <img
            src={detailsData.thumbnail}
            alt={detailsData.title}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-start gap-2">
        {/* Title */}
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 text-center">
          {detailsData.title}
        </h1>

        {/* Price & Category */}
        <div className="flex justify-center items-center gap-3">
          <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
            ${detailsData.price}
          </p>
          <p className="uppercase text-gray-600 dark:text-gray-400 font-medium text-xs">
            {detailsData.category}
          </p>
        </div>

        {/* Tags */}
        {detailsData.tags?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1">
            {detailsData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white px-2 py-0.5 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">
          {detailsData.description}
        </p>

        {/* Reviews */}
        {detailsData.reviews?.length > 0 && (
          <div>
            <h2 className="text-sm font-bold mt-2 mb-1 text-gray-900 dark:text-gray-100 text-center">
              Customer Reviews
            </h2>
            <div className="flex flex-col gap-2">
              {detailsData.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-0.5 md:p-1.5 rounded-lg bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <p className="font-semibold text-yellow-400 text-sm">
                    ⭐ {review.rating} / 5
                  </p>
                  <p className="italic text-gray-700 dark:text-gray-200 text-xs mt-0.5">
                    {review.comment}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    — {review.reviewerName}
                  </p>
                </div>
              ))}
              <button className="mt-5 bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 w-2/4 mx-auto md:w-full  text-center rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition font-medium">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
