import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useFetch from '../hook/useFetch';

function HomeLayout() {
  
  return (
    <>
      { (
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default HomeLayout