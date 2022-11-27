import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthPovider";

const AddCategory = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const handleAddCategory = data => {
    const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData =>{
            if(imageData.success){
                

                const product = {
                    categoryName: data.categoryName,
                    categoryImage: imageData.data.url,
                    
                    
                }

                fetch('http://localhost:5000/category', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.categoryName} is added successfully`);
                    navigate('/dashboard/all-category')
                })
            }
        })
  };
  return (
    <div className="w-[100%] md:w-[50%] lg:w-[40%] p-7">
      <h2 className="text-4xl">Add Catgory</h2>
      <form onSubmit={handleSubmit(handleAddCategory)}>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              {...register("categoryName", {
                required: "Product Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Category"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddCategory;
