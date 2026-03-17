import { BookOpen, CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Membership() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    membershipType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We will contact you shortly.");
    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      membershipType: "",
      message: "",
    });
  };

  const requirements = [
    "Must be a resident of Murukoro, Muko, or surrounding areas in Rubanda District",
    "Must be 18 years of age or older",
    "Photocopy of valid National Identity Card (NID)",
    "Two recent passport-size photographs",
    "Payment of registration/membership fee (contact us for current fee)",
    "Commitment to make regular savings deposits",
    "Completion and submission of the membership application form",
    "Agreement to abide by the SACCO constitution and bylaws",
    "Two references from existing members (for some categories)",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure Savings",
      desc: "Your savings are secured and earn competitive interest annually.",
    },
    {
      icon: TrendingUp,
      title: "Access to Credit",
      desc: "Get access to affordable loans at low interest rates for any need.",
    },
    {
      icon: Users,
      title: "Co-ownership",
      desc: "As a member, you are a co-owner with voting rights and dividend entitlements.",
    },
    {
      icon: BookOpen,
      title: "Financial Training",
      desc: "Free access to financial literacy and entrepreneurship training programs.",
    },
    {
      icon: CheckCircle,
      title: "Social Welfare",
      desc: "Benefit from our social welfare fund during emergencies and difficult times.",
    },
  ];

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
            Join Our Family
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Membership
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Become a member and start your journey to financial freedom with
            Murukoro SACCO.
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

      {/* Requirements & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C" }}
              >
                Who Can Join
              </p>
              <h2 className="section-heading mb-8">Membership Requirements</h2>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#0A1F5C" }}
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C" }}
              >
                Why Join
              </p>
              <h2 className="section-heading mb-8">Member Benefits</h2>
              <div className="space-y-5">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "#f8f9fc" }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#0A1F5C" }}
                      >
                        <Icon size={20} color="white" />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "#0A1F5C" }}
                        >
                          {b.title}
                        </h4>
                        <p className="text-sm text-gray-600">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="section-heading-center">Express Your Interest</h2>
            <p className="text-gray-600 mt-4">
              Fill in the form below and we will reach out to guide you through
              the full membership process.
            </p>
          </div>

          {submitted ? (
            <div
              data-ocid="membership.success_state"
              className="text-center p-10 rounded-2xl"
              style={{ backgroundColor: "#0A1F5C" }}
            >
              <CheckCircle
                size={56}
                className="mx-auto mb-5"
                style={{ color: "#C9A84C" }}
              />
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Application Received!
              </h3>
              <p className="text-white opacity-80">
                Thank you for your interest. Our team will contact you within
                2-3 business days.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
                style={{ backgroundColor: "#C9A84C", color: "#0A1F5C" }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-navy space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="mem-name"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0A1F5C" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="mem-name"
                    data-ocid="membership.input"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="mem-phone"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0A1F5C" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="mem-phone"
                    data-ocid="membership.input"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="e.g. 0788000000"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mem-email"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: "#0A1F5C" }}
                >
                  Email Address
                </label>
                <input
                  id="mem-email"
                  data-ocid="membership.input"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="mem-location"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: "#0A1F5C" }}
                >
                  Location *
                </label>
                <input
                  id="mem-location"
                  data-ocid="membership.input"
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  placeholder="Village/Cell/Sector"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="mem-type"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: "#0A1F5C" }}
                >
                  Type of Membership
                </label>
                <select
                  id="mem-type"
                  data-ocid="membership.select"
                  value={form.membershipType}
                  onChange={(e) =>
                    setForm({ ...form, membershipType: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors duration-200 bg-white"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                  }}
                >
                  <option value="">Select membership type</option>
                  <option value="individual">Individual Membership</option>
                  <option value="group">Group Membership</option>
                  <option value="youth">Youth Membership</option>
                  <option value="corporate">Corporate Membership</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mem-message"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: "#0A1F5C" }}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="mem-message"
                  data-ocid="membership.textarea"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us a bit about yourself or any questions you have..."
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none transition-colors duration-200"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#0A1F5C";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                  }}
                />
              </div>
              <button
                type="submit"
                data-ocid="membership.submit_button"
                className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors duration-200"
                style={{ backgroundColor: "#0A1F5C" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#1a3a8c";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#0A1F5C";
                }}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
