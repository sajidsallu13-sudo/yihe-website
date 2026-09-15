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
    <section className="bg-slate-100 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-7 text-center sm:mb-9">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 sm:text-sm">
            How We Work
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Our Trade Process
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            A simple, transparent and efficient process that ensures your
            international trade is smooth from sourcing to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
              >
                <div className="absolute right-4 top-3 text-4xl font-bold text-blue-100 sm:text-5xl">
                  {item.step}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
                  <Icon size={24} className="text-blue-700" />
                </div>

                <h3 className="mt-4 pr-9 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>

                {index !== process.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden text-blue-600 lg:block"
                    size={24}
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
