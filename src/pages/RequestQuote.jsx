import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function RequestQuote() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    productName: "",
    quantity: "",
    targetPrice: "",
    deliveryDate: "",
    shipping: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    const quoteMessage = `
NEW QUOTE REQUEST
==============================

CUSTOMER DETAILS

Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}

PRODUCT DETAILS

Product Category: ${form.category}
Product Name: ${form.productName}
Quantity: ${form.quantity}
Target Price: ${form.targetPrice || "Not specified"}

DELIVERY DETAILS

Preferred Delivery Date: ${form.deliveryDate || "Not specified"}
Shipping Method: ${form.shipping || "Not specified"}

PRODUCT SPECIFICATION / REQUIREMENT

${form.message}

==============================

Submitted From:
YIHE International Trade Service Website
    `;

    const templateParams = {
      name: form.name,
      email: form.email,
      message: quoteMessage,
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
        "Your quote request has been sent successfully. Our team will contact you within 24 hours."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        category: "",
        productName: "",
        quantity: "",
        targetPrice: "",
        deliveryDate: "",
        shipping: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Unable to send your quote request. Please try again or contact us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}

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
              Request Free Quote
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">
              Get Your
              <br />
              <span className="text-cyan-300">
                Best Import Quote
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-xl leading-9">
              Tell us what product you need and our sourcing team
              will provide the best factory price, verified suppliers,
              logistics solution and complete quotation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="#quote-form"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#081F4D] shadow-[0_0_35px_rgba(34,211,238,.35)] hover:bg-cyan-300 transition"
              >
                Start Quote

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

            </div>

          </motion.div>


          {/* FEATURE CARDS */}

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <Package
                className="mx-auto text-cyan-300"
                size={42}
              />

              <h3 className="mt-5 text-2xl font-bold text-white">
                Product Sourcing
              </h3>

              <p className="mt-4 text-blue-100">
                Direct Factory Pricing
              </p>

            </div>


            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <ShieldCheck
                className="mx-auto text-cyan-300"
                size={42}
              />

              <h3 className="mt-5 text-2xl font-bold text-white">
                Verified Suppliers
              </h3>

              <p className="mt-4 text-blue-100">
                Trusted Manufacturing Partners
              </p>

            </div>


            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <Globe2
                className="mx-auto text-cyan-300"
                size={42}
              />

              <h3 className="mt-5 text-2xl font-bold text-white">
                Worldwide Shipping
              </h3>

              <p className="mt-4 text-blue-100">
                Air • Sea • Express
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= REQUEST QUOTE FORM ================= */}

      <motion.section
        id="quote-form"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-[#061734]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}

            <div>

              <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase text-sm font-semibold">
                Request Quote
              </span>

              <h2 className="mt-8 text-5xl font-bold text-white leading-tight">
                Tell Us Your
                <br />
                Product Requirement
              </h2>

              <p className="mt-8 text-blue-100 text-lg leading-8">
                Fill in the details below and our sourcing specialists
                will prepare the best quotation from verified factories.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-cyan-300">✓</span>
                  Direct factory pricing
                </div>

                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-cyan-300">✓</span>
                  Verified suppliers
                </div>

                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-cyan-300">✓</span>
                  Quality inspection
                </div>

                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-cyan-300">✓</span>
                  Global shipping support
                </div>

                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-cyan-300">✓</span>
                  Fast quotation within 24 hours
                </div>

              </div>

            </div>


            {/* RIGHT SIDE FORM */}

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

                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />


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


                {/* PRODUCT NAME */}

                <input
                  type="text"
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  placeholder="Product Name"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                />


                {/* QUANTITY + TARGET PRICE */}

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    min="1"
                    required
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                  <input
                    type="text"
                    name="targetPrice"
                    value={form.targetPrice}
                    onChange={handleChange}
                    placeholder="Target Price (Optional)"
                    className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                </div>


                {/* DELIVERY DATE */}

                <input
                  type="date"
                  name="deliveryDate"
                  value={form.deliveryDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-300"
                />


                {/* SHIPPING METHOD */}

                <div>

                  <label className="block text-white font-semibold mb-4">
                    Preferred Shipping Method
                  </label>

                  <div className="grid grid-cols-3 gap-4">

                    <label className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 cursor-pointer hover:border-cyan-300 transition text-white">

                      <input
                        type="radio"
                        name="shipping"
                        value="Air"
                        checked={form.shipping === "Air"}
                        onChange={handleChange}
                        className="mr-2"
                      />

                      Air

                    </label>


                    <label className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 cursor-pointer hover:border-cyan-300 transition text-white">

                      <input
                        type="radio"
                        name="shipping"
                        value="Sea"
                        checked={form.shipping === "Sea"}
                        onChange={handleChange}
                        className="mr-2"
                      />

                      Sea

                    </label>


                    <label className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 cursor-pointer hover:border-cyan-300 transition text-white">

                      <input
                        type="radio"
                        name="shipping"
                        value="Express"
                        checked={form.shipping === "Express"}
                        onChange={handleChange}
                        className="mr-2"
                      />

                      Express

                    </label>

                  </div>

                </div>


                {/* UPLOAD */}

                <div>

                  <label className="block text-white font-semibold mb-3">
                    Upload Product Image (Optional)
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white file:bg-cyan-400 file:border-0 file:px-4 file:py-2 file:rounded-lg file:text-[#081F4D] file:font-semibold"
                  />

                  <p className="mt-2 text-xs text-blue-200">
                    Product image can be used as a reference for your quotation.
                  </p>

                </div>


                {/* MESSAGE */}

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Product Specification / Additional Requirements..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 resize-none outline-none focus:border-cyan-300"
                />


                {/* SUCCESS */}

                {success && (
                  <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-5 py-4 text-center text-green-300 text-sm leading-6">
                    {success}
                  </div>
                )}


                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-center text-red-300 text-sm leading-6">
                    {error}
                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-cyan-400 py-4 text-lg font-bold text-[#081F4D] hover:bg-cyan-300 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                >

                  {sending
                    ? "Sending Quote Request..."
                    : "Request Free Quote"}

                </button>

              </form>

            </div>

          </div>

        </div>

      </motion.section>


      {/* ================= WHY REQUEST QUOTE ================= */}

      <section className="py-24 bg-gradient-to-b from-[#061734] to-[#081F4D]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <h3 className="text-4xl font-bold text-cyan-300">
                24H
              </h3>

              <p className="mt-4 text-blue-100">
                Fast Response
              </p>

            </div>


            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <h3 className="text-4xl font-bold text-cyan-300">
                500+
              </h3>

              <p className="mt-4 text-blue-100">
                Verified Suppliers
              </p>

            </div>


            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <h3 className="text-4xl font-bold text-cyan-300">
                OEM
              </h3>

              <p className="mt-4 text-blue-100">
                Custom Manufacturing
              </p>

            </div>


            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <h3 className="text-4xl font-bold text-cyan-300">
                Global
              </h3>

              <p className="mt-4 text-blue-100">
                Shipping Support
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="relative py-24 bg-[#061734] overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 blur-[150px] rounded-full" />

        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-xl p-14 text-center">

            <h2 className="text-5xl font-bold text-white">
              Need Immediate Assistance?
            </h2>

            <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
              Our sourcing specialists are available to help you
              find the best factories, negotiate prices, arrange
              inspections and manage global shipping.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">

              <a
                href="https://wa.me/918789225500"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-8 py-4 text-[#081F4D] font-bold hover:bg-cyan-300 transition shadow-[0_0_35px_rgba(34,211,238,.35)]"
              >
                Chat on WhatsApp
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="py-24 bg-gradient-to-b from-[#061734] to-[#081F4D]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-14 space-y-8">

            <div className="rounded-2xl bg-white/10 border border-white/10 p-8">

              <h3 className="text-cyan-300 font-semibold text-xl">
                How soon will I receive my quotation?
              </h3>

              <p className="mt-3 text-blue-100">
                Usually within 24 hours after receiving your inquiry.
              </p>

            </div>


            <div className="rounded-2xl bg-white/10 border border-white/10 p-8">

              <h3 className="text-cyan-300 font-semibold text-xl">
                Can you source OEM & customized products?
              </h3>

              <p className="mt-3 text-blue-100">
                Yes. We work directly with verified manufacturers
                for OEM and customized production.
              </p>

            </div>


            <div className="rounded-2xl bg-white/10 border border-white/10 p-8">

              <h3 className="text-cyan-300 font-semibold text-xl">
                Which shipping methods do you provide?
              </h3>

              <p className="mt-3 text-blue-100">
                Air Freight, Sea Freight, Railway and Express Courier.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}