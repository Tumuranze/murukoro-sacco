import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  CheckCircle,
  GraduationCap,
  Info,
  Sprout,
  Zap,
} from "lucide-react";

const loans = [
  {
    icon: Sprout,
    title: "Agricultural Loan",
    tagline: "For farming and agri-business",
    maxAmount: "5,000,000 RWF",
    term: "12 \u2013 36 months",
    rate: "12% p.a.",
    color: "#0A1F5C",
    benefits: [
      "Crop production financing",
      "Livestock purchase and rearing",
      "Farm equipment acquisition",
      "Irrigation systems",
      "Agricultural inputs (seeds, fertilizer)",
      "Seasonal flexibility",
    ],
    requirements: [
      "Active SACCO membership",
      "6 months savings history",
      "Land ownership/lease documents",
      "Loan guarantors (2 required)",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    tagline: "For SMEs and entrepreneurs",
    maxAmount: "10,000,000 RWF",
    term: "6 \u2013 24 months",
    rate: "14% p.a.",
    color: "#111111",
    benefits: [
      "Working capital financing",
      "Business expansion support",
      "Inventory purchase",
      "Shop or office renovation",
      "Business equipment",
      "Trade finance",
    ],
    requirements: [
      "Active SACCO membership",
      "Business registration documents",
      "6-month savings history",
      "Business plan (for large amounts)",
    ],
  },
  {
    icon: GraduationCap,
    title: "School Fees Loan",
    tagline: "Education financing for families",
    maxAmount: "2,000,000 RWF",
    term: "Up to 12 months",
    rate: "10% p.a.",
    color: "#1a3a8c",
    benefits: [
      "Primary school fees",
      "Secondary school fees",
      "University and college fees",
      "Vocational training fees",
      "School supplies and uniforms",
      "Quick disbursement",
    ],
    requirements: [
      "Active SACCO membership",
      "Admission letter or fees structure",
      "3-month savings history",
      "One loan guarantor",
    ],
  },
  {
    icon: Zap,
    title: "Emergency Loan",
    tagline: "Fast relief for urgent needs",
    maxAmount: "500,000 RWF",
    term: "Up to 6 months",
    rate: "8% p.a.",
    color: "#0A1F5C",
    benefits: [
      "Medical emergencies",
      "Funeral/bereavement costs",
      "Urgent home repairs",
      "Quick approval in 24\u201348 hours",
      "Minimal paperwork",
      "Lowest interest rate",
    ],
    requirements: [
      "Active SACCO membership",
      "Valid ID",
      "Statement of emergency",
      "One loan guarantor",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Become a Member",
    desc: "Join Murukoro SACCO and start your savings account.",
  },
  {
    step: "02",
    title: "Build Savings",
    desc: "Maintain regular savings for at least 3-6 months.",
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Fill in the loan application form with required documents.",
  },
  {
    step: "04",
    title: "Receive Funds",
    desc: "Upon approval, funds are disbursed directly to you.",
  },
];

export default function Loans() {
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
            Financial Solutions
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Loan Products
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Affordable, flexible, and transparent loan products designed to meet
            the real needs of our members.
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

      {/* Loan Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {loans.map((loan, i) => {
              const Icon = loan.icon;
              return (
                <div
                  key={loan.title}
                  className="rounded-2xl overflow-hidden shadow-navy card-hover"
                  data-ocid={`loans.item.${i + 1}`}
                >
                  <div className="p-6" style={{ backgroundColor: loan.color }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <Icon size={22} color="white" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {loan.title}
                        </h3>
                        <p className="text-sm opacity-80 text-white">
                          {loan.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-5">
                      {[
                        { label: "Max Amount", value: loan.maxAmount },
                        { label: "Repayment", value: loan.term },
                        { label: "Interest", value: loan.rate },
                      ].map((detail) => (
                        <div
                          key={detail.label}
                          className="text-center p-2 rounded-lg"
                          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        >
                          <div className="font-bold text-sm text-white">
                            {detail.value}
                          </div>
                          <div className="text-xs opacity-70 text-white mt-0.5">
                            {detail.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#f8f9fc" }}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4
                          className="font-semibold text-sm mb-3 flex items-center gap-1"
                          style={{ color: "#0A1F5C" }}
                        >
                          <CheckCircle size={15} /> What it Covers
                        </h4>
                        <ul className="space-y-1.5">
                          {loan.benefits.map((b) => (
                            <li
                              key={b}
                              className="text-xs text-gray-600 flex items-center gap-1.5"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: "#C9A84C" }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4
                          className="font-semibold text-sm mb-3 flex items-center gap-1"
                          style={{ color: "#0A1F5C" }}
                        >
                          <Info size={15} /> Requirements
                        </h4>
                        <ul className="space-y-1.5">
                          {loan.requirements.map((r) => (
                            <li
                              key={r}
                              className="text-xs text-gray-600 flex items-center gap-1.5"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: "#0A1F5C" }}
                              />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      to="/membership"
                      data-ocid="loans.primary_button"
                      className="mt-6 w-full block text-center font-semibold py-2.5 rounded-xl text-sm transition-colors duration-200 text-white"
                      style={{ backgroundColor: "#0A1F5C" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#1a3a8c";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#0A1F5C";
                      }}
                    >
                      Apply for {loan.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20" style={{ backgroundColor: "#0A1F5C" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              How to Apply for a Loan
            </h2>
            <p className="text-white opacity-80">
              Simple, transparent, and member-friendly process
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="font-display text-4xl font-bold mb-3"
                  style={{ color: "#C9A84C" }}
                >
                  {s.step}
                </div>
                <h4 className="font-semibold text-white mb-2">{s.title}</h4>
                <p className="text-sm opacity-75 text-white">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
