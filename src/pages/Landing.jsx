import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../fairbase/FairbaseConfig'
import FeaturedProducts from '../components/FeaturedProducts'

   fetch("http://localhost:3000/products")
     .then((data) => {
       return data.json();
     })
     .then((recipies) => {
       console.log(recipies);
     })
     .catch((error) => {
       console.log(error);
     });
       
function Landing() {
  
  return (
    <div>
     
        <FeaturedProducts/>
      
    </div>
  );
}

export default Landing