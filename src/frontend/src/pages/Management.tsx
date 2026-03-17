import { Phone } from "lucide-react";

const management = [
  {
    name: "Mr. Jean Baptiste NZEYIMANA",
    role: "Chairman",
    image: "/assets/generated/mgmt-chairman.dim_300x300.jpg",
    bio: "An experienced community leader with over 15 years in cooperative governance. Mr. Nzeyimana has been instrumental in growing Murukoro SACCO into the trusted institution it is today.",
    contact: "0772604149",
  },
  {
    name: "Mrs. Immacu\u00e9l\u00e9e UWIMANA",
    role: "Manager / CEO",
    image: "/assets/generated/mgmt-manager.dim_300x300.jpg",
    bio: "With a background in finance and cooperative management, Mrs. Uwimana leads the SACCO's day-to-day operations with dedication, professionalism, and a deep commitment to member welfare.",
    contact: "0788801417",
  },
  {
    name: "Mr. Emmanuel HAKIZIMANA",
    role: "Treasurer",
    image: "/assets/generated/mgmt-treasurer.dim_300x300.jpg",
    bio: "Mr. Hakizimana oversees all financial matters of the SACCO, ensuring sound financial management, accurate record-keeping, and transparent reporting to the membership.",
    contact: null,
  },
  {
    name: "Mrs. Claudine MUKAMANA",
    role: "Secretary General",
    image: "/assets/generated/mgmt-secretary.dim_300x300.jpg",
    bio: "Mrs. Mukamana manages all administrative and secretarial functions, ensuring smooth operations, proper documentation, and effective communication across the SACCO.",
    contact: null,
  },
  {
    name: "Mr. Th\u00e9oneste HABIMANA",
    role: "Credit Committee Chair",
    image: "/assets/generated/mgmt-credit-chair.dim_300x300.jpg",
    bio: "Mr. Habimana heads the credit committee, overseeing loan evaluations, approvals, and ensuring that the SACCO's lending practices remain fair, transparent, and sustainable.",
    contact: null,
  },
  {
    name: "Mrs. Esperance NYIRAMANA",
    role: "Loans Officer",
    image: "/assets/generated/mgmt-loan-officer.dim_300x300.jpg",
    bio: "Mrs. Nyiramana processes loan applications, conducts member assessments, and provides guidance to members throughout the loan application and disbursement process.",
    contact: null,
  },
  {
    name: "Mr. Athanase BIZIMANA",
    role: "Supervisory Board Chair",
    image: "/assets/generated/mgmt-supervisor.dim_300x300.jpg",
    bio: "Mr. Bizimana leads the supervisory board, ensuring compliance with SACCO regulations, overseeing audit activities, and maintaining the highest standards of governance.",
    contact: null,
  },
  {
    name: "Mr. Patrick NSHIMIYIMANA",
    role: "Marketing & Membership Officer",
    image: "/assets/generated/mgmt-marketing.dim_300x300.jpg",
    bio: "Mr. Nshimiyimana drives membership growth and community outreach, building awareness about SACCO services and welcoming new members into the cooperative family.",
    contact: null,
  },
  {
    name: "Mrs. F\u00e9licit\u00e9 UWERA",
    role: "Education Committee Chair",
    image: "/assets/generated/mgmt-education.dim_300x300.jpg",
    bio: "Mrs. Uwera coordinates financial literacy and member education programs, empowering members with the knowledge to make informed financial decisions and improve their lives.",
    contact: null,
  },
  {
    name: "Mr. Innocent NDAGIJIMANA",
    role: "Internal Auditor",
    image: "/assets/generated/mgmt-auditor.dim_300x300.jpg",
    bio: "Mr. Ndagijimana conducts regular internal audits, ensuring financial integrity, identifying risks, and maintaining the SACCO's commitment to transparency and accountability.",
    contact: null,
  },
];

export default function Management() {
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
            Our Leadership
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Management Team
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Dedicated professionals committed to serving our members and growing
            the Murukoro cooperative community.
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

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading-center">Meet Our Team</h2>
            <p className="text-gray-600 mt-6 max-w-xl mx-auto">
              Our management team brings together expertise in finance,
              community development, and cooperative governance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {management.map((person, i) => (
              <div
                key={person.name}
                data-ocid={`management.item.${i + 1}`}
                className="bg-white rounded-2xl overflow-hidden card-hover shadow-sm border text-center"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="pt-7 px-6">
                  <div
                    className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4"
                    style={{ borderColor: "#0A1F5C" }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 pt-4">
                  <h3
                    className="font-display font-bold text-sm leading-tight mb-1"
                    style={{ color: "#0A1F5C" }}
                  >
                    {person.name}
                  </h3>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-3"
                    style={{ backgroundColor: "#eef1f9", color: "#0A1F5C" }}
                  >
                    {person.role}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {person.bio}
                  </p>
                  {person.contact && (
                    <a
                      href={`tel:${person.contact}`}
                      className="inline-flex items-center gap-1 text-xs font-medium"
                      style={{ color: "#0A1F5C" }}
                    >
                      <Phone size={12} /> {person.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display text-2xl font-bold mb-3"
            style={{ color: "#0A1F5C" }}
          >
            Contact Our Leadership
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question for our management? Reach out directly.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                role: "Manager / CEO",
                name: "Mrs. Immacu\u00e9l\u00e9e UWIMANA",
                phone: "0788801417",
              },
              {
                role: "Chairman",
                name: "Mr. Jean Baptiste NZEYIMANA",
                phone: "0772604149",
              },
            ].map((contact) => (
              <div
                key={contact.role}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#C9A84C" }}
                >
                  {contact.role}
                </div>
                <div
                  className="font-display font-bold mb-3"
                  style={{ color: "#0A1F5C" }}
                >
                  {contact.name}
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm text-white px-4 py-2 rounded-full"
                  style={{ backgroundColor: "#0A1F5C" }}
                >
                  <Phone size={14} /> {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
