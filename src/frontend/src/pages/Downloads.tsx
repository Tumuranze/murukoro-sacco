import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

const documents = [
  {
    title: "Membership Application Form",
    desc: "Complete this form to apply for SACCO membership. Bring the filled form to our office along with your ID and photos.",
    type: "PDF",
    size: "240 KB",
    date: "Updated Jan 2026",
    category: "Membership",
  },
  {
    title: "Loan Application Form",
    desc: "Standard loan application form for all loan categories. Download, fill out, and submit to our Loans Officer.",
    type: "PDF",
    size: "180 KB",
    date: "Updated Feb 2026",
    category: "Loans",
  },
  {
    title: "Agricultural Loan Application Form",
    desc: "Specific application form for agricultural loan products. Includes sections for farm details and expected produce.",
    type: "PDF",
    size: "210 KB",
    date: "Updated Jan 2026",
    category: "Loans",
  },
  {
    title: "SACCO Annual Report 2025",
    desc: "The comprehensive annual report detailing the SACCO's financial performance, achievements, and future plans for 2025.",
    type: "PDF",
    size: "1.2 MB",
    date: "Released March 2026",
    category: "Reports",
  },
  {
    title: "SACCO Constitution & By-Laws",
    desc: "The governing document of Murukoro SACCO outlining membership rules, governance structure, and operational procedures.",
    type: "PDF",
    size: "520 KB",
    date: "Version 2023",
    category: "Governance",
  },
  {
    title: "Savings Account Opening Form",
    desc: "Form for opening a savings account with Murukoro SACCO. Required for new members setting up their member savings account.",
    type: "PDF",
    size: "160 KB",
    date: "Updated Jan 2026",
    category: "Savings",
  },
  {
    title: "Loan Guarantee Form",
    desc: "To be completed by a member acting as guarantor for another member's loan application. Two copies may be required.",
    type: "PDF",
    size: "130 KB",
    date: "Updated Jan 2026",
    category: "Loans",
  },
  {
    title: "Financial Literacy Guide 2025",
    desc: "A simple guide to savings, budgeting, and responsible borrowing. Available free to all members and community members.",
    type: "PDF",
    size: "870 KB",
    date: "Released Nov 2025",
    category: "Education",
  },
];

const categoryColors: Record<string, string> = {
  Membership: "#0A1F5C",
  Loans: "#1a3a8c",
  Reports: "#111111",
  Governance: "#0A1F5C",
  Savings: "#1a3a8c",
  Education: "#111111",
};

export default function Downloads() {
  const handleDownload = (title: string) => {
    toast.info(
      `To download "${title}", please visit our office or contact us by phone.`,
    );
  };

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
            Resources
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Downloads
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            Access important forms, reports, and documents from Murukoro SACCO.
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

      {/* Documents List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading-center">Available Documents</h2>
            <p className="text-gray-600 mt-5">
              All forms are available for download. For physical copies, visit
              our office at Murukoro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {documents.map((doc, i) => (
              <div
                key={doc.title}
                data-ocid={`downloads.item.${i + 1}`}
                className="flex gap-4 p-5 rounded-2xl border card-hover"
                style={{ borderColor: "#e5e7eb", backgroundColor: "#f8f9fc" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: categoryColors[doc.category] || "#0A1F5C",
                  }}
                >
                  <FileText size={22} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3
                      className="font-semibold text-sm leading-snug"
                      style={{ color: "#0A1F5C" }}
                    >
                      {doc.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded shrink-0"
                      style={{ backgroundColor: "#eef1f9", color: "#0A1F5C" }}
                    >
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {doc.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{doc.size}</span>
                      <span>\u00b7</span>
                      <span>{doc.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownload(doc.title)}
                      data-ocid="downloads.button"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-colors duration-200"
                      style={{ backgroundColor: "#0A1F5C" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#1a3a8c";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#0A1F5C";
                      }}
                    >
                      <Download size={12} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#0A1F5C" }}
          >
            <p className="text-white opacity-90 text-sm">
              Need help with any form or document? Contact us at{" "}
              <a
                href="tel:0788801417"
                className="font-semibold underline"
                style={{ color: "#C9A84C" }}
              >
                0788801417
              </a>{" "}
              or email{" "}
              <a
                href="mailto:murukorosacco@gmail.com"
                className="font-semibold underline"
                style={{ color: "#C9A84C" }}
              >
                murukorosacco@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
