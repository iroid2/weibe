"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Plus, Minus } from "lucide-react";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What's included in a clean?",
      answer:
        "Our standard cleaning includes dusting all surfaces, vacuuming carpets, mopping floors, cleaning bathrooms (toilets, sinks, showers, mirrors), kitchen cleaning (countertops, appliances, sink), and trash removal.",
    },
    {
      question: "How much does it cost to clean my home?",
      answer:
        "Pricing depends on the size of your home, frequency of service, and specific requirements. Our Home Essentials package starts at UGX 150,000, with Family Deluxe at UGX 280,000. Contact us for a personalized quote.",
    },
    {
      question: "Are the cleaning supplies included?",
      answer:
        "Yes! We bring all necessary cleaning supplies and equipment. We use eco-friendly, professional-grade products that are safe for your family and pets. If you have specific product preferences, we're happy to accommodate.",
    },
    {
      question: "What time do you offer cleaning services?",
      answer:
        "We offer flexible scheduling Monday through Sunday, 7:00 AM to 8:00 PM. Our VIP members get priority booking and can schedule services as early as 6:00 AM or as late as 9:00 PM.",
    },
  ];

  return (
    <div className="md:p-10">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider font-poppins">
                FAQS
              </span>
              <div className="w-8 h-0.5 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Card */}
            <div className="bg-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">
                Looking for the cleaning service in Uganda?
                <br />
                Contact us now!
              </h3>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 font-poppins">
                <Phone className="w-4 h-4" />
                +256 754 185102
              </Button>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900 font-poppins">
                      {faq.question}
                    </span>
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 font-poppins leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
