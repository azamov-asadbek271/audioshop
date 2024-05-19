import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import imgHero from "../assets/home/desktop/image-hero.jpg"
function FeaturedProducts() {
  const { req } = useLoaderData();
  const jami = req?.slice(3, 4);
 const { name,id } = jami[0];
 
 

  
  return (
    <>
      {req && (
        <div className="bg-black">
          <div className=" text-white con-align flex ">
            <div className="flex flex-col gap-6 p-10 w-[450px]">
              <p className="overline-sty">NEW PRODUCT</p>
              <h1 className="h1-sty">{name}</h1>
              <p className="para-sty mb-16">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                to={`/singleproduct/${id}`}
                className="btn rounded-none bg-[#D87D4A] text-white border-none "
              >
                See Product
              </Link>
            </div>
            <div>
              <figure>
                <img src={imgHero} alt="" />
              </figure>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturedProducts