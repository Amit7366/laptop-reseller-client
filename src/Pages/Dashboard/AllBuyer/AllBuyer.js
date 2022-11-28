import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthPovider';

const AllBuyer = () => {
  const { user } = useContext(AuthContext);
    const { data: allbuyer = [], refetch, isLoading } = useQuery({
        queryKey: ['allbuyer', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyer?email=${user.email}`,{
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}` 
             }
            });
            const data = await res.json();
            return data
        }
    });

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/buyer/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer deleted successfully`)
            }
        })
    }

    return (
        <div>
            <h1>All Buyer</h1>
            <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allbuyer.map((seller, _idx) => (
            <tr key={seller._id}>
              <th>{_idx + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                {seller.status === "verified" ? (
                  <button
                    className="btn btn-sm btn-success text-white"
                    disabled
                  >
                    {seller.status}
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm btn-warning text-white"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default AllBuyer;