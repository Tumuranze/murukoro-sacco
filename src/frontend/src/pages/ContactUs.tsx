import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactItems = [
  {
    icon: Phone,
    label: "Manager (Calls)",
    value: "0788801417",
    href: "tel:0788801417",
  },
  {
    icon: Phone,
    label: "Chairman (Calls)",
    value: "0772604149",
    href: "tel:0772604149",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "murukorosacco@gmail.com",
    href: "mailto:murukorosacco@gmail.com",
  },
  {
    icon: MapPin,
    label: "Physical Address",
    value: "Murukoro, Butare, Muko, Rubanda District, Rwanda",
    href: null,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value:
      "Monday \u2013 Friday: 8:00 AM \u2013 5:00 PM | Saturday: 9:00 AM \u2013 12:00 PM",
    href: null,
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will respond within 24 hours.");
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
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
            Reach Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">
            We are here to help. Get in touch with Murukoro SACCO through any of
            our contact channels.
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

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Details */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C" }}
              >
                Get in Touch
              </p>
              <h2 className="section-heading mb-8">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#0A1F5C" }}
                      >
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                          style={{ color: "#C9A84C" }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium hover:underline"
                            style={{ color: "#111111" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-700">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div
                data-ocid="contact.map_marker"
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#0A1F5C", minHeight: "240px" }}
              >
                <div
                  className="flex flex-col items-center justify-center h-full p-10 text-center"
                  style={{ minHeight: "240px" }}
                >
                  <MapPin
                    size={48}
                    style={{ color: "#C9A84C" }}
                    className="mb-4"
                  />
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    Find Us on the Map
                  </h4>
                  <p className="text-sm opacity-70 text-white mb-5">
                    Murukoro, Butare, Muko, Rubanda District, Rwanda
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rubanda+District+Rwanda"
                    target="_blank"
                    rel="noreferrer"
                    data-ocid="contact.primary_button"
                    className="px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
                    style={{ backgroundColor: "#C9A84C", color: "#0A1F5C" }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C" }}
              >
                Send a Message
              </p>
              <h2 className="section-heading mb-8">Write to Us</h2>
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-16 px-8 rounded-2xl"
                  style={{ backgroundColor: "#0A1F5C" }}
                >
                  <CheckCircle
                    size={56}
                    className="mx-auto mb-5"
                    style={{ color: "#C9A84C" }}
                  />
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white opacity-80 mb-6">
                    Thank you for reaching out. We will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#C9A84C", color: "#0A1F5C" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="con-name"
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: "#0A1F5C" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="con-name"
                        data-ocid="contact.input"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                        style={{ borderColor: "#e5e7eb" }}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor =
                            "#0A1F5C";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor =
                            "#e5e7eb";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="con-phone"
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: "#0A1F5C" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="con-phone"
                        data-ocid="contact.input"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="e.g. 0788000000"
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                        style={{ borderColor: "#e5e7eb" }}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor =
                            "#0A1F5C";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor =
                            "#e5e7eb";
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="con-email"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0A1F5C" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="con-email"
                      data-ocid="contact.input"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
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
                      htmlFor="con-subject"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0A1F5C" }}
                    >
                      Subject *
                    </label>
                    <input
                      id="con-subject"
                      data-ocid="contact.input"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="What is this about?"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
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
                      htmlFor="con-message"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0A1F5C" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="con-message"
                      data-ocid="contact.textarea"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none"
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
                    data-ocid="contact.submit_button"
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors duration-200"
                    style={{ backgroundColor: "#0A1F5C" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor =
                        "#1a3a8c";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor =
                        "#0A1F5C";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
