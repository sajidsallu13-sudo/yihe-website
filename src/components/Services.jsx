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
    <section className="py-14 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-700 uppercase font-semibold tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Complete Import & Export Solutions
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600 leading-6">
            From sourcing products to international shipping,
            YIHE provides end-to-end trade solutions for businesses worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border p-6 hover:bg-[#0F2D66] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-white">

                  <Icon
                    size={30}
                    className="text-blue-700"
                  />

                </div>

                <h3 className="text-xl font-bold mt-4">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-500 group-hover:text-gray-200 leading-6">
                  {service.desc}
                </p>

                <button className="mt-5 text-blue-700 group-hover:text-yellow-300 font-semibold">
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