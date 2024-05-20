
import { customFetch } from "../uitls";
import { useLoaderData } from "react-router-dom";
import { CardComponents, CardComponentsTwo, PeopleCard, ProductsReplay } from "../components";
 const url = "?id";
export const loader = async () => {
  const response = await customFetch(url);
  const req = response.data;
  return { req };
};
function Speakers() {
    const {req} = useLoaderData()
  return (
    <>
      {req && (
        <div className="flex flex-col gap-10">
          <div className="bg-black text-white py-12">
            <h2 className="h2-sty text-center">SPEAKERS</h2>
          </div>
          <div>
            {req.map((item) => {
              
              if (item.id == 6) {
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
          <div>
            {req.map((item) => {
              const { name, id, image } = item;
              const { desktop } = image;
              if (item.id == 5) {
                return (
                  <CardComponentsTwo
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

export default Speakers