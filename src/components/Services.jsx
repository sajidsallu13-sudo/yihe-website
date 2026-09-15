import {
  Ship,
  Plane,
  Search,
  FileText,
  Globe2,
  PackageCheck,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Reliable sea freight services with secure container shipping worldwide.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Fast international air cargo solutions with express delivery.",
  },
  {
    icon: Search,
    title: "Product Sourcing",
    desc: "Find trusted manufacturers and verified suppliers from China & other countries.",
  },
  {
    icon: FileText,
    title: "Import Documentation",
    desc: "Complete customs clearance and import-export documentation support.",
  },
  {
    icon: Globe2,
    title: "International Trade",
    desc: "Helping businesses expand globally through smart trade solutions.",
  },
  {
    icon: PackageCheck,
    title: "Quality Inspection",
    desc: "Professional product inspection before shipment for better quality assurance.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Complete Import & Export Solutions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            From sourcing products to international shipping, YIHE provides
            end-to-end trade solutions for businesses worldwide.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F2D66] hover:text-white hover:shadow-xl sm:p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-white sm:h-12 sm:w-12">
                  <Icon size={24} className="text-blue-700" />
                </div>

                <h3 className="mt-3 text-lg font-bold sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 group-hover:text-gray-200">
                  {service.desc}
                </p>

                <button className="mt-3 text-sm font-semibold text-blue-700 group-hover:text-yellow-300 sm:text-base">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
