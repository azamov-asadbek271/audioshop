import React from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import NavbarList from "./NavbarList";
import { FiShoppingCart } from "react-icons/fi";

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
        <div>
          <FiShoppingCart className="text-white text-xl" />
        </div>
      </div>
      ;
    </div>
  );
}

export default Navbar;
