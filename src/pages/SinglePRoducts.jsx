import { useLoaderData, useParams } from "react-router-dom";
import { customFetch, formatPrice } from "../uitls";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { increment, decrement, addItem } from "../feature/counter/CounterSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/?id=${params.id}`);
  const req = response.data;
  return { req };
};

function SinglePRoducts() {
  const { req } = useLoaderData();
  const data = req[0];

  const { value } = useSelector((store) => store.cartCounter);
  const dispatch = useDispatch();

  const { id, name, image, description, price } = data;
  const { desktop } = image;
  const dollorPrice = formatPrice(price);
  const CartProducts = {
    cartID: id + name,
    productsID: id,
    image,
    price,
    name,
    amount: value,
  };
  const AddToCart = () => {
    dispatch(
      addItem({
        products: CartProducts,
      })
    );
  };

  return (
    <>
      {req && (
        <div className="con-align">
          <p className="para-sty mt-10">Go Back</p>

          <div key={id}>
            <div className="con-align mt-10 flex  ">
              <img src={desktop} alt="" className="w-[540px]" />
              <div className="p-20 flex flex-col gap-5">
                <p className="overline-sty text-[#D87D4A]">NEW PRODUCT</p>
                <h2 className="h2-sty">{name}</h2>
                <p className="mb-10 para-sty ">{description}</p>
                <p className="h6-sty">{dollorPrice}</p>
                <div className="flex gap-5">
                  <div className="bg-slate-200 px-3 py-3 flex justify-between w-40 rounded-lg">
                    <button
                      aria-label="Decrement value"
                      onClick={() => {
                        if (value >= 1) {
                          dispatch(decrement());
                        }
                      }}
                    >
                      <TiMinus className="text-xl text-orange-600" />
                    </button>
                    <span className="text-lg font-bold">{value}</span>

                    <button
                      aria-label="Increment value"
                      onClick={() => dispatch(increment())}
                    >
                      <FaPlus className="text-xl text-orange-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (value > 0) {
                        AddToCart();
                      }
                    }}
                    className="capitalize btn btn-primary"
                  >
                    add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePRoducts;
{
  /* <Link
                        to={`/singleproduct/${id}`}
                        className="btn rounded-none bg-[#D87D4A] text-white border-none  sub-title-sty w-[160px] "
                      >
                        See Product
                      </Link> */
}
