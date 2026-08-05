"use client";

const placeholders = [
  "/projects/villa-1.png",
  "/projects/villa-2.png",
  "/projects/interior-1.png",
  "/projects/bungalow-1.png",
];

const InstagramIcon = ({ className = "", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function InstagramCallout() {
  return (
    <section className="py-20 bg-brand-black text-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-12">
          <a 
            href="https://instagram.com/buildo.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 hover:text-brand-orange transition-colors group"
          >
            <div className="p-3 bg-brand-white/10 rounded-full group-hover:bg-brand-orange/20 transition-colors">
              <InstagramIcon size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold tracking-tight">Follow @buildo.in</h3>
              <p className="text-brand-orange font-medium">Join our 47K+ followers</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholders.map((src, i) => (
            <a 
              key={i} 
              href="https://instagram.com/buildo.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative aspect-square overflow-hidden rounded-xl bg-brand-white/5"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
