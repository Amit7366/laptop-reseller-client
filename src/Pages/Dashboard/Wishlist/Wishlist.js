import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Wishlist = () => {
    const {
        data: wishlist = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/wishlist`);
          const data = await res.json();
          return data;
        },
      });
    

    return (
        <div>
            <h2 className='text-3xl'> My Wishlist</h2>
            <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((wish, _idx) => (
            <tr key={wish._id}>
              <th>{_idx + 1}</th>
              <td>{wish.productName}</td>
              <td>{wish.resalePrice}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default Wishlist;