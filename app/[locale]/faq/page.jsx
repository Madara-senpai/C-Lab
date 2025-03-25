'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Can I cancel at anytime?',
    answer: 'Yes, you can cancel anytime. No questions are asked while you cancel, but we would highly appreciate it if you could provide some feedback.',
  },
  {
    question: 'My team has credits. How do we use them?',
    answer: 'Once your team signs up for a subscription plan, we will go through the details together.',
  },
  {
    question: "How does Preline's pricing work?",
    answer: 'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.',
  },
  {
    question: 'How secure is Preline?',
    answer: 'Protecting the data you trust to Preline is our first priority. This is crucial in keeping the project in line to completion.',
  },
  {
    question: 'How do I get access to a theme I purchased?',
    answer: 'If you lose the link for a theme you purchased, login to your account, tap your avatar, and go to Purchases.',
  },
  {
    question: 'Upgrade License Type',
    answer: 'There may be times when you need to upgrade your license. We ensure you can apply your original purchase cost to the new license purchase.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Your questions, answered
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Answers to the most frequently asked questions.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all dark:bg-white/10 ${
              openIndex === index ? 'bg-gray-100 dark:bg-white/10' : ''
            }`}
          >
            <button
              className="w-full text-left font-semibold text-gray-800 dark:text-neutral-200 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <svg
                className={`size-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-800 dark:text-neutral-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}