"use client";

import { FiHome } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { TbReceipt } from "react-icons/tb";
import { LiaStampSolid } from "react-icons/lia";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsJournalBookmark } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className="flex flex-col bg-[#161D41] h-full hover:w-64  w-12 justify-between py-1 font-normal text-base z-10 transition-all duration-300 text-nowrap"
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      {/* navigation options */}
      <div>
        {/* logo */}
        {isOpen ? (
          <img
            src="https://x.razorpay.com/dist/assets/img/RazorpayX-logo.svg"
            alt="logo"
            className="w-40 h-8 mx-4 my-4"
          />
        ) : (
          <div>
            <img
              src="https://x.razorpay.com/dist/assets/img/x-logo.svg"
              alt="logoX"
              className="mx-2 my-4 h-8"
            />
          </div>
        )}

        {/* section 1 */}
        <div className="py-1">
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            {/* {!isClicked && (
              <div
                className="bg-yellow-600 rounded-sm h-5 w-1 p
              ml-[-12px] mr-[9px]"
              ></div>
            )} */}
            <div className="pb-1">
              <FiHome />
            </div>
            {isOpen && <div className="ml-3 text-sm">Home</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <GoArrowUpRight />
            </div>
            {isOpen && (
              <div className="flex">
                <div className="ml-3 text-sm">Payouts</div>
                <div className="rounded-xl bg-green-700 text-xs text-white px-2 mx-3 self-center">
                  NEW
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <FiFileText />
            </div>
            {isOpen && <div className="ml-3 text-sm">Account Statement</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <RxPerson />
            </div>
            {isOpen && <div className="ml-3 text-sm">Contacts</div>}
          </div>
        </div>
        {/* section 2 */}
        <div className="pt-1 border-t border-[#1D2345] pb-32">
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <TbReceipt />
            </div>
            {isOpen && <div className="ml-3 text-sm">Vendor Payments</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <LiaStampSolid />
            </div>
            {isOpen && <div className="ml-3 text-sm">Tax Payments</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <CiLocationArrow1 />
            </div>
            {isOpen && <div className="ml-3 text-sm">Payout Links</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <SlEnvolopeLetter />
            </div>
            {isOpen && <div className="ml-3 text-sm">Payroll</div>}
          </div>
          <div className="flex flex-row my-4 p-3  hover:bg-[#202749]">
            <div className="pb-1">
              <BsJournalBookmark />
            </div>
            {isOpen && <div className="ml-3 text-sm">Reports</div>}
          </div>
        </div>
      </div>
      {/* app link */}
      {isOpen && (
        <div className="flex flex-row justify-evenly p-3 text-sm fixed bottom-0 bg-[#161D41]">
          Get RazorpayX mobile app
          <div className="ml-2">
            <FaApple />
          </div>
          <div className="ml-2">
            <IoLogoGooglePlaystore />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
