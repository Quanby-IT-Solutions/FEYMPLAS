"use client";
import { useState } from "react";

export const QuestionsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    {
      question: "How do I register as a buyer or seller?",
      answer: "",
    },
    {
      question: "Can I update my profile information after registration?",
      answer:
        "Yes, you can update your profile, including contact details, pictures, and business logos at any time.",
    },
    {
      question: "How are bids handled during live auctions?",
      answer: "",
    },
  ];

  return (
    <section>
      <h1 className="w-[675px] h-9 relative text-[#2b271e] text-3xl font-bold font-['Urbanist']">
        General Information
      </h1>
      <div className="w-[140px] h-[0px] left-[303px] top-[21px] absolute border-2 border-black"></div>
      <div className="self-stretch h-56 flex-col justify-start items-start gap-[15px] flex">
        {questions.map((item, index) => (
          <div key={index}>
            <div
              className={`w-[675px] h-[53px] px-[47px] py-3 cursor-pointer ${
                activeIndex === index
                  ? "bg-[#6a704c] text-white"
                  : "border border-[#6a704c] text-[#6a704c]"
              } justify-end items-center gap-[108px] inline-flex`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="w-[462px] text-lg font-bold font-['Urbanist'] leading-7">
                {item.question}
              </div>
              <div className="text-lg font-bold font-['Urbanist'] leading-7">
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="w-[675px] text-[#2b271e] text-[15px] font-medium font-['Urbanist'] leading-tight p-4">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
