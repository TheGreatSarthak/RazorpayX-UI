import { BiSolidHelpCircle } from "react-icons/bi";
import { transactionsList } from "@/app/utils/data.js";
import SingleTransaction from "./SingleTransaction";

const TransactionList = () => {
  return (
    <div className="w-full">
      {/* column names */}
      <div className="flex flex-row flex-wrap w-full items-center justify-between text-sm">
        <div className="flex items-center w-2/12 px-4 my-1">Date</div>
        <div className="flex items-center w-4/12">
          <div className="flex w-2/3 justify-end px-4 my-1">AMOUNT</div>
          <div className="flex w-2/3 justify-start px-4 my-1">CONTACT</div>
        </div>
        <div className="flex items-center w-4/12">
          <div className="flex w-1/2 justify-end px-4 my-1 max-sm:hidden">
            CLOSING BALANCE
          </div>
          <div className="flex items-center w-1/2 justify-start px-4 my-1">
            VIA
            <div>
              <BiSolidHelpCircle />
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/12 px-4 my-1 max-lg:hidden">
          SOURCE
        </div>
        <div className="flex items-center w-1/12 px-4 my-1 max-md:hidden">
          UTR
          <div>
            <BiSolidHelpCircle />
          </div>
        </div>
      </div>
      {/* current date */}
      <div className="text-sm font-medium my-1">{transactionsList[0].date}</div>
      {/* list of single transactions */}
      {transactionsList[0].transactions.map((transaction) => (
        <SingleTransaction transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
