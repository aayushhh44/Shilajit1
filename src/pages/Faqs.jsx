import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  const initialFAQs = [
    {
      question: "What is Gurkha Shilajit?",
      answer:
        "Gurkha Shilajit is a premium-grade shilajit product sourced from high-altitude regions, particularly the Himalayas. It is a natural resin-like substance known for its rich mineral content and health benefits.",
    },
    {
      question: "How do I use Gurkha Shilajit?",
      answer:
        "Gurkha Shilajit can be consumed by mixing a small amount of the resin with warm water, milk, or your favorite beverage. Alternatively, it can be taken in capsule form as a convenient dietary supplement.",
    },
    {
      question: "What are the benefits of Gurkha Shilajit?",
      answer:
        "Gurkha Shilajit is believed to offer a wide range of health benefits, including increased energy levels, improved vitality, enhanced cognitive function, and support for overall well-being. It is also known for its antioxidant and anti-inflammatory properties.",
    },
    {
      question: "Is Gurkha Shilajit safe?",
      answer:
        "Yes, Gurkha Shilajit is safe for consumption when used as directed. It undergoes rigorous testing to ensure purity and quality, and it is free from harmful contaminants. However, pregnant or nursing women and individuals with specific health conditions should consult with a healthcare professional before use.",
    },
    {
      question: "Where can I purchase Gurkha Shilajit?",
      answer:
        "Gurkha Shilajit is available for purchase online through this website or authorized retailers. You can also find it in select health stores and wellness shops. When buying Gurkha Shilajit, ensure that you're getting it from reputable sources to guarantee its authenticity and effectiveness.",
    },
  ];

  const [showAnswers, setShowAnswers] = useState(
    Array(initialFAQs.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setShowAnswers((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  
  return (
    <div id="faqs" className="faq-container h-full flex flex-col gap-10 p-6">
      <h1 className="text-2xl md:text-3xl font-poppins">FAQs</h1>

      {initialFAQs.map((faq, index) => (
        <div
          key={index}
          className="w-full p-4 bg-gray-300 cursor-pointer mx-auto transition-all duration-500"
          onClick={() => toggleAnswer(index)}
        >
          <div className="flex justify-center items-center gap-4">
            <p className="font-poppins text-center font-medium">{faq.question}</p>
            <FaAngleDown />
          </div>
          {showAnswers[index] && (
            <p className="font-poppins font-light">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
