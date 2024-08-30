const SavingNotifier = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">THANK YOU!</h1>
      <p className="text-2xl font-normal">
        You have successfully applied for a Bidder account!
      </p>
      <p className="text-2xl font-normal">
        Your submission has been received and is under review. You will be notified via email once your account is approved.
      </p>
    </div>
  );
};

export default SavingNotifier;

/**
 * Account can be a bidder, exhibitor, or trade buyer.
 * 
 * So it needs to be dynamic, and has a timer to redirect to the /home page.
 */
