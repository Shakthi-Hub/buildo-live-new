import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Buildo",
  description: "Learn about the founders and story of Buildo, Madurai's premier architecture and construction firm.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-brand-black/10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Story</h1>
          <p className="text-xl text-brand-black/70 leading-relaxed">
            Since 2018, Buildo has been dedicated to one simple mission: <strong className="text-brand-orange">We Design Your Dream</strong>. From a small design studio, we&apos;ve grown into a comprehensive architecture, interior design, and construction firm serving families across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="py-24 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Milestones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-white/20">
            <div className="pt-8 md:pt-0 px-4">
              <h3 className="text-4xl font-bold text-brand-orange mb-2">2018</h3>
              <p className="text-brand-white/80">Buildo Founded in Madurai</p>
            </div>
            <div className="pt-8 md:pt-0 px-4">
              <h3 className="text-4xl font-bold text-brand-orange mb-2">58+</h3>
              <p className="text-brand-white/80">Projects Completed</p>
            </div>
            <div className="pt-8 md:pt-0 px-4">
              <h3 className="text-4xl font-bold text-brand-orange mb-2">14+</h3>
              <p className="text-brand-white/80">Ongoing Sites</p>
            </div>
            <div className="pt-8 md:pt-0 px-4">
              <h3 className="text-4xl font-bold text-brand-orange mb-2">47K+</h3>
              <p className="text-brand-white/80">Instagram Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden">
            <Image
              src="/founders001.png"
              alt="Er. S. Arwin (Founder) and Er. A. Hariharan (Co-Founder)"
              width={700}
              height={560}
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/70 to-transparent p-6">
              <div className="flex justify-around">
                <div className="text-center">
                  <p className="font-bold text-brand-white">Er. S. Arwin</p>
                  <p className="text-brand-orange text-sm uppercase tracking-widest">Founder</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-brand-white">Er. A. Hariharan</p>
                  <p className="text-brand-orange text-sm uppercase tracking-widest">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Meet the Minds Behind Buildo</h2>
            <div className="space-y-6 text-brand-black/70 text-lg leading-relaxed mb-8">
              <p>
                <strong>Er. S. Arwin</strong> and <strong>Er. A. Hariharan</strong> established Buildo with a vision to bring premium, transparent, and hassle-free construction to South India. 
              </p>
              <p>
                Recognizing the stress homeowners face during construction, they integrated architectural design, interior detailing, and end-to-end execution under one roof. The result is a seamless journey from the first sketch to the final coat of paint.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center text-brand-black font-medium">
                <CheckCircle className="text-brand-orange mr-3" size={24} /> 100% Transparent Pricing
              </li>
              <li className="flex items-center text-brand-black font-medium">
                <CheckCircle className="text-brand-orange mr-3" size={24} /> In-house Structural & Design Teams
              </li>
              <li className="flex items-center text-brand-black font-medium">
                <CheckCircle className="text-brand-orange mr-3" size={24} /> Premium Material Selection
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
