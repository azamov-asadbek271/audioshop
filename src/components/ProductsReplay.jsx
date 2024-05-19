
import { Link } from "react-router-dom";
import headImg from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import speaImg from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import earImg from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import { FaAngleRight } from "react-icons/fa6";

function ProductsReplay() {
  return (
    <div className="con-align mt-20 flex justify-between">
      <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] py-6">
        <img src={headImg} alt="" className="w-52 " />
        <h6 className="h6-sty mb-4">HEADPHONES</h6>
        <Link to="/headphones" className="flex items-center">
          <span className="sub-title-sty text-lg mr-1">shop</span>
          <FaAngleRight className="text-[#D87D4A] mt-1" />
        </Link>
      </div>
      {/*  */}
      <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] py-6">
        <img src={speaImg} alt="" className="w-52 " />
        <h6 className="h6-sty mb-4">SPEAKERS</h6>
        <Link to="/speakers" className="flex items-center">
          <span className="sub-title-sty text-lg mr-1">shop</span>
          <FaAngleRight className="text-[#D87D4A] mt-1" />
        </Link>
      </div>
      {/*  */}
      <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] py-6">
        <img src={earImg} alt="" className="w-52 " />
        <h6 className="h6-sty mb-4">EARPHONES</h6>
        <Link to="/earphones" className="flex items-center">
          <span className="sub-title-sty text-lg mr-1">shop</span>
          <FaAngleRight className="text-[#D87D4A] mt-1" />
        </Link>
      </div>
    </div>
  );
}

export default ProductsReplay