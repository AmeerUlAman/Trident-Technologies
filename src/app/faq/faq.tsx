"use client";

import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "How do I submit my project requirements?",
    answer: "Simply fill out the form on our website with your project details, and we’ll get back to you.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity, but we strive to deliver as efficiently as possible.",
  },
  {
    question: "What types of services do you offer?",
    answer: "We provide Web Development, AI/ML solutions, Automation, Graphic Design, and more.",
  },
  {
    question: "How can I track the progress of my project?",
    answer: "We provide regular updates and a client dashboard to keep you informed about your project's status.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
