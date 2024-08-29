import { useContext } from "react";
import card1 from "../../assets/s2.png";
import { dataContext } from "../../DataProvider/DataProvider";

const FeaturedProduct = () => {

  const { featuredProduct } = useContext(dataContext)

  return (
    <div>
      <div className="space-y-3 my-20">
        <h1 className="text-center text-3xl">Featured Products</h1>
        <p className="text-center text-xl">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 space-y-2">
        {/* Card1 */}
        {
          featuredProduct.map(product => (
            <div className="relative border flex flex-col justify-center items-center me-2">
              <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                <h1 className="text-white">25 % OFF</h1>
              </div>
              <div className="w-full">
                <img className="w-full h-[30vh]" src={product.image} alt="" />
              </div>
              <div className="text-center text-2xl">
                <h1 className='text-[20px]'>{product.name.slice(0, 39)}</h1>
                <p>$150</p>
              </div>
              <div className="flex items-center gap-3 mt-5 mb-5">
                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  );
};

export default FeaturedProduct;
