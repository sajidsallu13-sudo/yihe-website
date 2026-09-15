import {
  ShieldCheck,
  Globe2,
  Truck,
  FileCheck,
  Handshake,
  Clock3,
} from "lucide-react";

const data = [
  {
    icon: ShieldCheck,
    title: "In-House & Partnered Factories",
    desc: "In-House & Partnered Factories: Flexible capacity across diverse product categories with strict standards. ",
  },
  {
    icon: Globe2,
    title: "On-Site Stationed Teams ",
    desc: "Native Chinese Quality Assurance (QA) and management staff stationed directly inside partner factories. ",
  },
  {
    icon: Truck,
    title: "Logistics & Regional Branch Support",
    desc: "Direct container consolidation and local clearance for multi-category mixed shipments.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    desc: "Complete customs and export-import documentation support.",
  },
  {
    icon: Handshake,
    title: "Verified Manufacturers",
    desc: "Connects you with trusted, fully verified factories meeting strict quality standards..",
  },
  {
    icon: Clock3,
    title: "End-to-End Logistics ",
    desc: "Integrated logistics division handling customs, warehousing, and freight forwarding directly to your door.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-7 text-center sm:mb-9">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Why Businesses Choose YIHE
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            We provide complete international trade solutions from sourcing
            to shipping with professional support and trusted partners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
                  <Icon size={24} className="text-blue-700" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-600 sm:leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
