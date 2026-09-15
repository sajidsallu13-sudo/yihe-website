import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    const emailMessage = `
NEW WEBSITE INQUIRY
==============================

Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Product Category: ${form.category}

Requirement:
${form.message}

==============================
Submitted From:
YIHE International Trade Service Website
    `;

    const templateParams = {
      name: form.name,
      email: form.email,
      message: emailMessage,
      time: new Date().toLocaleString("en-IN"),
    };

    try {
      await emailjs.send(
        "service_3xsoe4s",
        "template_kyft7c7",
        templateParams,
        "P157e_xthbgZZhYQa"
      );

      setSuccess(
        "Your inquiry has been sent successfully. We will contact you soon."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        category: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Unable to send inquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8] py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="absolute -top-40 -left-40 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center"
          >
            <span className="inline-block px-4 sm:px-5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
              Contact YIHE
            </span>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Let's Build Your
              <br className="hidden sm:block" />

              <span className="sm:ml-2 text-cyan-300">
                Global Business Together
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-blue-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
              Whether you need sourcing, factory verification, quality
              inspection, logistics or complete import support, our
              international trade experts are ready to help.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#contact-form"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-[#081F4D] shadow-[0_0_25px_rgba(34,211,238,.3)] hover:bg-cyan-300 transition"
              >
                Send Inquiry

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="https://wa.me/918789225500"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-3 text-white hover:bg-white/20 transition"
              >
                <Phone size={18} />

                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="py-10 sm:py-12 md:py-14 bg-[#061734]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

            {/* OFFICE */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl p-5 sm:p-6 hover:border-cyan-300/70 transition">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/15 flex items-center justify-center">
                <MapPin
                  className="text-cyan-300"
                  size={23}
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Office Address
              </h3>

              <div className="mt-3 text-sm sm:text-base text-blue-100 leading-6">
                <p>
                  🇨🇳 <strong>China Office</strong>
                </p>

                <p className="mt-1">
                  Chancheng, Foshan, Guangdong, China.
                </p>

                <p className="mt-3">
                  🇮🇳 <strong>India Office</strong>
                </p>

                <p className="mt-1">
                  Delhi, India
                </p>
              </div>
            </div>

            {/* EMAIL */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl p-5 sm:p-6 hover:border-cyan-300/70 transition">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/15 flex items-center justify-center">
                <Mail
                  className="text-cyan-300"
                  size={23}
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Email Us
              </h3>

              <a
                href="mailto:sales@yiheglobe.com"
                className="mt-3 block text-sm sm:text-base text-blue-100 hover:text-cyan-300 transition break-all"
              >
                sales@yiheglobe.com
              </a>
            </div>

            {/* PHONE */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl p-5 sm:p-6 hover:border-cyan-300/70 transition">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/15 flex items-center justify-center">
                <Phone
                  className="text-cyan-300"
                  size={23}
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                Call Us
              </h3>

              <div className="mt-3 text-sm sm:text-base text-blue-100 leading-6">
                <a
                  href="tel:+918789225500"
                  className="block hover:text-cyan-300 transition"
                >
                  +91 8789 2255 00
                </a>

                <a
                  href="tel:+8615986168618"
                  className="block hover:text-cyan-300 transition"
                >
                  +86 159 8616 8618
                </a>

                <p className="mt-3 text-blue-200">
                  Mon – Sat
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> · </span>
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT FORM ================= */}

      <motion.section
        id="contact-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="scroll-mt-24 py-10 sm:py-12 md:py-16 bg-gradient-to-b from-[#081F4D] to-[#061734]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">

            {/* LEFT */}

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase text-[11px] sm:text-xs font-semibold">
                Send Inquiry
              </span>

              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Tell Us About
                <br />
                Your Requirement
              </h2>

              <p className="mt-4 sm:mt-5 text-blue-100 text-sm sm:text-base leading-6 sm:leading-7 max-w-lg">
                Fill out the inquiry form and our international trade
                specialists will contact you within 24 hours.
              </p>

              <div className="mt-5 sm:mt-6 grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-2.5 text-xs sm:text-sm md:text-base text-blue-100">
                <p>✓ Product sourcing</p>
                <p>✓ Factory verification</p>
                <p>✓ Quality inspection</p>
                <p>✓ International shipping</p>
                <p className="col-span-2 lg:col-span-1">
                  ✓ Import & export support
                </p>
              </div>
            </div>

            {/* FORM */}

            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.08] backdrop-blur-xl p-4 sm:p-6 md:p-7">
              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
              >

                {/* NAME + COMPANY */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full min-w-0 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-300 outline-none focus:border-cyan-300 transition"
                  />

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full min-w-0 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-300 outline-none focus:border-cyan-300 transition"
                  />
                </div>

                {/* EMAIL + PHONE */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full min-w-0 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-300 outline-none focus:border-cyan-300 transition"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full min-w-0 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-300 outline-none focus:border-cyan-300 transition"
                  />
                </div>

                {/* COUNTRY + CATEGORY */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 rounded-xl bg-[#102c5c] border border-white/10 px-4 py-3 text-sm sm:text-base text-white outline-none focus:border-cyan-300 transition"
                  >
                    <option value="" disabled>
                      Select Country
                    </option>

                    <option value="India">
                      India
                    </option>

                    <option value="China">
                      China
                    </option>

                    <option value="UAE">
                      UAE
                    </option>

                    <option value="USA">
                      USA
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 rounded-xl bg-[#102c5c] border border-white/10 px-4 py-3 text-sm sm:text-base text-white outline-none focus:border-cyan-300 transition"
                  >
                    <option value="" disabled>
                      Product Category
                    </option>

                    <option value="Footwear">
                      Footwear
                    </option>

                    <option value="Garments">
                      Garments
                    </option>

                    <option value="Furniture">
                      Furniture
                    </option>

                    <option value="Electronics">
                      Electronics
                    </option>

                    <option value="Machinery">
                      Machinery
                    </option>

                    <option value="Home Decor">
                      Home Decor
                    </option>

                    <option value="Medical">
                      Medical
                    </option>

                    <option value="Industrial Equipment">
                      Industrial Equipment
                    </option>

                    <option value="Packaging Materials">
                      Packaging Materials
                    </option>

                    <option value="Mobile Accessories">
                      Mobile Accessories
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-300 outline-none resize-none focus:border-cyan-300 transition"
                />

                {/* SUCCESS */}

                {success && (
                  <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-xs sm:text-sm text-center text-green-300">
                    {success}
                  </div>
                )}

                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs sm:text-sm text-center text-red-300">
                    {error}
                  </div>
                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-cyan-400 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#081F4D] hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending Inquiry..." : "Send Inquiry"}
                </button>

              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= MAP + FAQ ================= */}

      <section className="py-10 sm:py-12 md:py-16 bg-[#061734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

            {/* MAP */}

            <div className="h-[250px] sm:h-[300px] md:h-[340px] lg:h-auto lg:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="YIHE Location"
                src="https://www.google.com/maps?q=Foshan,Guangdong,China&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-4 sm:gap-5">

              {/* WHATSAPP */}

              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 sm:p-6 md:p-7 text-white shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Need Instant Help?
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-6 text-cyan-50">
                  Chat directly with our sourcing specialists.
                  We usually reply within a few minutes.
                </p>

                <a
                  href="https://wa.me/918789225500"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center mt-5 rounded-full bg-white text-[#081F4D] px-6 py-3 text-sm sm:text-base font-bold hover:scale-[1.03] transition"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* FAQ */}

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl p-5 sm:p-6 md:p-7 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Frequently Asked Questions
                </h3>

                <div className="mt-4 sm:mt-5 space-y-4 sm:space-y-5">
                  <div>
                    <h4 className="text-sm sm:text-base text-cyan-300 font-semibold">
                      How long does shipping take?
                    </h4>

                    <p className="mt-1.5 text-sm sm:text-base text-blue-100 leading-6">
                      Normally 15–35 days depending on destination
                      and shipping method.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base text-cyan-300 font-semibold">
                      Can you source custom products?
                    </h4>

                    <p className="mt-1.5 text-sm sm:text-base text-blue-100 leading-6">
                      Yes. We provide OEM & customized sourcing
                      directly from verified factories.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}