"use client";
import { RiCalendar2Line } from "react-icons/ri";
import { useState } from "react";
import FilterSelector from "./FilterSelector";

const FilterTransaction = () => {
  const [selected, setSelected] = useState("All");
  const [isClicked, setIsClicked] = useState("");

  const toggleClick = (value) => {
    setIsClicked((preValue) => (preValue === value ? "" : value));
  };
  const toggleSelected = (value) => {
    setSelected(value);
  };

  return (
    <div className="px-6 flex flex-row items-center flex-wrap">
      {/* calendar */}
      <div className="my-2 flex items-center text-gray-400 border border-[#1D2345] cursor-pointer rounded-sm">
        <div className="text-lg px-3 py-2 ">
          <RiCalendar2Line style={{ strokeWidth: 1 }} />
        </div>
        <div className="py-2 px-6 border-l border-[#1D2345]">All time</div>
      </div>
      {/* credit-debits */}
      <div className="my-2 flex items-center border-b border-[#1D2345] rounded-sm font-medium mx-4 cursor-pointer">
        <div
          className={`py-2 w-[104px] ${
            selected === "All"
              ? "text-[#59A0F7] border-b border-[#59A0F7] bg-[#1D2345] rounded-sm"
              : null
          }`}
          onClick={() => toggleSelected("All")}
        >
          <div className="flex items-center justify-center">
            <img
              src="https://x.razorpay.com/dist/assets/img/icons/all-transactions.svg"
              alt="all"
              className="h-4 w-4 mr-1"
            />
            All
          </div>
        </div>
        <div
          className={`py-2 w-[104px] ${
            selected === "Credits"
              ? "text-[#59A0F7] border-b border-[#59A0F7] bg-[#1D2345] rounded-sm"
              : null
          }`}
          onClick={() => toggleSelected("Credits")}
        >
          <div className="flex items-center justify-center border-l border-[#1D2345]">
            <img
              src="https://x.razorpay.com/dist/assets/img/inflow.svg"
              alt="credits"
              className="h-4 w-4 mr-1"
            />
            Credits
          </div>
        </div>
        <div
          className={`py-2 w-[104px] ${
            selected === "Debits"
              ? "text-[#59A0F7] border-b border-[#59A0F7] bg-[#1D2345] rounded-sm"
              : null
          }`}
          onClick={() => toggleSelected("Debits")}
        >
          <div className="flex items-center justify-center border-l border-[#1D2345]">
            <img
              src="https://x.razorpay.com/dist/assets/img/payout.svg"
              alt="debits"
              className="h-4 w-4 mr-1"
            />
            Debits
          </div>
        </div>
      </div>
      {/* selectors */}
      <div className="mr-4" onClick={() => toggleClick("Method")}>
        <FilterSelector
          name="Payment Method"
          isClicked={isClicked === "Method" ? true : false}
        />
      </div>
      <div className="mr-4" onClick={() => toggleClick("Source")}>
        <FilterSelector
          name="Source"
          isClicked={isClicked === "Source" ? true : false}
        />
      </div>
      <div className="mr-4" onClick={() => toggleClick("Contact")}>
        <FilterSelector
          name="Contact Type"
          isClicked={isClicked === "Contact" ? true : false}
        />
      </div>
      <div className="mr-4" onClick={() => toggleClick("Purpose")}>
        <FilterSelector
          name="Payout Purpose"
          isClicked={isClicked === "Purpose" ? true : false}
        />
      </div>
    </div>
  );
};

export default FilterTransaction;
