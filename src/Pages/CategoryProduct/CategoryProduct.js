import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Shared/BookingModal/BookingModal";
import CategoryProductCard from "./CategoryProductCard";

const CategoryProduct = () => {
  const categoryData = useLoaderData();
  const [product, setProduct] = useState(null);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {categoryData.map((category) => (
          <CategoryProductCard
            key={category._id}
            ad={category}
            setProduct={setProduct}
            
          ></CategoryProductCard>
        ))}
      </div>
      {
        product &&
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      }

      
    </section>
  );
};

export default CategoryProduct;
