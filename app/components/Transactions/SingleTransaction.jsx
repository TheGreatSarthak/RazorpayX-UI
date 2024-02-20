const SingleTransaction = ({ transaction }) => {
  return (
    <div className="flex flex-row flex-wrap w-full items-center justify-between text-xs text-gray-400">
      <div className="flex items-center w-2/12 px-4 my-1">
        {transaction.time}
      </div>
      <div className="flex items-center w-4/12">
        <div className="flex w-2/3 justify-end px-4 my-1">
          {transaction.amount}
        </div>
        <div className="flex w-2/3 justify-start px-4 my-1">
          {transaction.contact}
        </div>
      </div>
      <div className="flex items-center w-3/12">
        <div className="flex w-2/3 justify-end px-4 my-1">
          {transaction.closingBalance}
        </div>
        <div className="flex items-center w-1/3 justify-start px-4 my-1">
          {transaction.via}
        </div>
      </div>
      <div className="flex items-center w-1/12 px-4 my-1">
        {transaction.source}
      </div>
      <div className="flex items-center w-2/12 px-4 my-1">
        {transaction.utr}
      </div>
    </div>
  );
};

export default SingleTransaction;
