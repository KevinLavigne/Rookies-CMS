import React from "react";
import Rookies from "../assets/rookies.png";
import French from "../assets/frenchtech.png";
import Pepite from "../assets/pepite.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div
        className="
          container
          flex flex-col flex-wrap mt-4
          px-4
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <div
            className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              md:justify-start
            "
          >
            <img src={Rookies} alt="logo" />
          </div>
          <a
            className="mt-2 text-sm text-justify text-gray-500"
            href="tel:+33785680988"
          >
            +33 (0) 7 85 68 09 88
          </a>
          <p className="mt-2 text-sm text-justify text-gray-500">
            integrer envoi mail
          </p>
          <div className="flex justify-center mt-4 lg:mt-2 lg:justify-start">
            <div className="ml-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </div>
            <div className="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="fw-full px-4 mb-4 lg:w-2/3 md:w-1/2">
            <h2 className="font-bold text-lg mb-4 flex text-green-400">
              Quick Links
            </h2>
            <ul className="flex text-sm list-none">
              <div className="flex justify-start flex-col w-1/2">
                <li>
                  <div className="flex mb-4 text-gray-600 hover:text-gray-800">
                    Companies
                  </div>
                </li>
                <li>
                  <div className="flex text-gray-600 hover:text-gray-800">
                    Student
                  </div>
                </li>
              </div>
              <div className="flex justify-center flex-col w-1/2">
                <li>
                  <div className="flex mb-4 text-gray-600 hover:text-gray-800">
                    Universities
                  </div>
                </li>
                <li>
                  <div className="flex text-gray-600 hover:text-gray-800">
                    About
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="flex justify-start mb-2 font-bold text-lg  text-green-400">
              Join our Newsletter
            </h2>
            <div className="flex mt-4">
              <input
                type="text"
                className="
                h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
              "
                placeholder="Your email address"
              />
              <button
                type="button"
                className="h-auto p-3 text-xs text-white bg-green-400 rounded-sm"
              >
                Subscribe
              </button>
            </div>
            <div className="flex mx-2 mt-4">
              <img className="mr-4" src={Pepite} alt="logo" />
              <img src={French} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex space-x-4">
          <p className="text-base  text-gray-400">General terms</p>
          <p className="text-base  text-gray-400">Privacy policy</p>
        </div>
        <p className="flex justify-end text-base text-gray-400">
          2022 Rookies SAS. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;