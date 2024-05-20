import React from 'react'
import {  useLoaderData } from 'react-router-dom';
import { CardComponents, CardComponentsTwo, PeopleCard, ProductsReplay } from '../components';
import { customFetch } from '../uitls';
  const url = "?id";

 export const loader = async () => {
   const response = await customFetch(url);
   const req = response.data;
   return { req };
 };

function HeadPhones() {
  const {req} = useLoaderData()
  return (
    <>
      {req && (
        <div className="flex flex-col gap-10">
          <div className="bg-black text-white py-12">
            <h2 className="h2-sty text-center">HEADPHONES</h2>
          </div>
          <div>
            {req.map((item) => {
             
              if (item.id == 4) {
                 const { name, id, image } = item;
                 const { desktop } = image;
                return <CardComponents key={id} name={name} id={id} 
                image={desktop}/>;
              }
            })}
          </div>
          <div>
            {req.map((item) => {
            
              if (item.id == 3) {
                  const { name, id, image } = item;
                  const { desktop } = image;
                return <CardComponentsTwo key={id} name={name} id={id} 
                image={desktop} />;
              }
            })}
          </div>
          <div>
            {req.map((item) => {
              
             
              if (item.id == 2) {
                const { name, id, image } = item;
                const { desktop } = image;
                return <CardComponents key={id} name={name} id={id}
                 image={desktop} />;
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

export default HeadPhones