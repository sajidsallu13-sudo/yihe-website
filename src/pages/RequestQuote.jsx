import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RequestQuote() {
  const location = useLocation();

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

  /* =========================================
     PREFILL PRODUCT FROM PRODUCTS PAGE
  ========================================= */

  useEffect(() => {
    if (location.state?.product) {
      setForm((prev) => ({
        ...prev,
        productName: location.state.product,
      }));
    }
  }, [location.state]);

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

      <section
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#081F4D]
          via-[#0B2F73]
          to-[#114DA8]

          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        {/* Glow */}

        <div className="absolute -top-40 -left-40 w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full bg-blue-500/20 blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span
              className="
                inline-block
                px-4
                py-1.5

                rounded-full

                border
                border-cyan-400/30

                bg-cyan-400/10

                text-[11px]
                sm:text-xs

                text-cyan-300

                font-semibold
                uppercase
                tracking-wider
              "
            >
              Request Free Quote
            </span>

            <h1
              className="
                mt-4
                sm:mt-5

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-bold
                text-white

                leading-[1.08]
              "
            >
              Get Your
              <br />

              <span className="text-cyan-300">
                Best Import Quote
              </span>
            </h1>

            <p
              className="
                mt-4
                sm:mt-5

                max-w-2xl
                mx-auto

                text-sm
                sm:text-base
                md:text-lg

                text-blue-100

                leading-6
                md:leading-7
              "
            >
              Tell us what product you need and our sourcing team will
              provide factory pricing, supplier support, logistics options
              and a complete quotation.
            </p>

            <div className="mt-6 sm:mt-7">
              <a
                href="#quote-form"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-cyan-400

                  px-6
                  py-3

                  font-semibold
                  text-[#081F4D]

                  shadow-[0_0_25px_rgba(34,211,238,.3)]

                  hover:bg-cyan-300

                  transition
                "
              >
                Start Quote

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>
            </div>
          </motion.div>

          {/* ================= FEATURE CARDS ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3

              gap-3
              sm:gap-4

              mt-7
              sm:mt-8
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                rounded-2xl
                bg-white/[0.08]

                border
                border-white/10

                backdrop-blur-xl

                p-4
                sm:p-5

                text-center
              "
            >
              <Package
                className="mx-auto text-cyan-300"
                size={28}
              />

              <h3 className="mt-3 text-base sm:text-lg font-bold text-white">
                Product Sourcing
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-blue-100">
                Direct Factory Pricing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="
                rounded-2xl
                bg-white/[0.08]

                border
                border-white/10

                backdrop-blur-xl

                p-4
                sm:p-5

                text-center
              "
            >
              <ShieldCheck
                className="mx-auto text-cyan-300"
                size={28}
              />

              <h3 className="mt-3 text-base sm:text-lg font-bold text-white">
                Verified Suppliers
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-blue-100">
                Trusted Manufacturing Partners
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="
                rounded-2xl
                bg-white/[0.08]

                border
                border-white/10

                backdrop-blur-xl

                p-4
                sm:p-5

                text-center
              "
            >
              <Globe2
                className="mx-auto text-cyan-300"
                size={28}
              />

              <h3 className="mt-3 text-base sm:text-lg font-bold text-white">
                Worldwide Shipping
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-blue-100">
                Air • Sea • Express
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE FORM ================= */}

      <motion.section
        id="quote-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          scroll-mt-24
          bg-[#061734]

          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.75fr_1.25fr]

              gap-8
              md:gap-10
              lg:gap-12

              items-start
            "
          >
            {/* ================= LEFT ================= */}

            <div className="lg:sticky lg:top-28">
              <span
                className="
                  inline-block
                  px-4
                  py-1.5

                  rounded-full

                  border
                  border-cyan-400/30

                  bg-cyan-400/10

                  text-[11px]
                  sm:text-xs

                  text-cyan-300

                  uppercase
                  font-semibold
                "
              >
                Request Quote
              </span>

              <h2
                className="
                  mt-4

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-bold
                  text-white

                  leading-tight
                "
              >
                Tell Us Your
                <br />

                <span className="text-cyan-300">
                  Product Requirement
                </span>
              </h2>

              <p
                className="
                  mt-4

                  text-sm
                  sm:text-base

                  text-blue-100

                  leading-6
                  sm:leading-7

                  max-w-lg
                "
              >
                Fill in the details and our sourcing specialists will prepare
                a quotation based on your product requirement.
              </p>

              <div
                className="
                  mt-5
                  sm:mt-6

                  grid
                  grid-cols-2
                  lg:grid-cols-1

                  gap-x-3
                  gap-y-2.5

                  text-xs
                  sm:text-sm
                  md:text-base

                  text-blue-100
                "
              >
                <p>✓ Direct factory pricing</p>
                <p>✓ Verified suppliers</p>
                <p>✓ Quality inspection</p>
                <p>✓ Global shipping support</p>

                <p className="col-span-2 lg:col-span-1">
                  ✓ Fast quotation support
                </p>
              </div>
            </div>

            {/* ================= FORM ================= */}

            <div
              className="
                rounded-2xl
                sm:rounded-3xl

                border
                border-white/10

                bg-white/[0.08]

                backdrop-blur-xl

                p-4
                sm:p-6
                md:p-7
              "
            >
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
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
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
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />
                </div>

                {/* COUNTRY + CATEGORY */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-[#102c5c]
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
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

                    <option value="Other">
                      Other
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
                  className="
                    w-full

                    rounded-xl

                    bg-white/5
                    border
                    border-white/10

                    px-4
                    py-3

                    text-sm
                    sm:text-base

                    text-white
                    placeholder:text-gray-300

                    outline-none

                    focus:border-cyan-300

                    transition
                  "
                />

                {/* QUANTITY + PRICE */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    min="1"
                    required
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />

                  <input
                    type="text"
                    name="targetPrice"
                    value={form.targetPrice}
                    onChange={handleChange}
                    placeholder="Target Price (Optional)"
                    className="
                      w-full
                      min-w-0

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-4
                      py-3

                      text-sm
                      sm:text-base

                      text-white
                      placeholder:text-gray-300

                      outline-none

                      focus:border-cyan-300

                      transition
                    "
                  />
                </div>

                {/* DELIVERY */}

                <input
                  type="date"
                  name="deliveryDate"
                  value={form.deliveryDate}
                  onChange={handleChange}
                  className="
                    w-full

                    rounded-xl

                    bg-[#102c5c]
                    border
                    border-white/10

                    px-4
                    py-3

                    text-sm
                    sm:text-base

                    text-white

                    outline-none

                    focus:border-cyan-300

                    transition

                    [color-scheme:dark]
                  "
                />

                {/* SHIPPING */}

                <div>
                  <label className="block text-sm sm:text-base text-white font-semibold mb-2.5">
                    Preferred Shipping Method
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {["Air", "Sea", "Express"].map((method) => (
                      <label
                        key={method}
                        className={`
                          flex
                          items-center
                          justify-center

                          gap-1.5

                          rounded-xl

                          border

                          py-2.5
                          sm:py-3

                          cursor-pointer

                          text-xs
                          sm:text-sm

                          font-medium

                          transition

                          ${
                            form.shipping === method
                              ? "border-cyan-400 bg-cyan-400/15 text-cyan-300"
                              : "border-white/10 bg-white/5 text-white hover:border-cyan-300/60"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={method}
                          checked={form.shipping === method}
                          onChange={handleChange}
                          className="accent-cyan-400"
                        />

                        {method}
                      </label>
                    ))}
                  </div>
                </div>

                {/* UPLOAD */}

                <div>
                  <label className="block text-sm sm:text-base text-white font-semibold mb-2.5">
                    Upload Product Image
                    <span className="text-blue-200 font-normal">
                      {" "}
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    className="
                      w-full

                      rounded-xl

                      bg-white/5
                      border
                      border-white/10

                      px-3
                      py-2.5

                      text-xs
                      sm:text-sm

                      text-white

                      file:mr-3
                      file:bg-cyan-400
                      file:border-0
                      file:px-3
                      file:py-2
                      file:rounded-lg
                      file:text-[#081F4D]
                      file:text-xs
                      sm:file:text-sm
                      file:font-semibold
                    "
                  />

                  <p className="mt-1.5 text-[11px] sm:text-xs text-blue-200">
                    Reference image selection is currently UI-only and is not
                    attached to the quotation email.
                  </p>
                </div>

                {/* MESSAGE */}

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Product Specification / Additional Requirements..."
                  className="
                    w-full

                    rounded-xl

                    bg-white/5
                    border
                    border-white/10

                    px-4
                    py-3

                    text-sm
                    sm:text-base

                    text-white
                    placeholder:text-gray-300

                    resize-none

                    outline-none

                    focus:border-cyan-300

                    transition
                  "
                />

                {/* SUCCESS */}

                {success && (
                  <div
                    className="
                      rounded-xl

                      border
                      border-green-400/30

                      bg-green-400/10

                      px-4
                      py-3

                      text-center

                      text-xs
                      sm:text-sm

                      text-green-300

                      leading-5
                    "
                  >
                    {success}
                  </div>
                )}

                {/* ERROR */}

                {error && (
                  <div
                    className="
                      rounded-xl

                      border
                      border-red-400/30

                      bg-red-400/10

                      px-4
                      py-3

                      text-center

                      text-xs
                      sm:text-sm

                      text-red-300

                      leading-5
                    "
                  >
                    {error}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    w-full

                    rounded-xl

                    bg-cyan-400

                    py-3
                    sm:py-3.5

                    text-sm
                    sm:text-base

                    font-bold
                    text-[#081F4D]

                    hover:bg-cyan-300

                    transition
                    duration-300

                    shadow-[0_0_25px_rgba(34,211,238,.3)]

                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
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

      <section
        className="
          py-10
          sm:py-12
          md:py-14

          bg-gradient-to-b
          from-[#061734]
          to-[#081F4D]
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4

              gap-3
              sm:gap-4
            "
          >
            {[
              {
                value: "24H",
                title: "Fast Response",
              },
              {
                value: "500+",
                title: "Verified Suppliers",
              },
              {
                value: "OEM",
                title: "Custom Manufacturing",
              },
              {
                value: "Global",
                title: "Shipping Support",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="
                  rounded-2xl

                  bg-white/[0.08]

                  border
                  border-white/10

                  backdrop-blur-xl

                  p-4
                  sm:p-5

                  text-center
                "
              >
                <h3
                  className="
                    text-2xl
                    sm:text-3xl

                    font-bold
                    text-cyan-300
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-1.5

                    text-xs
                    sm:text-sm
                    md:text-base

                    text-blue-100
                  "
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="relative py-10 sm:py-12 md:py-14 bg-[#061734] overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/20 blur-[140px] rounded-full" />

        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div
            className="
              rounded-2xl
              sm:rounded-3xl

              border
              border-white/10

              bg-white/[0.08]

              backdrop-blur-xl

              px-5
              py-7

              sm:px-7
              sm:py-8

              md:px-10
              md:py-9

              text-center
            "
          >
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold
                text-white
              "
            >
              Need Immediate Assistance?
            </h2>

            <p
              className="
                mt-3
                sm:mt-4

                text-sm
                sm:text-base

                text-blue-100

                leading-6

                max-w-2xl
                mx-auto
              "
            >
              Our sourcing specialists can help with factories, pricing,
              product requirements, inspections and international shipping.
            </p>

            <div
              className="
                mt-5
                sm:mt-6

                flex
                flex-col
                sm:flex-row

                justify-center

                gap-3
              "
            >
              <a
                href="https://wa.me/918789225500"
                target="_blank"
                rel="noreferrer"
                className="
                  w-full
                  sm:w-auto

                  rounded-full

                  bg-cyan-400

                  px-6
                  py-3

                  text-sm
                  sm:text-base

                  text-[#081F4D]

                  font-bold

                  hover:bg-cyan-300

                  transition
                "
              >
                Chat on WhatsApp
              </a>

              <a
                href="/contact"
                className="
                  w-full
                  sm:w-auto

                  rounded-full

                  border
                  border-white/20

                  px-6
                  py-3

                  text-sm
                  sm:text-base

                  text-white

                  hover:bg-white/10

                  transition
                "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section
        className="
          py-10
          sm:py-12
          md:py-14

          bg-gradient-to-b
          from-[#061734]
          to-[#081F4D]
        "
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span
              className="
                inline-block

                rounded-full

                border
                border-cyan-400/30

                bg-cyan-400/10

                px-4
                py-1.5

                text-[11px]
                sm:text-xs

                uppercase
                font-semibold
                text-cyan-300
              "
            >
              Quote FAQ
            </span>

            <h2
              className="
                mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold
                text-white
              "
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <div
              className="
                rounded-2xl

                bg-white/[0.08]

                border
                border-white/10

                p-4
                sm:p-5
              "
            >
              <h3 className="text-cyan-300 font-semibold text-sm sm:text-base md:text-lg">
                How soon will I receive my quotation?
              </h3>

              <p className="mt-1.5 text-sm sm:text-base text-blue-100 leading-6">
                Usually within 24 hours after receiving your inquiry.
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-white/[0.08]

                border
                border-white/10

                p-4
                sm:p-5
              "
            >
              <h3 className="text-cyan-300 font-semibold text-sm sm:text-base md:text-lg">
                Can you source OEM & customized products?
              </h3>

              <p className="mt-1.5 text-sm sm:text-base text-blue-100 leading-6">
                Yes. We work with manufacturers that can support OEM and
                customized production depending on product and order quantity.
              </p>
            </div>

            <div
              className="
                rounded-2xl

                bg-white/[0.08]

                border
                border-white/10

                p-4
                sm:p-5
              "
            >
              <h3 className="text-cyan-300 font-semibold text-sm sm:text-base md:text-lg">
                Which shipping methods do you provide?
              </h3>

              <p className="mt-1.5 text-sm sm:text-base text-blue-100 leading-6">
                Air Freight, Sea Freight and Express Courier can be arranged
                based on your destination and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}