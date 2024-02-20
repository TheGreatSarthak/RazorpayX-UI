import { IoMdArrowDropdown } from "react-icons/io";

const FilterSelector = ({ name, isClicked }) => {
  return (
    <div
      className={`my-3 py-3 rounded-sm flex items-center w-48 px-4 border-b border-[#1D2345] bg-[#141B3E] hover:bg-[#1D2345] text-sm ${
        isClicked ? "border-[#59A0F7]" : null
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div>{name}</div>
        <div className={`text-lg ${isClicked ? "transform rotate-180" : null}`}>
          <IoMdArrowDropdown style={{ strokeWidth: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default FilterSelector;
