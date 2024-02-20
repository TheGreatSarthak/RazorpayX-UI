const SingleTransaction = ({ transaction }) => {
  const nonDecimalPart = transaction.amount.slice(0, -3);
  const decimalPart = transaction.amount.slice(-3);
  const closingBalanceNonDecimal = transaction.closingBalance.slice(0, -3);
  const closingBalanceDecimal = transaction.closingBalance.slice(-3);

  return (
    <div className="flex flex-row flex-wrap w-full items-center justify-between text-xs text-gray-400 my-4 font-medium">
      <div className="flex items-center w-2/12 px-4 my-1">
        <img
          src={`${
            transaction.type === "debit"
              ? "https://x.razorpay.com/dist/assets/img/payout.svg"
              : "https://x.razorpay.com/dist/assets/img/inflow.svg"
          }`}
          alt="type"
          className="h-4 w-4 mr-2"
        />
        {transaction.time}
      </div>
      <div className="flex items-center w-4/12">
        <div className="flex w-2/3 justify-end px-4 my-1">
          <span className="text-gray-300">{nonDecimalPart}</span>
          <span className="text-gray-500">{decimalPart}</span>
        </div>
        <div className="flex w-2/3 justify-start px-4 my-1">
          {transaction.contact}
        </div>
      </div>
      <div className="flex items-center w-4/12">
        <div className="flex w-1/2 justify-end px-4 my-1 max-sm:hidden">
          <span>{closingBalanceNonDecimal}</span>
          <span className="text-gray-500">{closingBalanceDecimal}</span>
        </div>
        <div className="flex items-center w-1/2 justify-start px-4 my-1">
          {transaction.via}
        </div>
      </div>
      <div className="flex items-center w-1/12 px-4 my-1 max-lg:hidden">
        {transaction.source}
      </div>
      <div className="flex items-center w-1/12 px-4 my-1 overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible hover:whitespace-normal max-md:hidden">
        {transaction.utr}
      </div>
    </div>
  );
};

export default SingleTransaction;
