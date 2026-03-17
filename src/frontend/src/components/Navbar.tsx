import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Loans", path: "/loans" },
  { label: "Membership", path: "/membership" },
  { label: "Management", path: "/management" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact Us", path: "/contact" },
];

const moreLinks = [
  { label: "News", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Downloads", path: "/downloads" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-navy bg-white" : "bg-white"
      }`}
      style={{ borderBottom: "2px solid #0A1F5C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <img
              src="/assets/generated/murukoro-logo-transparent.dim_400x400.png"
              alt="Murukoro SACCO Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="leading-tight">
              <div
                className="font-display font-bold text-sm lg:text-base"
                style={{ color: "#0A1F5C" }}
              >
                MURUKORO SACCO
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">
                Reg. No. 10203/RC5
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-white rounded-md"
                    : "text-gray-700 hover:text-white hover:rounded-md"
                }`}
                style={
                  isActive(link.path) ? { backgroundColor: "#0A1F5C" } : {}
                }
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) {
                    (e.target as HTMLElement).style.backgroundColor = "#0A1F5C";
                    (e.target as HTMLElement).style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) {
                    (e.target as HTMLElement).style.backgroundColor = "";
                    (e.target as HTMLElement).style.color = "";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                data-ocid="nav.dropdown_menu"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-white rounded-md transition-colors duration-200"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#0A1F5C";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  if (!moreOpen) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "";
                    (e.currentTarget as HTMLElement).style.color = "";
                  }
                }}
              >
                More <ChevronDown size={14} />
              </button>
              {moreOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border overflow-hidden z-50"
                  style={{ borderColor: "#0A1F5C" }}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      data-ocid="nav.link"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white transition-colors duration-150"
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#0A1F5C";
                        (e.target as HTMLElement).style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "";
                        (e.target as HTMLElement).style.color = "";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md"
            style={{ color: "#0A1F5C" }}
            onClick={() => setIsOpen(!isOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-white border-t"
          style={{ borderColor: "#0A1F5C" }}
        >
          <div className="px-4 py-3 space-y-1">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-white" : "text-gray-700"
                }`}
                style={
                  isActive(link.path) ? { backgroundColor: "#0A1F5C" } : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
