import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateProduct = () => {
    const axiosSecure = useAxiosSecure()
    const [imageUploading, setImageUploading] = useState(false)
    const [productImage, setProductImage] = useState("")
    const product = useLoaderData()
    console.log(product)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    console.log(productImage)


    const handleImageHosting = async (event) => {
        const seletedFile = event.target.files[0]
        setImageUploading(true)
        const formData = new FormData()
        formData.append("image", seletedFile)
        try {
            const res = await fetch(`${image_hosting_api}`, {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            if (data.success) {
                console.log(data.data.url)
                setProductImage(data.data.url)
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setImageUploading(false)
        }
    }


    const onSubmit = (data) => {
        console.log(data)
        const productInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            percentOff: data.percentOff,
            category: data.category,
            brandName: data.brandName,
            image: productImage
        }
        axiosSecure.post("/product-add", productInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Product Add Successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F0F8FF] px-8 mx-auto min-h-screen pt-4">
            <h1 className="text-center text-4xl font-medium">Add New Product</h1>
            <div className="flex gap-6 mt-12 ">
                <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
                    <h3 className="text-xl font-medium">General Information</h3>
                    <p className="mt-3 text-lg">Product Name</p>
                    <input
                        {...register("name")}
                        type="text"
                        className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
                        placeholder={product.name}
                    />
                    <p className="mt-2 text-lg">Description</p>
                    <textarea
                        {...register("description")}
                        placeholder={product.description}
                        className="w-full outline-none border px-3 rounded-lg md:h-24 border-gray-200 bg-[#F0F8FF] py-2 "
                    ></textarea>
                </div>
                <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
                    <h3 className="text-xl font-medium">Product Media</h3>
                    <p className="mt-3 text-lg">Upload Image</p>
                    <fieldset className="flex w-full space-y-1 text-gray-100 dark:text-gray-800">
                        <div onClick={() => document.querySelector('input[type="file"]').click()} className="flex px-8 py-12 border-2 border-dashed rounded-md border-gray-700 dark:border-gray-300 text-gray-400 dark:text-gray-600 bg-gray-800 dark:bg-gray-100">
                            <input
                                onChange={handleImageHosting}
                                type="file"
                                hidden
                            />
                            <div className='w-40 h-9 border flex flex-col bg-[#00bba6] text-white rounded-2xl justify-center items-center'>{imageUploading ? "Uploading.." : "Upload a Picture"}</div>
                        </div>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                    </fieldset>
                </div>
            </div>
            {/* pricing */}
            <div className="flex gap-6 mt-3">
                <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
                    <h3 className="text-xl font-medium">Pricing</h3>
                    <p className="mt-3 text-lg">Base Price</p>
                    <input
                        {...register("price")}
                        type="text"
                        className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
                        placeholder={product.price}
                    />
                    <p className="mt-2 text-lg">Discount Percentage (%)</p>
                    <input
                        {...register("percentOff")}
                        type="text"
                        className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
                        placeholder={product.percentOff}
                    />
                </div>
                <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
                    <h3 className="text-xl font-medium">Category</h3>
                    <p className="mt-3 text-lg">Product Category</p>
                    <input
                        {...register("category")}
                        type="text"

                        className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
                        placeholder={product.category}
                    />
                    <p className="mt-2 text-lg">Brand</p>
                    <input
                        {...register("brandName")}
                        type="text"

                        className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
                        placeholder={product.brandName}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="btn my-10 bg-[#00bba6] text-white" type="submit">Add Product</button>
            </div>
        </form>
    );
};

export default UpdateProduct;