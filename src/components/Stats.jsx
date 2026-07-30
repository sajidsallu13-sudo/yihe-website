import { Globe, PackageCheck, Ship, Users } from "lucide-react";

const stats = [
  {
    icon: <Globe size={40} />,
    number: "25+",
    title: "Countries Served",
  },
  {
    icon: <Users size={40} />,
    number: "500+",
    title: "Happy Clients",
  },
  {
    icon: <PackageCheck size={40} />,
    number: "1500+",
    title: "Successful Shipments",
  },
  {
    icon: <Ship size={40} />,
    number: "24/7",
    title: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0F2D66]">
            Trusted Worldwide
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable Import & Export solutions with global reach,
            professional logistics and trusted international partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#0F2D66] flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-[#0F2D66]">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}