import { NavLink } from "react-router-dom";
const links = [
  {
    id: 1,
    text: "HOME",
    link: "/",
  },
  {
    id: 2,
    text: "HEADPHONES",
    link: "/headphones",
  },
  {
    id: 3,
    text: "SPEAKERS",
    link: "/speakers",
  },
  {
    id: 4,
    text: "EARPHONES",
    link: "/earphones",
  },
];

function NavbarList() {
  return (
    <ul className="lg:flex">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              to={link.link}
              className="capitalize lg:text-white py-2 px-3 hover:bg-base-content 
              hover:text-[#D87D4A] transition duration-300"
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarList;
