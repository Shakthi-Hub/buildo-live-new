import { Home, PencilRuler, Hammer, DraftingCompass } from "lucide-react";

export const metadata = {
  title: "Our Services | Buildo",
  description: "Architectural Design, Interior Design, Construction, and Structural Drawings by Buildo.",
};

const services = [
  {
    title: "Architectural Design",
    description: "Our core strength. We design spaces that are highly functional, culturally relevant, and aesthetically timeless. From modern villas to traditional bungalows, our plans maximize space, light, and ventilation.",
    icon: Home,
  },
  {
    title: "Interior Design",
    description: "We don't just build walls; we design the life within them. Our interior design service covers everything from custom modular kitchens and wardrobes to lighting design and premium material selection.",
    icon: PencilRuler,
  },
  {
    title: "Construction",
    description: "End-to-end turnkey construction services. We handle material procurement, labor management, and daily site supervision, ensuring your project is delivered on time, exactly as designed, with zero hidden costs.",
    icon: Hammer,
  },
  {
    title: "Structural Drawings",
    description: "Safety and longevity are paramount. Our in-house structural engineers produce precise footing, column, beam, and slab details to ensure your building stands strong for generations.",
    icon: DraftingCompass,
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-brand-black/10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Services</h1>
        <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
          Comprehensive solutions for your dream home. We handle every step of the journey.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-brand-black/5 hover:border-brand-orange/50 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <service.icon className="text-brand-orange group-hover:text-brand-black transition-colors" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-black/70 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
