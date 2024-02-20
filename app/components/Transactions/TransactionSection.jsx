import FilterTransaction from "./FilterTransaction";
import TransactionHeader from "./TransactionHeader";

const TransactionSection = () => {
  return (
    <div className="my-2 pt-4">
      <TransactionHeader />
      <FilterTransaction />
      {/* Transaction List */}
      <div></div>
    </div>
  );
};

export default TransactionSection;
