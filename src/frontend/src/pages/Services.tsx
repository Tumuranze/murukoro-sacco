import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  Landmark,
  PiggyBank,
  ShieldAlert,
  Sprout,
  Users,
} from "lucide-react";

const services = [
  {
    icon: PiggyBank,
    title: "Savings Mobilisation",
    desc: "We encourage a culture of regular saving among our members. Our savings products include regular savings accounts, fixed deposit accounts, and goal-based savings. Members earn competitive interest on their deposits while building long-term financial security.",
    features: [
      "Regular savings accounts",
      "Fixed deposit savings",
      "Goal-based savings plans",
      "Competitive interest rates",
      "Flexible deposit schedules",
    ],
    image: null,
  },
  {
    icon: Sprout,
    title: "Agricultural Loans",
    desc: "Supporting the farming community is at the heart of what we do. Our agricultural loans provide affordable financing for crop cultivation, livestock, irrigation, farm equipment, and other farm-related activities.",
    features: [
      "Seasonal crop financing",
      "Livestock acquisition",
      "Farm equipment loans",
      "Irrigation infrastructure",
      "Up to 5,000,000 RWF",
    ],
    image: "/assets/generated/services-agriculture.dim_600x400.jpg",
  },
  {
    icon: Landmark,
    title: "Business Loans",
    desc: "We empower entrepreneurs and small business owners with accessible business loans to start or expand their enterprises. Whether you're opening a shop, expanding inventory, or investing in equipment — we're here to support your growth.",
    features: [
      "Working capital loans",
      "Business expansion financing",
      "Inventory financing",
      "Equipment loans",
      "Up to 10,000,000 RWF",
    ],
    image: "/assets/generated/services-business.dim_600x400.jpg",
  },
  {
    icon: Users,
    title: "Social Welfare Support",
    desc: "We believe in the well-being of our entire community. Our social welfare program provides support during times of hardship, including bereavement assistance, medical support, and welfare grants for members in need.",
    features: [
      "Bereavement assistance",
      "Medical emergency support",
      "Welfare grants",
      "Member solidarity fund",
      "Community development initiatives",
    ],
    image: null,
  },
  {
    icon: Home,
    title: "Rental Services",
    desc: "Murukoro SACCO operates rental properties to generate income for the cooperative while providing affordable spaces for members and the community. This supports the SACCO's sustainability and provides members with decent rental options.",
    features: [
      "Residential rental units",
      "Commercial spaces",
      "Affordable rates for members",
      "Well-maintained properties",
      "Priority access for members",
    ],
    image: null,
  },
  {
    icon: ShieldAlert,
    title: "Emergency Assistance",
    desc: "Life is unpredictable. Our emergency loan service provides fast financial relief when unexpected situations arise — medical bills, urgent repairs, or sudden family obligations. Quick processing ensures you get help when you need it most.",
    features: [
      "Fast approval process",
      "Up to 500,000 RWF",
      "Flexible repayment up to 6 months",
      "Low interest rate of 8% p.a.",
      "Available to all active members",
    ],
    image: null,
  },
];

export default function Services() {
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
            What We Offer
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Comprehensive financial and community services designed to uplift
            every member of our cooperative family.
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`flex flex-col ${
                    service.image
                      ? isEven
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                      : ""
                  } gap-10 items-center`}
                >
                  {service.image && (
                    <div className="lg:w-2/5 w-full shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-navy-lg w-full object-cover"
                        style={{ maxHeight: "320px" }}
                      />
                    </div>
                  )}
                  <div className={service.image ? "lg:w-3/5" : "w-full"}>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: "#eef1f9" }}
                    >
                      <Icon size={28} style={{ color: "#0A1F5C" }} />
                    </div>
                    <h3
                      className="font-display text-2xl font-bold mb-4"
                      style={{ color: "#0A1F5C" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#C9A84C" }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display text-3xl font-bold mb-4"
            style={{ color: "#0A1F5C" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Join Murukoro SACCO and access all these services designed for your
            financial growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              data-ocid="services.primary_button"
              className="btn-navy"
            >
              Become a Member
            </Link>
            <Link
              to="/loans"
              data-ocid="services.secondary_button"
              className="inline-flex items-center gap-2 font-semibold py-3 px-7 rounded-full border-2 transition-all duration-200"
              style={{ borderColor: "#0A1F5C", color: "#0A1F5C" }}
            >
              View Loan Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
