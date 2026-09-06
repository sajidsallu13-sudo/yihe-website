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
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden pt-36 pb-28 bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8]">

        {/* Glow */}

        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-[180px]" />

        <div className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <span className="inline-block px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold uppercase tracking-wider text-sm">
              Contact YIHE
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">

              Let's Build Your

              <br />

              <span className="text-cyan-300">
                Global Business Together
              </span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-xl leading-9">

              Whether you need sourcing, factory verification,
              quality inspection, logistics or complete import support,
              our international trade experts are always ready to help.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#081F4D] shadow-[0_0_35px_rgba(34,211,238,.35)] hover:bg-cyan-300 transition"
              >

                Send Inquiry

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />

              </a>

              <a
                href="https://wa.me/918789225500"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 text-white hover:bg-white/20 transition"
              >

                <Phone size={20} />

                WhatsApp

              </a>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-[#061734]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Office */}

            <div className="rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-300 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center">

                <MapPin
                  className="text-cyan-300"
                  size={30}
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Office Address
              </h3>

              <p className="mt-5 text-blue-100 leading-8">

                🇨🇳 China Office

                <br />

                Chancheng, Foshan, Guangdong, China.

                <br />
                <br />

                🇮🇳 India Office

                <br />

                Delhi, India

              </p>

            </div>


            {/* Email */}

            <div className="rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-300 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center">

                <Mail
                  className="text-cyan-300"
                  size={30}
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Email Us
              </h3>

              <a
                href="mailto:info@yiheglobe.com"
                className="mt-5 block text-blue-100 leading-8 hover:text-cyan-300 transition"
              >
                info@yiheglobe.com
              </a>

            </div>


            {/* Phone */}

            <div className="rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-300 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center">

                <Phone
                  className="text-cyan-300"
                  size={30}
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Call Us
              </h3>

              <p className="mt-5 text-blue-100 leading-8">

                +91 8789 2255 00

                <br />

                +86 159 8616 8618

                <br />
                <br />

                Mon – Sat

                <br />

                9:00 AM – 6:00 PM

              </p>

            </div>

          </div>

        </div>

      </motion.section>


      {/* ================= CONTACT FORM ================= */}

      <motion.section
        id="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-b from-[#081F4D] to-[#061734]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}

            <div>

              <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase text-sm font-semibold">

                Send Inquiry

              </span>

              <h2 className="mt-8 text-5xl font-bold text-white leading-tight">

                Tell Us About
                <br />
                Your Requirement

              </h2>

              <p className="mt-8 text-blue-100 text-lg leading-8">

                Fill out the inquiry form and our international trade
                specialists will contact you within 24 hours.

              </p>

              <div className="mt-10 space-y-4 text-blue-100">

                <p>
                  ✓ Product sourcing
                </p>

                <p>
                  ✓ Factory verification
                </p>

                <p>
                  ✓ Quality inspection
                </p>

                <p>
                  ✓ International shipping
                </p>

                <p>
                  ✓ Import & export support
                </p>

              </div>

            </div>


            {/* FORM */}

            <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-xl p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + COMPANY */}

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                </div>


                {/* COUNTRY + CATEGORY */}

                <div className="grid md:grid-cols-2 gap-6">

                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-300"
                  >

                    <option value="" disabled className="text-black">
                      Select Country
                    </option>

                    <option className="text-black">
                      India
                    </option>

                    <option className="text-black">
                      China
                    </option>

                    <option className="text-black">
                      UAE
                    </option>

                    <option className="text-black">
                      USA
                    </option>

                    <option className="text-black">
                      Other
                    </option>

                  </select>


                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-300"
                  >

                    <option value="" disabled className="text-black">
                      Product Category
                    </option>

                    <option className="text-black">
                      Footwear
                    </option>

                    <option className="text-black">
                      Garments
                    </option>

                    <option className="text-black">
                      Furniture
                    </option>

                    <option className="text-black">
                      Electronics
                    </option>

                    <option className="text-black">
                      Machinery
                    </option>

                    <option className="text-black">
                      Home Decor
                    </option>

                    <option className="text-black">
                      Medical
                    </option>

                    <option className="text-black">
                      Industrial Equipment
                    </option>

                    <option className="text-black">
                      Packaging Materials
                    </option>

                    <option className="text-black">
                      Mobile Accessories
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none resize-none focus:border-cyan-300"
                />


                {/* SUCCESS */}

                {success && (
                  <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-5 py-4 text-center text-green-300">
                    {success}
                  </div>
                )}


                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-center text-red-300">
                    {error}
                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-cyan-400 py-4 text-lg font-bold text-[#081F4D] hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                >

                  {sending ? "Sending Inquiry..." : "Send Inquiry"}

                </button>

              </form>

            </div>

          </div>

        </div>

      </motion.section>


      {/* ================= MAP & FAQ ================= */}

      <section className="py-24 bg-[#061734]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* GOOGLE MAP */}

            <div className="rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">

              <iframe
                title="YIHE Location"
                src="https://www.google.com/maps?q=Yiwu,China&output=embed"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                className="w-full h-full border-0"
              />

            </div>


            {/* RIGHT SIDE */}

            <div className="flex flex-col gap-8">

              {/* WHATSAPP */}

              <div className="rounded-[35px] bg-gradient-to-br from-cyan-500 to-blue-600 p-10 text-white shadow-2xl">

                <h3 className="text-3xl font-bold">
                  Need Instant Help?
                </h3>

                <p className="mt-6 leading-8 text-cyan-100">

                  Chat directly with our sourcing specialists.
                  We usually reply within a few minutes.

                </p>

                <a
                  href="https://wa.me/918789225500"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-8 rounded-full bg-white text-[#081F4D] px-8 py-4 font-bold hover:scale-105 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>


              {/* FAQ */}

              <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-xl p-10">

                <h3 className="text-3xl font-bold text-white">
                  Frequently Asked Questions
                </h3>

                <div className="mt-8 space-y-8">

                  <div>

                    <h4 className="text-cyan-300 font-semibold">
                      How long does shipping take?
                    </h4>

                    <p className="mt-2 text-blue-100">
                      Normally 15–35 days depending on destination
                      and shipping method.
                    </p>

                  </div>

                  <div>

                    <h4 className="text-cyan-300 font-semibold">
                      Can you source custom products?
                    </h4>

                    <p className="mt-2 text-blue-100">
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