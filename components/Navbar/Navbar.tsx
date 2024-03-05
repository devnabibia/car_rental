import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Button from "../Micro/button/Button";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className="mx-auto container sm:p-5 p-3 z-50">
      {/*desktop*/}
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center w-6/12 justify-between">
          <Link href="/" className="flex items-center">
            <span className="pl-1 text-2xl text-primary font-bold">MORENT</span>
          </Link>
          <ul className="flex items-center justify-between w-9/12 pl-4 text-text cursor-pointer">
            <li>
              <Link href="/#pickup">Services</Link>
            </li>
            <li>
              <Link href="/#products">Products</Link>
            </li>
            <li>
              <Link href="/details/1/#billings">Billings</Link>
            </li>

            <li>
              <Link href="/#footer">Contact Us</Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center">
          <Link href="/login">
            <Button className="mx-5 w-40 bg-primary text-white rounded-lg">
              Get Started Now
            </Button>
          </Link>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden pt-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="pl-1 text-2xl text-primary font-bold">MORENT</span>
        </Link>
        <div
          onClick={() => setNav(!nav)}
          className={`absolute top-20 z-50 bg-primary items-center w-full left-0 py-10 text-white h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col text-lg h-96 items-center justify-between">
            <li>
              <Link href="/#pickup">Services</Link>
            </li>
            <li>
              <Link href="/#products">Products</Link>
            </li>
            <li>
              <Link href="/details/1/#billings">Billings</Link>
            </li>

            <li>
              <Link href="/#footer">Contact Us</Link>
            </li>

            <Link href="/login">
              <Button className="mx-5 w-32 h-12 bg-black text-white rounded-lg">
                Login
              </Button>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden block text-3xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
