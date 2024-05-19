import {  useLoaderData } from "react-router-dom";
import img9 from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
import img7 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
import img1 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import { Link } from "react-router-dom";


// bosh
function LandingCollection() {
  const {req} = useLoaderData()
   const zx9  = req[5]
  const {name,id} = zx9


  return (
    <>
      {req && (
        <div className="con-align flex flex-col gap-10">
          {/* haeder */}
          <div className="flex bg-[#D87D4A] rounded-xl text-white gap-32">
            <img src={img9} alt="" className="w-[450px] rounded-s-xl" />
            <div className="py-20 w-[349px] flex flex-col gap-6">
              <h1 className="h1-sty">{name}</h1>
              <p className="para-sty">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to={`/singleproduct/${id}`}
                className="btn rounded-none btn-outline text-white border-none bg-black w-[160px] hover:bg-white hover:text-black transition duration-500 sub-title-sty"
              >
                See Product
              </Link>
            </div>
          </div>
          {/* main */}
          <div className="bg-[#F1F1F1] rounded-lg">
            {req.map((item) => {
              if (item.id == 5) {
                const { id, name } = item;
                return (
                  <div key={id} className="flex justify-between  ">
                    <div className="py-24 px-24 mt-10">
                      <h4 className="h4-sty mb-10">{name}</h4>
                      <Link
                        to={`/singleproduct/${id}`}
                        className="btn rounded-none btn-outline hover:text-white  w-[160px] bg-none text-black transition duration-500 sub-title-sty "
                      >
                        See Product
                      </Link>
                    </div>
                    <img src={img7} alt="" className="w-[450px]" />
                  </div>
                );
              }
            })}
          </div>
          {/* footer */}
          <div>{req.map((item) => {
            if(item.id == 1 ) {
               const { id, name } = item;
              return (
                <div key={id} className="flex justify-between">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-xl w-[550px] "
                  />
                  <div className="p-20 bg-[#F1F1F1] rounded-xl">
                    <h4 className="h4-sty mb-10">{name}</h4>
                    <Link
                      to={`/singleproduct/${id}`}
                      className="btn rounded-none btn-outline hover:text-white  w-[160px] bg-none text-black transition duration-500 sub-title-sty "
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              );
            }
          })}</div>
        </div>
      )}
    </>
  );
}

export default LandingCollection