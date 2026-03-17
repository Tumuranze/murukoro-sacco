import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  HandHeart,
  Home as HomeIcon,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Sprout,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Active Members", icon: Users },
  { value: "Since 2005", label: "Years of Trust", icon: Award },
  { value: "4 Products", label: "Loan Categories", icon: Landmark },
  { value: "Community", label: "First Always", icon: HandHeart },
];

const services = [
  {
    icon: PiggyBank,
    title: "Savings Mobilisation",
    desc: "We help members build a savings culture with competitive interest rates and flexible deposit options tailored for the community.",
    link: "/services",
  },
  {
    icon: Landmark,
    title: "Accessible Loans",
    desc: "From agricultural to emergency loans, we offer fair-interest financing to help members achieve their personal and business goals.",
    link: "/loans",
  },
  {
    icon: HomeIcon,
    title: "Rental Services",
    desc: "Our SACCO provides rental property services supporting the community's housing and business space needs in Murukoro.",
    link: "/services",
  },
];

const testimonials = [
  {
    name: "Marie Claire UWIMANA",
    role: "Farmer, Rubanda District",
    text: "Thanks to Murukoro SACCO's agricultural loan, I expanded my farm and increased my income threefold. Their support changed my family's life.",
    rating: 5,
  },
  {
    name: "Jean Paul HABIMANA",
    role: "Small Business Owner",
    text: "The business loan I received helped me open my second shop. The process was simple, the interest rate fair, and the staff very professional.",
    rating: 5,
  },
];

const whyItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    desc: "Registered cooperative society with transparent governance and member accountability.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    desc: "Some of the most competitive interest rates on savings and loans in the region.",
  },
  {
    icon: Users,
    title: "Member Owned",
    desc: "Every member is a co-owner with voting rights, profit sharing and equal voice.",
  },
  {
    icon: Sprout,
    title: "Community Growth",
    desc: "We invest back in the community through social welfare, education and development.",
  },
  {
    icon: PiggyBank,
    title: "Flexible Savings",
    desc: "Multiple savings products tailored to individual goals and financial capacities.",
  },
  {
    icon: HandHeart,
    title: "Emergency Support",
    desc: "Quick emergency loans to help members during unexpected financial challenges.",
  },
];

const starRatings = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10,31,92,0.72)" }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
            style={{
              backgroundColor: "rgba(201,168,76,0.25)",
              border: "1px solid #C9A84C",
              color: "#C9A84C",
            }}
          >
            Reg. No. 10203/RC5
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            MURUKORO CO-OPERATIVES SAVINGS AND CREDIT SOCIETY
          </h1>
          <p
            className="text-lg md:text-xl font-medium mb-3 tracking-wide"
            style={{ color: "#C9A84C" }}
          >
            &ldquo;Work Hard and Save for the Future&rdquo;
          </p>
          <p className="text-base md:text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Empowering the people of Murukoro, Butare, Muko, Rubanda District
            through cooperative savings, affordable loans, and community
            welfare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              data-ocid="home.primary_button"
              className="btn-navy"
            >
              Join Now
            </Link>
            <Link
              to="/loans"
              data-ocid="home.secondary_button"
              className="btn-outline-white"
            >
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              fill="#ffffff"
              d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className="text-center p-6 rounded-2xl card-hover shadow-navy"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#0A1F5C" : "#111111",
                  }}
                >
                  <Icon
                    size={32}
                    className="mx-auto mb-3"
                    style={{ color: "#C9A84C" }}
                  />
                  <div className="font-display text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-70 text-white">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading-center">Our Core Services</h2>
            <p className="text-gray-600 mt-6 max-w-xl mx-auto">
              We offer a comprehensive range of financial services designed to
              support every member of the Murukoro community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-8 card-hover shadow-sm border"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#eef1f9" }}
                  >
                    <Icon size={28} style={{ color: "#0A1F5C" }} />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: "#0A1F5C" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <Link
                    to={s.link}
                    data-ocid="home.secondary_button"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "#0A1F5C" }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="home.primary_button"
              className="btn-navy"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "#0A1F5C" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white relative inline-block pb-3">
              Why Choose Murukoro SACCO?
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5"
                style={{ backgroundColor: "#C9A84C" }}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="shrink-0">
                    <Icon size={28} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-75 text-white leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading-center">Member Testimonials</h2>
            <p className="text-gray-600 mt-6">
              Hear from those whose lives have been transformed by Murukoro
              SACCO.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl card-hover border-l-4"
                style={{
                  backgroundColor: "#f8f9fc",
                  borderLeftColor: "#C9A84C",
                }}
              >
                <div className="flex mb-4">
                  {starRatings.slice(0, t.rating).map((n) => (
                    <Star
                      key={n}
                      size={16}
                      fill="#C9A84C"
                      style={{ color: "#C9A84C" }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <div
                    className="font-display font-bold"
                    style={{ color: "#0A1F5C" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1F5C, #1a3a8c)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="opacity-90 mb-8 text-lg">
            Become a member of Murukoro SACCO today and start your journey
            towards financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              data-ocid="home.primary_button"
              className="btn-outline-white"
            >
              Become a Member
            </Link>
            <Link
              to="/contact"
              data-ocid="home.secondary_button"
              className="font-semibold py-3 px-7 rounded-full transition-all duration-200 inline-block"
              style={{ backgroundColor: "#C9A84C", color: "#0A1F5C" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
