"use client";

import React from 'react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const projectType = formData.get('projectType');
    const message = formData.get('message');

    const text = `Hello Buildo, I have a new enquiry:

*Name:* ${name}
*Phone:* ${phone}
*Project Type:* ${projectType}
*Message:* ${message ? message : 'No message provided'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919500417217?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      <button type="submit" className="w-full bg-brand-orange text-brand-black font-bold py-4 rounded-xl hover:bg-orange-400 transition-colors flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        Submit via WhatsApp
      </button>
    </form>
  );
}
