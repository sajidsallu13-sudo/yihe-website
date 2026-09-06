import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(true);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });

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

    const enquiryMessage = `
NEW WEBSITE ENQUIRY
==============================

Customer Name: ${form.name}
Company: ${form.company || "Not provided"}
Email: ${form.email}
Phone / WhatsApp: ${form.phone}

REQUIREMENT
------------------------------
${form.requirement}

==============================

Source:
YIHE International Trade Service Website
    `;

    const templateParams = {
      name: form.name,
      email: form.email,
      message: enquiryMessage,
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
        "Enquiry sent successfully! Our team will contact you soon."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
      });

      setTimeout(() => {
        setOpen(false);
        setSuccess("");
      }, 2500);

    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Unable to send enquiry. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ================= SIDE ENQUIRY TAB ================= */}

      {!open && (
        <motion.button
          initial={{ x: 80 }}
          animate={{ x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => setOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-[9998] bg-cyan-400 text-[#081F4D] px-4 py-5 rounded-l-2xl shadow-2xl font-bold flex flex-col items-center gap-2"
        >
          <MessageCircle size={22} />

          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Enquiry
          </span>
        </motion.button>
      )}


      {/* ================= POPUP ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#081F4D] shadow-2xl overflow-hidden"
            >

              {/* HEADER */}

              <div className="bg-gradient-to-r from-[#0B2F73] to-[#114DA8] px-6 py-5">

                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-white/70 hover:text-white transition"
                >
                  <X size={22} />
                </button>

                <div className="pr-8">

                  <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    YIHE International Trade Service
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Send Your Enquiry
                  </h2>

                  <p className="mt-1 text-sm text-blue-100">
                    Tell us what you need and our team will contact you.
                  </p>

                </div>

              </div>


              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-4"
              >

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                />


                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                />


                <div className="grid grid-cols-2 gap-3">

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp / Phone"
                    required
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-300"
                  />

                </div>


                <textarea
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What product or service do you need?"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none resize-none focus:border-cyan-300"
                />


                {/* SUCCESS */}

                {success && (
                  <div className="rounded-xl bg-green-400/10 border border-green-400/30 px-4 py-3 text-sm text-green-300">
                    {success}
                  </div>
                )}


                {/* ERROR */}

                {error && (
                  <div className="rounded-xl bg-red-400/10 border border-red-400/30 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-cyan-400 py-3.5 font-bold text-[#081F4D] flex items-center justify-center gap-2 hover:bg-cyan-300 transition disabled:opacity-60"
                >

                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Enquiry
                    </>
                  )}

                </button>

                <p className="text-center text-xs text-blue-200">
                  We usually respond within 24 hours.
                </p>

              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}