// import marg2  from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import { Link } from "react-router-dom";
function CardComponents({name,id,image}) {
  return (
    <div className="con-align mt-10 flex  ">
      <img src={image} alt="" className="w-[540px]" />
      <div className="p-20 flex flex-col gap-5">
        <p className="overline-sty text-[#D87D4A]">NEW PRODUCT</p>
        <h2 className="h2-sty">{name}</h2>
        <p className="mb-10 para-sty ">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link
          to={`/singleproduct/${id}`}
          className="btn rounded-none bg-[#D87D4A] text-white border-none  sub-title-sty w-[160px] "
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default CardComponents