import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthPovider";

const BookingModal = ({ product, setProduct }) => {
  const { _id,productName, resalePrice, email: sellerEmail } = product;
  const { user } = useContext(AuthContext);
  

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const seller = sellerEmail;

    const booking = {
      name: name,
      email: email,
      productId: _id,
      productName: productName,
      productPrice: productPrice,
      phone: phone,
      location: location,
      seller: seller,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{productName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              value={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="productName"
              type="text"
              value={productName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="productPrice"
              type="text"
              value={resalePrice}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              required
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              required
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Book"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
