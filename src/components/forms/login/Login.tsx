import LoginExFirstSection from "./exhibitor/LoginExFirstSection";
import CustomerReview from "./CustomerReview";

const LoginForm = () => {
  return (
    <section className="w-full text-primary-2 flex flex-col gap-20">

      {/* uncomment this if you want to use trade-buyer Exhibitor login design */}
      <LoginExFirstSection />

      {/* same content lang yng second section kaya import nalang kaini */}
      <CustomerReview />

    </section>
  );
};

export default LoginForm;
