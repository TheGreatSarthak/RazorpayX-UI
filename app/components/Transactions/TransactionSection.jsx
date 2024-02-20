import FilterTransaction from "./FilterTransaction";
import TransactionHeader from "./TransactionHeader";
import TransactionListBox from "./TransactionListBox";

const TransactionSection = () => {
  return (
    <div className="my-2 pt-4">
      <TransactionHeader />
      <FilterTransaction />
      <TransactionListBox />
    </div>
  );
};

export default TransactionSection;
