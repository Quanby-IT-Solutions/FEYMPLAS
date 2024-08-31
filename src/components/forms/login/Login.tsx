/* eslint-disable @next/next/no-img-element */
// src/components/forms/Login.tsx

import Button from "@/components/ui/Button";
import VerticalText from "./VerticalText";
import LoginFirstSection from "./trade-buyer/LoginFirstSection";
import LoginSecondSection from "./trade-buyer/LoginSecondSection";
import LoginModalTradeBuyer from "./LoginModalTradeBuyer";
import LoginModalExhibitor from "./LoginModalExhibitor";
import LoginExFirstSection from "./exhibitor/LoginExFirstSection";

const LoginForm = () => {
  return (
    <section className="w-full text-primary-2 flex flex-col gap-20">
      {/* 
      <h1 className="text-3xl font-bold">Login</h1>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button> Login </Button>
            </form> 
            */}

      {/* <LoginFirstSection /> */}

      <LoginExFirstSection />

      {/* same content lang yng second section kaya import nalang kaini */}
      <LoginSecondSection />

    </section>
  );
};

export default LoginForm;
