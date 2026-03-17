const galleryImages = [
  {
    src: "/assets/generated/hero-bg.dim_1400x700.jpg",
    caption: "Community Gathering",
  },
  {
    src: "/assets/generated/about-community.dim_800x500.jpg",
    caption: "Members Meeting",
  },
  {
    src: "/assets/generated/services-agriculture.dim_600x400.jpg",
    caption: "Agricultural Activities",
  },
  {
    src: "/assets/generated/services-business.dim_600x400.jpg",
    caption: "Business Support",
  },
  {
    src: "/assets/generated/mgmt-chairman.dim_300x300.jpg",
    caption: "Chairman Jean Baptiste",
  },
  {
    src: "/assets/generated/mgmt-manager.dim_300x300.jpg",
    caption: "Manager Immacul\u00e9e",
  },
  {
    src: "/assets/generated/mgmt-treasurer.dim_300x300.jpg",
    caption: "Treasurer Emmanuel",
  },
  {
    src: "/assets/generated/mgmt-secretary.dim_300x300.jpg",
    caption: "Secretary Claudine",
  },
  {
    src: "/assets/generated/mgmt-credit-chair.dim_300x300.jpg",
    caption: "Credit Committee",
  },
  {
    src: "/assets/generated/mgmt-loan-officer.dim_300x300.jpg",
    caption: "Loans Officer",
  },
  {
    src: "/assets/generated/mgmt-supervisor.dim_300x300.jpg",
    caption: "Supervisory Board",
  },
  {
    src: "/assets/generated/mgmt-marketing.dim_300x300.jpg",
    caption: "Marketing Officer",
  },
];

const placeholders = [
  "Annual Meeting 2025",
  "Loan Disbursement Day",
  "Community Clean-Up",
  "Training Workshop",
];

export default function Gallery() {
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
            Our Moments
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            A glimpse into the vibrant community and activities of Murukoro
            SACCO.
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

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.caption}
                data-ocid={`gallery.item.${i + 1}`}
                className="relative group rounded-xl overflow-hidden aspect-square cursor-pointer"
                style={{ boxShadow: "0 2px 12px rgba(10,31,92,0.12)" }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,31,92,0.85), transparent)",
                  }}
                >
                  <p className="text-white text-xs font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}

            {placeholders.map((label, i) => (
              <div
                key={label}
                className="relative rounded-xl overflow-hidden aspect-square flex items-center justify-center"
                style={{ backgroundColor: i % 2 === 0 ? "#0A1F5C" : "#111111" }}
              >
                <div className="text-center p-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "rgba(201,168,76,0.25)" }}
                  >
                    <span style={{ color: "#C9A84C", fontSize: "20px" }}>
                      \uD83D\uDCF7
                    </span>
                  </div>
                  <p className="text-white text-xs font-medium opacity-80">
                    {label}
                  </p>
                  <p className="text-white text-xs opacity-50 mt-0.5">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
