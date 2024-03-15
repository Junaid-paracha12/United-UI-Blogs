import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PopupModal() {
  return (
    <>
      <nav className=" fixed top-8 right-11 bg-white  bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300">
        <ul className="flex items-start flex-col gap-3  ">
        <li className="font-semibold">Home</li>
                <li className="font-semibold ">Product
                
                </li>
                <li className="font-semibold ">Solution
                
                </li>
                <li className="font-semibold">Pricing</li>
                <li className="font-semibold ">Resources
                </li>
                <li className="font-semibold ">Company
                </li>
                <li className="font-semibold ">Careers
                </li>
        
          <li className="">
            <button
              type="button"
              className="text-base font-semibold  py-1.5"
            >
              Log In
            </button>
          </li>
          <li className="text-base font-semibold  py-1.5">
            <button type="button" className="text-base text-blue-600">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
