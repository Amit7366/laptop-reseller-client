import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllCategory = () => {
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
        <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((product, _idx) => (
            <tr key={product._id}>
              <th>{_idx + 1}</th>
              <td>{product.categoryName}</td>
              <td>
                <div className="avatar">
                  <div className="w-8 rounded">
                    <img
                      src={product.categoryImage}
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default AllCategory;