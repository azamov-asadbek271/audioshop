

import React, { useEffect } from 'react'
import { useState } from 'react';

function useFetch() {
    const [api,setApi] = useState()
   useEffect(() => {
     const url = "http://localhost:3000/products";
     fetch(url)
       .then((data) => {
         return data.json();
       })
       .then((res) => {
         setApi(res);
       })
       .catch((error) => {
         console.log(error);
       });
   },[])
  return ({api})
}

export default useFetch