import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className="w-full fixed px-6 z-20 py-3 sm:px-6 inset-x-0 top-0 justify-between flex items-center"
        {...props}
      >
        <div className="flex w-full items-center justify-between mx-auto">
          <Link
            href="/"
            className="items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="inline-flex mx-auto">
              <p className="text-white text-[24px] my-1 font-exo font-bold cursor-pointer flex">
                hELLO
              </p>
            </span>
          </Link>
          <div>
            <h1 className="text-white">Mustem</h1>
          </div>
          
          <div className="flex">
            <div className="cursor-pointer text-white" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <IoClose className=" w-8 h-8 cursor-pointer" />
              ) : (
                <BiMenuAltRight className=" w-8 h-8 cursor-pointer" />
              )}
            </div>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-slate-800 absolute top-16 right-0 mx-6 my-1 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li
                  className={`${
                    active === "Home" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Home");
                  }}
                >
                  <Link href="#home">Home</Link>
                </li>
                <li
                  className={`${
                    active === "About" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("About");
                  }}
                >
                  <Link href="#about">About</Link>
                </li>
                <li
                  className={`${
                    active === "Team" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("team");
                  }}
                >
                  <Link href="#team">Team</Link>
                </li>
                <li
                  className={`${
                    active === "Services" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Services");
                  }}
                >
                  <Link href="#services">Services</Link>
                </li>
                <li
                  className={`${
                    active === "Contact" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Contact");
                  }}
                >
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
