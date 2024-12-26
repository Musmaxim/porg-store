import { services } from "@/lib/temporary";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-8 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Наши Услуги</h2>
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        {services.map((service) => (
          <Link
            key={service.id}
            href="/services"
            className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 dark:border-white h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4 h-1/3">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;