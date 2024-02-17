"use client";

import { FiHome } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { TbReceipt } from "react-icons/tb";
import { LiaStampSolid } from "react-icons/lia";
import { BsCursor } from "react-icons/bs";
import { BsEnvelopePaper } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOption, setClickedOption] = useState("Home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleClick = (value) => {
    setClickedOption(value);
  };

  return (
    <div
      className={`flex flex-col bg-[#161D41] h-full ${
        isOpen ? "w-64" : "w-12"
      }  justify-between py-1 font-normal text-base z-10 transition-all duration-300 text-nowrap`}
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
            className="w-40 h-8 mx-4 my-4 px-1"
          />
        ) : (
          <img
            src="https://x.razorpay.com/dist/assets/img/x-logo.svg"
            alt="logoX"
            className="mx-2 my-4 h-8 px-1"
          />
        )}

        {/* section 1 */}
        <div className="py-1">
          <div onClick={() => toggleClick("Home")}>
            <SidebarOption
              name="Home"
              isOpen={isOpen}
              isClicked={clickedOption === "Home" ? true : false}
              icon={
                <FiHome
                  style={{
                    strokeWidth: clickedOption === "Home" ? 3 : 2,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Payouts")}>
            <SidebarOption
              name="Payouts"
              isOpen={isOpen}
              isClicked={clickedOption === "Payouts" ? true : false}
              icon={
                <GoArrowUpRight
                  style={{
                    strokeWidth: clickedOption === "Payouts" ? 2 : 1,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Account Statement")}>
            <SidebarOption
              name="Account Statement"
              isOpen={isOpen}
              isClicked={clickedOption === "Account Statement" ? true : false}
              icon={
                <FiFileText
                  style={{
                    strokeWidth: clickedOption === "Account Statement" ? 3 : 2,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Contacts")}>
            <SidebarOption
              name="Contacts"
              isOpen={isOpen}
              isClicked={clickedOption === "Contacts" ? true : false}
              icon={
                <RxPerson
                  style={{
                    strokeWidth: clickedOption === "Contacts" ? 1 : 0,
                  }}
                />
              }
            />
          </div>
        </div>
        {/* section 2 */}
        <div className="pt-1 border-t border-[#1D2345] pb-32">
          <div onClick={() => toggleClick("Vendor Payments")}>
            <SidebarOption
              name="Vendor Payments"
              isOpen={isOpen}
              isClicked={clickedOption === "Vendor Payments" ? true : false}
              icon={
                <TbReceipt
                  style={{
                    strokeWidth: clickedOption === "Vendor Payments" ? 3 : 2,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Tax Payments")}>
            <SidebarOption
              name="Tax Payments"
              isOpen={isOpen}
              isClicked={clickedOption === "Tax Payments" ? true : false}
              icon={
                <LiaStampSolid
                  style={{
                    strokeWidth: clickedOption === "Tax Payments" ? 2 : 1,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Payout Links")}>
            <SidebarOption
              name="Payout Links"
              isOpen={isOpen}
              isClicked={clickedOption === "Payout Links" ? true : false}
              icon={
                <BsCursor
                  style={{
                    strokeWidth: clickedOption === "Payout Links" ? 1 : 0,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Payroll")}>
            <SidebarOption
              name="Payroll"
              isOpen={isOpen}
              isClicked={clickedOption === "Payroll" ? true : false}
              icon={
                <BsEnvelopePaper
                  style={{
                    strokeWidth: clickedOption === "Payroll" ? 1 : 0,
                  }}
                />
              }
            />
          </div>
          <div onClick={() => toggleClick("Reports")}>
            <SidebarOption
              name="Reports"
              isOpen={isOpen}
              isClicked={clickedOption === "Reports" ? true : false}
              icon={
                <BsJournalBookmark
                  style={{
                    strokeWidth: clickedOption === "Reports" ? 1 : 0,
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
      {/* app link */}
      {isOpen && (
        <div
          className={`flex grow flex-row justify-evenly p-3 text-sm fixed bottom-0 bg-[#161D41] transition-all duration-300`}
        >
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
