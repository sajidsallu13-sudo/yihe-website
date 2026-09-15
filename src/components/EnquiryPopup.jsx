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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

      setSuccess("Enquiry sent successfully! Our team will contact you soon.");
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
      setError("Unable to send enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {!open && (
        <motion.button
          type="button"
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          whileHover={{ x: -3 }}
          onClick={() => setOpen(true)}
          aria-label="Open enquiry form"
          className="fixed right-0 top-1/2 z-[9998] flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-l-xl bg-cyan-400 px-2.5 py-3 text-xs font-bold text-[#081F4D] shadow-xl sm:rounded-l-2xl sm:px-3 sm:py-4 sm:text-sm"
        >
          <MessageCircle size={19} />
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[calc(100vh-1.5rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/10 bg-[#081F4D] shadow-2xl sm:max-h-[calc(100vh-2.5rem)] sm:rounded-3xl"
            >
              <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0B2F73] to-[#114DA8] px-5 py-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close enquiry form"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                >
                  <X size={19} />
                </button>

                <div className="pr-9">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300 sm:text-xs">
                    YIHE International Trade Service
                  </span>
                  <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
                    Send Your Enquiry
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                    Tell us what you need and our team will contact you.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 p-4 sm:p-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-300 focus:border-cyan-300 sm:text-base"
                />

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-300 focus:border-cyan-300 sm:text-base"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="min-w-0 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-300 focus:border-cyan-300"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp / Phone"
                    required
                    className="min-w-0 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-300 focus:border-cyan-300"
                  />
                </div>

                <textarea
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What product or service do you need?"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-300 focus:border-cyan-300 sm:text-base"
                />

                {success && (
                  <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-2.5 text-xs leading-5 text-green-300 sm:text-sm">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-xs leading-5 text-red-300 sm:text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-bold text-[#081F4D] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={17} />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-blue-200 sm:text-xs">
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
