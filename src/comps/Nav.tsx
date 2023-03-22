import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#151521] py-2 border-b  border-gray-600">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <Link href="#">
          <img
            src="https://app.beyaztakip.com/media/logos/logo_dark.png"
            alt="BeyazTakipLogo"
            className="h-[30px]"
          />
        </Link>

        <FiMenu
          className="md:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="text-base text-gray-200 md:flex md:justify-between">
            <li>
              <Link href="#araclar">
                <button className="rounded md:px-5 py-2 block hover:bg-gray-500 font-semibold">
                  ARAÇLAR
                </button>
              </Link>
            </li>
            <li className="">
              <Link href="#paketler">
                <button className="rounded md:px-5 py-2 block hover:bg-gray-500 font-semibold">
                  PAKETLER
                </button>
              </Link>
            </li>
            <li className="">
              <Link href="#blog">
                <button className="rounded md:px-5 py-2 block hover:bg-gray-500 font-semibold">
                  BLOG
                </button>
              </Link>
            </li>
            <li className="bg-blue-500 hover:bg-blue-700 text-white rounded">
              <Link href="/about">
                <button className="px-6 py-2 block">GİRİŞ YAP</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
