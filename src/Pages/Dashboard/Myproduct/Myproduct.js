import React, { useEffect, useState } from "react";
import axios from "axios";

const Myproduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  console.log(products);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Location</th>
            <th>Original Price</th>
            <th>Resale Price</th>
            <th>Years Used</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, _idx) => (
            <tr key={product._id}>
              <th>{_idx + 1}</th>
              <td>{product.productName}</td>
              <td>
                <div className="avatar">
                  <div className="w-8 rounded">
                    <img
                      src={product.productImage}
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
                
              </td>
              <td>{product.productLocation}</td>
              <td>{product.originalPrice}</td>
              <td>{product.resalePrice}</td>
              <td>{product.usedPeriod}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myproduct;
