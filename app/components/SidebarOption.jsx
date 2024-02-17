"use client";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const SidebarOption = ({ name, isOpen, icon, isClicked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`flex flex-row my-4 py-2 pl-3 ${
        isClicked && isOpen
          ? "bg-[#2B3252] text-white font-semibold hover:bg-[#2B3252]"
          : "hover:bg-[#202749]"
      } ${isClicked && "pl-2"}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="flex items-center justify-center">
        {isClicked ? (
          <div className="bg-yellow-600 rounded-r-md h-6 w-1 ml-[-12px] mr-2"></div>
        ) : null}
        <span
          className={`px-1 py-1 ${
            isClicked && !isOpen ? "bg-[#2B3252] rounded-md" : null
          }`}
        >
          {icon}
        </span>
        {isOpen && (
          <div className="flex items-center w-[220px]">
            <div className="ml-2 text-sm">{name}</div>
            {name === "Payouts" ? (
              <div className="rounded-xl bg-green-700 text-xs text-white px-2 mx-3 self-center">
                NEW
              </div>
            ) : null}
            {isHovered &&
            (name === "Payouts" ||
              name === "Contacts" ||
              name === "Vendor Payments") ? (
              <div className="flex p-2 my-[-8px] text-lg bg-[#353B5A] rounded-sm ml-auto hover:bg-[#494F6A]">
                <IoMdAdd />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarOption;
