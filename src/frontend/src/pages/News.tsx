import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    date: "March 5, 2026",
    category: "Announcement",
    title: "Annual General Meeting 2026 Notice",
    excerpt:
      "Murukoro SACCO is pleased to announce the Annual General Meeting scheduled for April 15, 2026, at Murukoro Community Hall. All members are urged to attend and participate in key decisions regarding the SACCO's direction for 2026.",
    image: "/assets/generated/about-community.dim_800x500.jpg",
  },
  {
    date: "February 14, 2026",
    category: "Product Update",
    title: "New Agricultural Loan Product Launched",
    excerpt:
      "Murukoro SACCO has launched an enhanced agricultural loan package with improved terms. The new product includes extended repayment periods of up to 36 months and increased maximum loan amounts to support farmers in expanding their operations.",
    image: "/assets/generated/services-agriculture.dim_600x400.jpg",
  },
  {
    date: "January 10, 2026",
    category: "Community",
    title: "SACCO Celebrates 500+ Members Milestone",
    excerpt:
      "Murukoro SACCO has reached a significant milestone, crossing 500 active members. This growth reflects the trust and confidence the community places in our cooperative. We thank all our members for their continued support and loyalty.",
    image: "/assets/generated/hero-bg.dim_1400x700.jpg",
  },
  {
    date: "December 2, 2025",
    category: "Financial Literacy",
    title: "Free Financial Literacy Workshop in Muko",
    excerpt:
      "Murukoro SACCO organized a free financial literacy workshop for members and community residents in Muko Sector. Topics covered included savings discipline, investment basics, and responsible borrowing.",
    image: "/assets/generated/about-community.dim_800x500.jpg",
  },
];

export default function News() {
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
            Stay Informed
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            News &amp; Updates
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Stay up-to-date with the latest news, announcements, and updates
            from Murukoro SACCO.
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

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <div
                key={article.title}
                data-ocid={`news.item.${i + 1}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border card-hover"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: "#eef1f9", color: "#0A1F5C" }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} /> {article.date}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: "#0A1F5C" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <button
                    type="button"
                    data-ocid="news.secondary_button"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "#0A1F5C" }}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
