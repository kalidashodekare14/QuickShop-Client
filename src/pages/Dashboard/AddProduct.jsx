const AddProduct = () => {
  return (
    <div className="bg-[#F0F8FF] px-8 mx-auto min-h-screen pt-4">
      <h1 className="text-center text-4xl font-medium">Add New Product</h1>
      <div className="flex gap-6  mt-12 ">
        <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
          <h3 className="text-xl font-medium">General Information</h3>
          <p className="mt-3 text-lg">Product Name</p>
          <input
            type="text"
            name="name"
            className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
            placeholder="product name"
          />
          <p className="mt-2 text-lg">Description</p>
          <textarea
            name="description"
            className="w-full outline-none border px-3 rounded-lg md:h-24 border-gray-200 bg-[#F0F8FF] py-2 "
          ></textarea>
        </div>
        <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
          <h3 className="text-xl font-medium">Product Media</h3>
          <p className="mt-3 text-lg">Upload Image</p>
          <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 dark:border-gray-300 text-gray-400 dark:text-gray-600 bg-gray-800 dark:bg-gray-100"
              />
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
            type="text"
            name="name"
            className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
            placeholder="price"
          />
          <p className="mt-2 text-lg">Discount Percentage (%)</p>
          <input
            type="text"
            name="name"
            className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
            placeholder="discount"
          />
        </div>
        <div className="bg-white py-9 px-6 md:w-1/2 rounded-md shadow-sm">
          <h3 className="text-xl font-medium">Category</h3>
          <p className="mt-3 text-lg">Product Category</p>
          <input
            type="text"
            name="name"
            className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
            placeholder="category"
          />
          <p className="mt-2 text-lg">Brand</p>
          <input
            type="text"
            name="name"
            className=" outline-none rounded-lg px-3 border border-gray-200 bg-[#F0F8FF] w-full py-2 "
            placeholder="brand"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
