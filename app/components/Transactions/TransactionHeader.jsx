import { GoSearch } from "react-icons/go";
import { RiAddFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { LuUserCog } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const TransactionHeader = () => {
  return (
    <div className="flex flex-row justify-between py-4 px-6 items-center">
      {/* name */}
      <div className="text-2xl font-semibold text-white max-sm:text-lg">
        RazorpayX Lite
      </div>
      {/* buttons */}
      <div className="flex items-center text-[#59A0F7]">
        <div className="flex items-center border border-[#59A0F7] rounded-sm mx-5 cursor-pointer">
          <div className="flex items-center py-2 px-4 hover:bg-[#08163D]">
            <div className="p-1 text-base">
              <RiAddFill />
            </div>
            <div className="text-sm font-semibold">PAYOUT</div>
          </div>
          <div className="hover:bg-[#08163D] py-2">
            <div className="py-1 px-3 border-l border-[#1D2345] font-bold">
              <FaAngleDown style={{ strokeWidth: 1 }} />
            </div>
          </div>
        </div>
        <div className="text-xl cursor-pointer">
          <GoSearch style={{ strokeWidth: 1 }} />
        </div>
        <div className="mx-6 cursor-pointer">
          <div className="text-yellow-600 text-xl transform -rotate-45 relative">
            <HiOutlineSpeakerphone />
          </div>
          <div className="transform -rotate-45 flex flex-row items-center absolute ml-4 -mt-10 text-yellow-600">
            <div className="curve1 text-xs">)</div>
            <div className="curve2 text-base">)</div>
            <div className="curve3 text-xl">)</div>
          </div>
        </div>
        <div className="text-2xl cursor-pointer">
          <LuUserCog style={{ strokeWidth: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default TransactionHeader;
