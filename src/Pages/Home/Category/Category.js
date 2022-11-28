import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
//   const {data: categories = [], refetch} = useQuery({
//     queryKey: ['category'],
//     queryFn: async() =>{
//         const res = await fetch('http://localhost:5000/category');
//         const data = await res.json();
//         return data;
//     }
// });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="my-4">
      <h2 className="text-3xl font-medium my-2">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
        }

      </div>
    </div>
  );
};

export default Category;
