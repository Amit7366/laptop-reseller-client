import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthPovider";

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useContext(AuthContext);

    fetch(`http://localhost:5000/booking?email=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, _idx) => (
            <tr key={order._id}>
              <th>{_idx + 1}</th>
              <td>{order.productName}</td>
              <td>
                {order.productPrice}
              </td>
              <td>{order.location}</td>
              <td>{order.phone}</td>
              <td>{order.seller}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
