const HelpButton = () => {
  return (
    <div className="bg-[#6e6ed9] rounded-full cursor-pointer">
      <div className="flex flex-row p-2 text-sm font-medium items-center">
        <div>
          <img
            src="https://x.razorpay.com/dist/assets/img/x-help/rx.svg"
            alt="logo-button"
          />
        </div>
        <div className="px-2">Need Help?</div>
      </div>
    </div>
  );
};

export default HelpButton;
