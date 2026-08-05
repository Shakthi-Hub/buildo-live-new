import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | Buildo",
  description: "Get in touch with Buildo in Madurai for your architectural and construction needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-brand-black/10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Let&apos;s Talk</h1>
        <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
          Ready to design your dream? Reach out to us for a consultation or a site visit.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-brand-black/5">
            <h2 className="text-3xl font-bold mb-8">Send an Enquiry</h2>
            <form action={process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/placeholder"} method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-black/70 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-black/70 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-brand-black/70 mb-2">Project Type</label>
                <select id="projectType" name="projectType" required className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors bg-white">
                  <option value="">Select a type...</option>
                  <option value="Residential Construction">Residential Construction</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Architectural Design Only">Architectural Design Only</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-black/70 mb-2">Message (Optional)</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-orange text-brand-black font-bold py-4 rounded-xl hover:bg-orange-400 transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="p-3 bg-brand-orange/10 rounded-full mr-4 text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Address</h4>
                    <p className="text-brand-black/70 leading-relaxed">
                      3/799-2, Mahalakshmi Nagar,<br />
                      Moondrumavadi – Iyer Bungalow Road,<br />
                      Madurai – 625007
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-3 bg-brand-orange/10 rounded-full mr-4 text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-brand-black/70">
                      <a href="tel:9500417217" className="hover:text-brand-orange transition-colors">9500417217</a>
                      <span className="mx-2">/</span>
                      <a href="tel:9080050005" className="hover:text-brand-orange transition-colors">9080050005</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-3 bg-brand-orange/10 rounded-full mr-4 text-brand-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-brand-black/70">
                      <a href="mailto:buildo1995@gmail.com" className="hover:text-brand-orange transition-colors">buildo1995@gmail.com</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-sm border border-brand-black/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.382436814035!2d78.140228!3d9.971661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sIyer%20Bungalow%2C%20Madurai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Buildo Office Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
