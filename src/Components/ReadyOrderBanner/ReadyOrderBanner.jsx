import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCart } from "react-use-cart";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const ReadyOrderBanner = () => {
  // const { readyOrder } = useContext(dataContext);
  const { addItem } = useCart()
  const axiosCommon = useAxiosCommon()


  const { data: readyOrder = [] } = useQuery({
    queryKey: ["readyOrder"],
    queryFn: async () => {
      const res = await axiosCommon.get("/allProducts");
      return res.data;
    },
  });


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl lg:my-20 my-10 font-motserrat font-[700]">
          Ready for Order 🔥
        </h1>
      </div>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {readyOrder.map((product) => (
          <div
            key={product._id}
            className="relative border flex flex-col justify-center items-center me-2"
          >
            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
              <h1 className="text-white font-motserrat text-sm">25 % OFF</h1>
            </div>
            <div className="w-full">
              <img className="w-full h-[30vh]" src={product.image} alt="" />
            </div>
            <div className="text-center text-2xl">
              <h1 className="text-[16px] font-openSans ">{product.name.slice(0, 39)}</h1>
              <p>$150</p>
              
            </div>
            <div className="flex items-center gap-3 mt-5 mb-5">
              <button className="btn bg-[#00bba6] text-white rounded-md">
                Buy Now
              </button>
              <button onClick={() => addItem({ ...product, id: product._id })} className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
};

export default ReadyOrderBanner;
