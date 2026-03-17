import { CheckCircle, Eye, Heart, Target } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Our Mission",
    color: "#0A1F5C",
    text: "To mobilize savings and provide affordable credit and financial services to our members, thereby improving their livelihoods and fostering economic development in Murukoro and the surrounding communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "#1a3a8c",
    text: "To be the leading cooperative financial institution in Rubanda District, recognized for excellence in member service, financial sustainability, and community impact, transforming lives through the power of cooperative finance.",
  },
  {
    icon: Heart,
    title: "Core Values",
    color: "#111111",
    text: "Integrity \u2014 Transparency \u2014 Member Focus \u2014 Community Spirit \u2014 Financial Inclusion \u2014 Accountability \u2014 Continuous Improvement",
  },
];

const regDetails = [
  {
    label: "Full Name",
    value: "Murukoro Co-operatives Savings and Credit Society Limited",
  },
  { label: "Registration No.", value: "10203/RC5" },
  { label: "Type", value: "Savings and Credit Co-operative (SACCO)" },
  { label: "Location", value: "Murukoro, Butare, Muko, Rubanda District" },
  { label: "Country", value: "Rwanda" },
  { label: "Motto", value: "Work Hard and Save for the Future" },
];

const values = [
  "Democratically controlled by our members",
  "Voluntary and open membership for all eligible persons",
  "Members' economic participation and profit sharing",
  "Autonomy and independence from political influence",
  "Education and training for members and staff",
  "Cooperation among cooperative societies",
  "Concern for community development",
];

export default function AboutUs() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Hero */}
      <section
        className="relative py-24 text-white"
        style={{
          background: "linear-gradient(135deg, #0A1F5C 0%, #1a3a8c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C9A84C" }}
          >
            Who We Are
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Murukoro SACCO
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            A community-owned cooperative dedicated to financial empowerment in
            Rubanda District, Rwanda.
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C" }}
              >
                Our Story
              </p>
              <h2 className="section-heading mb-6">
                Building Financial Futures Together
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Murukoro Co-operatives Savings and Credit Society Limited was
                founded with a simple but powerful vision: to create a financial
                institution that truly belongs to and serves the people of
                Murukoro, Butare, Muko, and the wider Rubanda District.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                Registered under Reg. No. 10203/RC5, our SACCO has grown from a
                small community savings group into a trusted financial
                cooperative serving hundreds of members across the region. Every
                decision we make is guided by our motto:{" "}
                <em style={{ color: "#0A1F5C" }}>
                  "Work Hard and Save for the Future."
                </em>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located in Murukoro, Butare, Muko, Rubanda District, we are
                deeply rooted in our community. We understand the financial
                challenges our members face, and we are committed to providing
                solutions that are accessible, fair, and transformative.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/about-community.dim_800x500.jpg"
                alt="Murukoro SACCO Community"
                className="rounded-2xl shadow-navy-lg w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
              <div
                className="absolute -bottom-5 -left-5 px-6 py-4 rounded-xl shadow-lg"
                style={{ backgroundColor: "#0A1F5C" }}
              >
                <div className="font-display text-2xl font-bold text-white">
                  Since 2005
                </div>
                <div className="text-xs opacity-70 text-white">
                  Serving Our Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading-center">Our Guiding Principles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm card-hover text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={30} color="white" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-4"
                    style={{ color: "#0A1F5C" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Registration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "#0A1F5C" }}
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Registration &amp; Location
              </h3>
              <ul className="space-y-4">
                {regDetails.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:gap-3"
                  >
                    <span
                      className="text-sm font-semibold w-36 shrink-0"
                      style={{ color: "#C9A84C" }}
                    >
                      {item.label}:
                    </span>
                    <span className="text-sm text-white opacity-90">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "#0A1F5C" }}
              >
                What We Stand For
              </h3>
              <ul className="space-y-4">
                {values.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#0A1F5C" }}
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
