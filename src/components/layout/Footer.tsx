import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/buildo-logo-transparent.png"
                alt="Buildo"
                width={110}
                height={44}
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-brand-white/60 mb-6 text-sm">
              We Design Your Dream. Architecture, Interior Design, and Construction under one roof since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/buildo.in" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-brand-white/60 hover:text-brand-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-brand-white/60 hover:text-brand-white transition-colors">Projects</Link></li>
              <li><Link href="/pricing" className="text-brand-white/60 hover:text-brand-white transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="text-brand-white/60 hover:text-brand-white transition-colors">Services</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-brand-orange flex-shrink-0 mt-1" size={20} />
                <span className="text-brand-white/60 text-sm leading-relaxed">
                  3/799-2, Mahalakshmi Nagar,<br />
                  Moondrumavadi – Iyer Bungalow Road,<br />
                  Madurai – 625007
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-brand-orange flex-shrink-0" size={20} />
                <a href="tel:9500417217" className="text-brand-white/60 hover:text-brand-white transition-colors">9500417217</a>
                <span className="text-brand-white/60 mx-2">/</span>
                <a href="tel:9080050005" className="text-brand-white/60 hover:text-brand-white transition-colors">9080050005</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-brand-orange flex-shrink-0" size={20} />
                <a href="mailto:buildo1995@gmail.com" className="text-brand-white/60 hover:text-brand-white transition-colors">buildo1995@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-white/40">
          <p>&copy; {new Date().getFullYear()} Buildo. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
