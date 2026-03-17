import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#0A1F5C" }} className="text-white">
      {/* Top divider with gold */}
      <div style={{ height: "4px", backgroundColor: "#C9A84C" }} />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/murukoro-logo-transparent.dim_400x400.png"
                alt="Murukoro SACCO"
                className="h-14 w-14 object-contain rounded-full bg-white p-1"
              />
              <div>
                <div className="font-display font-bold text-base leading-tight">
                  MURUKORO SACCO
                </div>
                <div className="text-xs opacity-70">Reg. No. 10203/RC5</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Work Hard and Save for the Future. Empowering the community of
              Murukoro through savings, loans and social welfare.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.15)";
                }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.15)";
                }}
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold text-base mb-5"
              style={{ color: "#C9A84C" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Loans", path: "/loans" },
                { label: "Membership", path: "/membership" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    <span style={{ color: "#C9A84C" }}>›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display font-bold text-base mb-5"
              style={{ color: "#C9A84C" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Savings Mobilisation",
                "Agricultural Loans",
                "Business Loans",
                "School Fees Loans",
                "Emergency Loans",
                "Social Welfare",
                "Rental Services",
              ].map((s) => (
                <li
                  key={s}
                  className="text-sm opacity-80 flex items-center gap-1"
                >
                  <span style={{ color: "#C9A84C" }}>›</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-bold text-base mb-5"
              style={{ color: "#C9A84C" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#C9A84C" }}
                />
                Murukoro, Butare, Muko, Rubanda District, Rwanda
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone size={15} style={{ color: "#C9A84C" }} />
                0788801417 (Manager)
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone size={15} style={{ color: "#C9A84C" }} />
                0772604149 (Chairman)
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail size={15} style={{ color: "#C9A84C" }} />
                murukorosacco@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-70 text-center sm:text-left">
            © {year} Murukoro Co-operatives Savings and Credit Society Limited.
            All Rights Reserved.
          </p>
          <p className="text-xs opacity-70">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-100"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
