export const metadata = {
  title: "Pricing Packages | Buildo",
  description: "Transparent pricing packages for construction in Madurai. Choose from Basic, Standard, and Premium tiers.",
};

export default function PricingPage() {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Transparent Pricing</h1>
        <p className="text-xl text-brand-black/70 max-w-2xl mx-auto mb-16">
          Compare our packages below. All tiers include our standard of excellence and end-to-end project management. Rates vary based on location and specific material choices. (Minimum area 1500 sqft).
        </p>

        <div className="overflow-x-auto border border-brand-black/10 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-black text-brand-white">
                <th className="p-6 text-lg font-semibold border-r border-brand-white/10 w-1/4">Specification</th>
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/4">Basic<div className="text-brand-orange text-sm font-normal mt-1">₹2400 / sqft</div></th>
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/4 bg-brand-orange/10 text-brand-white relative">
                  <span className="absolute top-0 right-0 bg-brand-orange text-brand-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</span>
                  Standard
                  <div className="text-brand-orange text-sm font-normal mt-1">₹2600 / sqft</div>
                </th>
                <th className="p-6 text-xl font-bold text-center w-1/4">Premium<div className="text-brand-orange text-sm font-normal mt-1">₹2800 / sqft</div></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-black/10">
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Design</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Floor Plan, Elevation</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Floor Plan, Elevation</td>
                <td className="p-6 text-center text-brand-black/80">Floor Plan, Elevation, 3D Viz, Electrical/Plumbing</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Structural</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Basic structural drawing</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Footing/Column/Beam detail</td>
                <td className="p-6 text-center text-brand-black/80">Footing/Column/Beam detail</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Basement Height</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">3 ft</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">4 ft</td>
                <td className="p-6 text-center text-brand-black/80">5 ft</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Steel</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">DSRM (equiv.)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">VIZAG (equiv.)</td>
                <td className="p-6 text-center text-brand-black/80">TATA & JSW (equiv.)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Cement</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Chettinad</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Ramco & Ultratech</td>
                <td className="p-6 text-center text-brand-black/80">Dalmia & Ultratech</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Brick</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Hand Mould (red)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Wirecut (red)</td>
                <td className="p-6 text-center text-brand-black/80">Wirecut (red)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Flooring Tiles</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">2/2 vitrified ₹50</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">4/2 vitrified ₹60</td>
                <td className="p-6 text-center text-brand-black/80">4/2 or 5.3/2.9 vitrified ₹85</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Kitchen Counter</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">18mm granite ₹110</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">18mm granite ₹140</td>
                <td className="p-6 text-center text-brand-black/80">18mm granite ₹160</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Bath Accessories</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Cera</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Parryware</td>
                <td className="p-6 text-center text-brand-black/80">Jaquar</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Main Door</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Ghana Teak</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Nigeria Teak</td>
                <td className="p-6 text-center text-brand-black/80">Myanmar Teak</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Painting</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Tractor emulsion / Ace</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Tractor emulsion / Ace</td>
                <td className="p-6 text-center text-brand-black/80">Premium emulsion / Apex</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Overhead Tank</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">1000L</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">1000L</td>
                <td className="p-6 text-center text-brand-black/80">2000L</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 p-6 bg-brand-orange/10 border border-brand-orange rounded-xl text-left max-w-3xl mx-auto">
          <h4 className="font-bold mb-2">Extra charges (all tiers):</h4>
          <p className="text-brand-black/70 text-sm">
            Compound wall, borewell & EB connection, plan approval, underground sump, septic tank, overhead RCC tank, setback work. 
          </p>
        </div>
      </section>
    </div>
  );
}
