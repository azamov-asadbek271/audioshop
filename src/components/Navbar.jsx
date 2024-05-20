import React from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import NavbarList from "./NavbarList";
import { FiShoppingCart } from "react-icons/fi";
import Modal from "./Modal";

function Navbar() {
  return (
    <div className="bg-black ">
      <div className="con-align flex items-center justify-between border-b border-stone-500">
        {/* start */}
        <div className="flex items-center gap-6 dropdown">
          <div className="dropdown flex-col lg:hidden">
            <button tabIndex={0} role="button">
              <RiMenu2Line className="text-white" />
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
            >
              <NavbarList />
            </div>
          </div>

          <Link to="/" className="text-white">
            <h2 className="font-black text-3xl ">audiophil</h2>
          </Link>
        </div>
        {/* center */}
        <ul className="hidden lg:flex">
          <NavbarList />
        </ul>
        {/* end */}
        {/* <div>
          <FiShoppingCart className="text-white text-xl" />
        </div> */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart className="w-6 h-6 text-white" />
              <span className="badge badge-sm indicator-item bg-white text-black">
                0{/* {value} */}
              </span>
            </div>
          </div>
          <Modal/>
        </div>
      </div>
      ;
    </div>
  );
}

export default Navbar;
