import React from "react";
import LoginCard from "@/screens/login/loginCard";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
import CTAButtons from "./CTAButton";
import Testimonial from "./Testimonial";
import SocialLogin from "./socialLogin";
import FAQSection from "./faqSection";
import Footer from "./footer";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col w-full h-full mt-[10px]">
      <section className="mx-auto w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LoginCard
            icon={<FaUserCircle />}
            text="User Account"
            subText="Manage your account settings"
          />
          <LoginCard
            icon={<FaLock />}
            text="Security"
            subText="Change your password and secure your account"
          />
          <LoginCard
            icon={<FaEnvelope />}
            text="Messages"
            subText="Check your inbox for updates"
          />
        </div>
        {/* <CTAButtons /> */}
        <Testimonial />
        {/* <SocialLogin /> */}
        <FAQSection />
        <Footer />
      </section>
    </main>
  );
};

export default LoginPage;
