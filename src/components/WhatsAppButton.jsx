import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "918789225500";

  const message = encodeURIComponent(
    "Hello YIHE Global, I would like to make an enquiry."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with YIHE on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.35,
        delay: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        bottom-20
        right-5
        md:bottom-24
        md:right-6
        z-[9997]

        w-11
        h-11
        md:w-12
        md:h-12

        rounded-full
        bg-[#081F4D]

        flex
        items-center
        justify-center

        border
        border-cyan-400/40

        shadow-[0_6px_20px_rgba(8,31,77,0.35)]

        hover:bg-[#0B2B63]
        hover:border-cyan-400/70
        hover:shadow-[0_8px_25px_rgba(34,211,238,0.22)]

        transition-all
        duration-300
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="
          w-[24px]
          h-[24px]
          md:w-[26px]
          md:h-[26px]
          fill-[#25D366]
        "
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.208-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.025c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.056 24l6.3-1.654a11.882 11.882 0 005.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </motion.a>
  );
}