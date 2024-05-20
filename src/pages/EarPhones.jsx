import { useLoaderData } from "react-router-dom";
import { CardComponents, PeopleCard, ProductsReplay } from "../components";
import { customFetch } from "../uitls";
const url = "?id";

export const loader = async () => {
  const response = await customFetch(url);
  const req = response.data;
  return { req };
};

function EarPhones() {
  const {req} = useLoaderData()
  return (
    <>
      {req && (
        <div className="flex flex-col gap-10">
          <div className="bg-black text-white py-12">
            <h2 className="h2-sty text-center">EARPHONES</h2>
          </div>
          <div>
            {req.map((item) => {
              
              if (item.id == 1) {
                const { name, id, image } = item;
                const { desktop } = image;
                return (
                  <CardComponents
                    key={id}
                    name={name}
                    id={id}
                    image={desktop}
                  />
                );
              }
            })}
          </div>
          <ProductsReplay/>
          <PeopleCard/>
        </div>
      )}
    </>
  );
}

export default EarPhones