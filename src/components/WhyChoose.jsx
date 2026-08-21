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
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            Why Businesses Choose YIHE
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We provide complete international trade solutions from sourcing
            to shipping with professional support and trusted partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <Icon size={30} className="text-blue-700" />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}