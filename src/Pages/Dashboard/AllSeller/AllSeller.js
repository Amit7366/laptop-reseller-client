import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: allSeller = [], refetch, isLoading } = useQuery({
        queryKey: ['allSeller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller`);
            const data = await res.json();
            return data
        }
    });

    const handleVerifiation = (id) =>{
        fetch(`http://localhost:5000/seller/${id}`,{
            method: 'PUT',
            headers: {

            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Seller successfuly Verified.')
                refetch();
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <h1>All Seller</h1>
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
          {allSeller.map((seller, _idx) => (
            <tr key={seller._id}>
              <th>{_idx + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>{seller.status === 'verified' ? 
              <button className="btn btn-sm btn-success text-white" disabled>{seller.status}</button> 
              : 
              <button onClick={()=>handleVerifiation(seller._id)} className="btn btn-sm btn-warning text-white">Verify</button> }</td>
              
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default AllSeller;