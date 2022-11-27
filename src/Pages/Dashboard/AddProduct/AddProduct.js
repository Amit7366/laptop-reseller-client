import { useQuery } from '@tanstack/react-query';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthPovider';
import JoditEditor from 'jodit-react';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const editor = useRef(null);
	const [content, setContent] = useState('');



    const {data: categories = [], refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data  =>{
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
                    productName: data.productName,
                    productImage: imageData.data.url,
                    productLocation: data.location,
                    resalePrice: data.resalePrice,
                    originalPrice: data.originalPrice,
                    usedPeriod: data.usedPeriod,
                    email: data.email,
                    name: data.name,
                    advertise: data.advertise,
                    category: data.category,
                    postingTime: Date().toLocaleString(),
                    status: 'unsold',
                    mobile: data.mobile,
                    description: content,
                    condition: data.condition,
                    
                }

                fetch('http://localhost:5000/products', {
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
                    toast.success(`${data.productName} is added successfully`);
                    navigate('/dashboard/my-product')
                })
            }
        })
        

    }
    return (
        <div className='w-[100%] md:w-[50%] lg:w-[60%] p-7'>
            <h2 className="text-4xl">Add Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='grid grid-cols-2 gap-3'>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <select 
                    {...register('location')}
                    className="select input-bordered w-full max-w-xs">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Bogura">Bogura</option>
                        <option value="Mymensingha">Mymensingha</option>
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: "Original Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: "Resale Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Used Period in years</span></label>
                    <input type="number" {...register("usedPeriod", {
                        required: "Used Period is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: "Email is Required"
                    })} defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} readOnly className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Advertise</span></label>
                    <select 
                    {...register('advertise')}
                    className="select input-bordered w-full max-w-xs">
                       <option value="true">Active</option>
                       <option value="false">Inactive</option>
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('category')}
                    className="select input-bordered w-full max-w-xs">
                       {
                        categories.map(category => <option key={category._id} value={category.categoryName}>{category.categoryName}</option>   )
                       }  
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select 
                    {...register('condition')}
                    className="select input-bordered w-full max-w-xs">
                       <option value="best">Best</option>
                       <option value="medium">Medium</option>   
                       <option value="good">Good</option>   
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile</span></label>
                    <input type="text" {...register("mobile", {
                        required: "Email is Required"
                    })}  className="input input-bordered w-full max-w-xs" />
                </div>
                
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>

                    {/* <textarea {...register("description", {
                        required: "Description is Required"
                    })}   className="textarea textarea-bordered" placeholder="Description"></textarea> */}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
        </div>
    );
};

export default AddProduct;