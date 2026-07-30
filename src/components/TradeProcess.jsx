import {
  Search,
  FileCheck,
  Ship,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    icon: Search,
    step: "01",
    title: "Product Sourcing",
    desc: "We identify reliable manufacturers and verified suppliers matching your requirements.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Quotation & Documentation",
    desc: "Receive transparent quotations and complete import-export documentation support.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Quality Inspection",
    desc: "Products are inspected before shipment to ensure quality and compliance.",
  },
  {
    icon: Ship,
    step: "04",
    title: "Shipping & Delivery",
    desc: "Fast and secure sea or air freight with complete logistics tracking support.",
  },
];

export default function TradeProcess() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            How We Work
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Our Trade Process
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            A simple, transparent and efficient process that ensures your
            international trade is smooth from sourcing to final delivery.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {process.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow hover:shadow-xl transition duration-300"
              >

                <div className="absolute top-6 right-6 text-6xl font-bold text-blue-100">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Icon
                    size={32}
                    className="text-blue-700"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

                {index !== process.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute -right-5 top-1/2 text-blue-600"
                    size={30}
                  />
                )}

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}