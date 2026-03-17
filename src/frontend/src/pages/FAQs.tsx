import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Who is eligible to join Murukoro SACCO?",
    a: "Any adult (18 years or older) residing in Murukoro, Butare, Muko, or surrounding areas in Rubanda District, Rwanda, is eligible to join. You must agree to abide by the SACCO's constitution and pay the membership registration fee.",
  },
  {
    q: "How do I become a member of the SACCO?",
    a: "To join, visit our office at Murukoro with your National Identity Card, two passport-size photos, and the membership fee. You'll complete an application form, and upon approval, you'll receive your member number and savings passbook.",
  },
  {
    q: "What types of loans does Murukoro SACCO offer?",
    a: "We offer four main loan products: Agricultural Loans (for farming activities), Business Loans (for small and medium enterprises), School Fees Loans (for education financing), and Emergency Loans (for urgent financial needs).",
  },
  {
    q: "How much can I borrow from the SACCO?",
    a: "Loan amounts vary by product: Agricultural loans up to 5,000,000 RWF, Business loans up to 10,000,000 RWF, School fees loans up to 2,000,000 RWF, and Emergency loans up to 500,000 RWF. The actual amount depends on your savings history and capacity to repay.",
  },
  {
    q: "What are the interest rates on loans?",
    a: "Our interest rates are competitive and transparent: Agricultural loans at 12% p.a., Business loans at 14% p.a., School fees loans at 10% p.a., and Emergency loans at 8% p.a. All rates are applied on the reducing balance method.",
  },
  {
    q: "How long does loan approval take?",
    a: "Standard loans (agricultural and business) are processed within 3-7 working days. School fees loans take 2-3 working days. Emergency loans are the fastest, typically processed within 24-48 hours to ensure you get help when you need it most.",
  },
  {
    q: "Do I need a guarantor to access a loan?",
    a: "Yes, most loans require one or two guarantors who are active members of Murukoro SACCO. Emergency loans require at least one guarantor. Guarantors must have good standing in the SACCO and agree to cover repayment if the borrower defaults.",
  },
  {
    q: "How much savings do I need before applying for a loan?",
    a: "Typically, you need at least 3-6 months of regular savings history before applying for a loan. Emergency loans require a minimum of 3 months, while agricultural and business loans require 6 months of savings history.",
  },
  {
    q: "What happens if I cannot repay my loan on time?",
    a: "We understand that financial difficulties can arise. Please contact our loans officer immediately if you're facing repayment challenges. We offer restructuring options. However, consistent default may affect your credit standing with the SACCO and your guarantors.",
  },
  {
    q: "Can I withdraw my savings at any time?",
    a: "Regular savings can be withdrawn subject to SACCO withdrawal policies, typically with a minimum balance requirement. Fixed deposit savings have specific maturity periods. Please contact our office to understand the specific terms applicable to your savings account.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="py-24 text-white relative"
        style={{ background: "linear-gradient(135deg, #0A1F5C, #1a3a8c)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Got Questions?
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about Murukoro SACCO's
            services, membership, and loans.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              fill="#ffffff"
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            />
          </svg>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-ocid={`faqs.item.${i + 1}`}
                className="border rounded-xl overflow-hidden"
                style={{ borderColor: openIndex === i ? "#0A1F5C" : "#e5e7eb" }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                  style={{
                    backgroundColor: openIndex === i ? "#0A1F5C" : "white",
                  }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-ocid="faqs.toggle"
                >
                  <span
                    className="font-semibold text-sm leading-snug"
                    style={{ color: openIndex === i ? "white" : "#0A1F5C" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200"
                    style={{
                      color: openIndex === i ? "#C9A84C" : "#0A1F5C",
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                {openIndex === i && (
                  <div
                    className="px-5 py-4"
                    style={{ backgroundColor: "#f8f9fc" }}
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display text-2xl font-bold mb-3"
            style={{ color: "#0A1F5C" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our friendly team is always ready to help. Contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0788801417"
              data-ocid="faqs.primary_button"
              className="btn-navy"
            >
              Call Manager: 0788801417
            </a>
            <a
              href="mailto:murukorosacco@gmail.com"
              data-ocid="faqs.secondary_button"
              className="inline-flex items-center justify-center font-semibold py-3 px-7 rounded-full border-2 transition-all duration-200"
              style={{ borderColor: "#0A1F5C", color: "#0A1F5C" }}
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
