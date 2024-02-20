import { BiSolidHelpCircle } from "react-icons/bi";

const TransactionList = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap w-full items-center justify-between">
        <div className="flex items-center w-2/12 px-4 my-1">Date</div>
        <div className="flex items-center w-4/12">
          <div className="flex w-2/3 justify-end px-4 my-1">AMOUNT</div>
          <div className="flex w-2/3 justify-start px-4 my-1">CONTACT</div>
        </div>
        <div className="flex items-center w-3/12">
          <div className="flex w-2/3 justify-end px-4 my-1">
            CLOSING BALANCE
          </div>
          <div className="flex items-center w-1/3 justify-start px-4 my-1">
            VIA
            <div>
              <BiSolidHelpCircle />
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/12 px-4 my-1">SOURCE</div>
        <div className="flex items-center w-2/12 px-4 my-1">
          UTR
          <div>
            <BiSolidHelpCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
