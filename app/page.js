import HelpButton from "./components/HelpButton";
import Sidebar from "./components/Sidebar/Sidebar";
import TransactionSection from "./components/Transactions/TransactionSection";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="pl-12 absolute w-full">
          <TransactionSection />
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <HelpButton />
      </div>
    </div>
  );
}
