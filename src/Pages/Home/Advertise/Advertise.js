import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const {data: advertised = [], refetch} = useQuery({
    queryKey: ['advertise'],
    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/advertised/products');
        const data = await res.json();
        return data;
    }
});
  return (
    <div className="my-4">
      <h2 className="text-3xl font-medium my-2">Adverstise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          advertised.length > 0 ?
          advertised.map(ad => <AdvertiseCard key={ad._id} ad={ad}></AdvertiseCard>)
          :
          <></>
        }
       
      </div>
    </div>
  );
};

export default Advertise;
