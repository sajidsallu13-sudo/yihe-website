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
    title: "Trusted Trading Partner",
    desc: "Reliable import and export solutions with complete transparency.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Strong sourcing and logistics network across multiple countries.",
  },
  {
    icon: Truck,
    title: "Fast Logistics",
    desc: "Sea, Air and Land freight with timely delivery.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    desc: "Complete customs and export-import documentation support.",
  },
  {
    icon: Handshake,
    title: "Verified Suppliers",
    desc: "Only trusted manufacturers and verified suppliers.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    desc: "Professional assistance whenever your business needs us.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Why Businesses Choose YIHE
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            We provide complete international trade solutions from sourcing
            to shipping with professional support and trusted partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={34} className="text-blue-700" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
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