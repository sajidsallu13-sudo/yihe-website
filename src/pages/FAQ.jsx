import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does YIHE provide?",
    answer:
      "YIHE provides product sourcing, supplier verification, quality inspection, shipping, logistics, and import-export consulting.",
  },
  {
    question: "Can you source products from China?",
    answer:
      "Yes. We help businesses source quality products directly from trusted Chinese manufacturers.",
  },
  {
    question: "Do you provide quality inspection?",
    answer:
      "Yes. We arrange professional quality inspections before shipment to ensure product quality.",
  },
  {
    question: "What shipping methods are available?",
    answer:
      "We offer Sea Freight, Air Freight, Express Shipping, and Railway transportation depending on your requirements.",
  },
  {
    question: "Can I request a custom quotation?",
    answer:
      "Absolutely. Simply visit our Request Quote page and submit your product requirements.",
  },
  {
    question: "Do you help with customs clearance?",
    answer:
      "Yes. We guide clients through import documentation and customs clearance processes.",
  },
  {
    question: "Which countries do you serve?",
    answer:
      "We work with clients worldwide including India, UAE, Africa, Europe, and many other international markets.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "MOQ depends on the product and manufacturer. Contact us for specific product requirements.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Sea freight usually takes 20–40 days, while air freight takes around 5–10 days depending on the destination.",
  },
  {
    question: "How can I contact YIHE?",
    answer:
      "You can contact us through our Contact page, email, WhatsApp, or Request Quote form.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-[#081F4D] to-[#0E3A8A] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
            Find answers to the most common questions about our sourcing,
            import, export and logistics services.
          </p>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-5 rounded-xl bg-white shadow"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                {open === index ? (
                  <ChevronUp size={22} />
                ) : (
                  <ChevronDown size={22} />
                )}
              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#081F4D] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Still Have Questions?
          </h2>

          <p className="mt-5 text-blue-100">
            Our team is ready to help you with sourcing, importing and international trade.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#081F4D]"
            >
              Contact Us
            </Link>

            <Link
              to="/quote"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#081F4D]"
            >
              Request Quote
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}