import React from "react";
import LogoVPN from "../../public/assets/Logoo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="pb-24 bg-white-300 pt-44">
      <div className="grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 mx-auto sm:px-8 lg:px-16 sm:grid-rows-1 sm:grid-flow-col sm:grid-cols-12">
        <div className="flex flex-col items-start col-start-1 col-end-4 row-span-2 sm:col-span-4 sm:col-end-5 ">
          <div className="flex items-center col-start-1 col-end-2 text-xl">
            <LogoVPN className="w-auto h-8" /> <div className="px-2">Opia-Serivces</div>
          </div>
          <p className="mb-4">
            <strong className="font-medium">Opia-services</strong> is a multi-service company owned By Isheka Oswald and specializes in: Filing of documents in Jamaica, Massage therapy, Social Media managenet.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Facebook className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Twitter className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Instagram className="w-6 h-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Opia-services</p>
        </div>
        <div className="flex flex-col row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9">
          <p className="mb-4 text-lg font-medium text-black-600">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Download{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Pricing{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Locations{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Server{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Countries{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Blog{" "}
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
