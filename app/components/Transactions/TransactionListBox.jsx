import { GoDotFill } from "react-icons/go";
import { RiLoopRightLine } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import TransactionList from "./TransactionList";

const TransactionListBox = () => {
  return (
    <div className="px-6">
      <div className="px-6 my-1 bg-[#202444] w-full rounded-md">
        {/* export bar */}
        <div className="flex flex-row flex-wrap items-center border-b border-gray-300 justify-between">
          <div className="flex items-center text-sm my-2">
            <div className="font-medium">Showing all transactions</div>
            <div className="mx-2">
              <GoDotFill />
            </div>
            <div className="flex items-center">
              Sort by
              <div className="px-1 font-medium">newest transactions first</div>
            </div>
          </div>
          <div className="flex items-center text-base text-[#59A0F7] flex-wrap">
            <div className="py-1 px-3 my-2 mr-4 cursor-pointer">
              <RiLoopRightLine />
            </div>
            <div className="flex items-center border px-3 py-1 border-[#59A0F7] my-2 mr-4 rounded-sm hover:bg-[#141B3E] cursor-pointer">
              <div className="p-1">
                <FiLink style={{ strokeWidth: 3 }} />
              </div>
              <div>Automate Accounting</div>
            </div>
            <div className="flex items-center border px-3 py-1 border-[#59A0F7] my-2 rounded-sm hover:bg-[#141B3E] cursor-pointer">
              <div className="p-1">
                <HiOutlineDownload style={{ strokeWidth: 3 }} />
              </div>
              <div>Export</div>
            </div>
          </div>
        </div>
        <div className="my-2">
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default TransactionListBox;
