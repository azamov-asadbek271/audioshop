import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../fairbase/FairbaseConfig'
import { FeaturedProducts, LandingCollection, ProductsReplay } from '../components';

// import useFetch from '../hook/useFetch'
import { customFetch } from '../uitls';
import { useLoaderData } from 'react-router-dom';
  const url = "?id";

  export const loader = async () => {
    const response = await customFetch(url);
    const req = response.data
    return { req };
  };
function Landing() {
  const {req} = useLoaderData()
   
  return (
    <>
      {req && (
        <div>
          <FeaturedProducts />
          <ProductsReplay />
          <LandingCollection/>
        </div>
      )}
    </>
  );
}

export default Landing