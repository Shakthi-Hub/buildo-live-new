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

              {/* Design & Drawings */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Design & Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Architectural</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Architectural Floor Plans, Elevation</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Architectural Floor Plans, Elevation</td>
                <td className="p-6 text-center text-brand-black/80">Architectural Floor Plans, Elevation, 3D Visualization, Electrical / Plumbing Drawing</td>
              </tr>
              
              {/* Structural Drawings */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Structural Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Drawings</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Basic Structural Drawing</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Footing / Column / Beam Drawing, Other Element Detail Drawings</td>
                <td className="p-6 text-center text-brand-black/80">Footing / Column / Beam Drawing, Other Element Detail Drawings</td>
              </tr>

              {/* Structures */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Structures</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Basement Height</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Upto 3 Feet</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Upto 4 Feet</td>
                <td className="p-6 text-center text-brand-black/80">Upto 5 Feet</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Ceiling Height</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Upto 10 feet</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Upto 10 feet</td>
                <td className="p-6 text-center text-brand-black/80">Upto 10 feet</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Steel (Equivalent Brand)</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">DSRM</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">VIZAG</td>
                <td className="p-6 text-center text-brand-black/80">TATA & JSW</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Cement</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Chettinad</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Ramco & Ultratech</td>
                <td className="p-6 text-center text-brand-black/80">Dalmia & Ultratech</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Brick</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Hand Mould (Red brick)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Wirecut (Red brick)</td>
                <td className="p-6 text-center text-brand-black/80">Wirecut (Red brick)</td>
              </tr>

              {/* Tiles */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Tiles : (Flooring & Wall)</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Flooring</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">2/2 Vitrified Tiles - Rs .50/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">4/2 Vitrified Tiles - Rs .60/-</td>
                <td className="p-6 text-center text-brand-black/80">4/2 or 5.3/2.9 Vitrified Tiles - Rs .85/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Parking</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">1/1 Anti-Skid - Rs .40/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">1/1 Anti-Skid - Rs .45/-</td>
                <td className="p-6 text-center text-brand-black/80">2/2 Anti-Skid - Rs .55/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Kitchen Wall Tiles</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Vitrified Tiles - Rs .40/-<br/><span className="text-sm opacity-75">(4 feet above counter top)</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Vitrified Tiles - Rs .50/-<br/><span className="text-sm opacity-75">(4 feet above counter top)</span></td>
                <td className="p-6 text-center text-brand-black/80">Vitrified Tiles - Rs .60/-<br/><span className="text-sm opacity-75">(4 feet above counter top)</span></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Kitchen Counter Top</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">18mm Granite - Rs .110/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">18mm Granite - Rs .140/-</td>
                <td className="p-6 text-center text-brand-black/80">18mm Granite - Rs .160/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Bathroom (Wall & Floor)</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Upto 7 feet - Rs.40/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Upto 10 feet - Rs.45/-</td>
                <td className="p-6 text-center text-brand-black/80">Upto 10 feet - Rs.55/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Staircase</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">1/1 Tile Matte Finish</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Granite Matte Finish</td>
                <td className="p-6 text-center text-brand-black/80">Granite Matte Finish</td>
              </tr>

              {/* Plumbing */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Plumbing</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Pipes (PVC/UPVC/CPVC)</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Arasan & Prince</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Finolex & Trubore</td>
                <td className="p-6 text-center text-brand-black/80">Aashirvad & Finolex</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Bathroom Accessories</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Cera (Equivalent Brand)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Parryware</td>
                <td className="p-6 text-center text-brand-black/80">Jaquar</td>
              </tr>

              {/* Electricals */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Electricals</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Wires</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Kundan (Equivalent Brand)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Finolex (S)</td>
                <td className="p-6 text-center text-brand-black/80">Finolex (G)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Switches</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Goldmedal</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Lisha & Honeywell</td>
                <td className="p-6 text-center text-brand-black/80">Legrand & Honeywell</td>
              </tr>

              {/* Doors & Windows */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Doors & Windows</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Main Door</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">(Ghana) Teak Door With Teak Wood Frame</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">(Nigeria) Teak Door With Teak Wood Frame</td>
                <td className="p-6 text-center text-brand-black/80">(M.Burma) Teak Door With Teak Wood Frame</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Internal Door</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Membrane Door With Wood Frame<br/><span className="text-sm opacity-75">(Vembu & Mahogany)</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Flush Door With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></td>
                <td className="p-6 text-center text-brand-black/80">Flush & HDHMR With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Window Frame</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">(Vembu & Mahogany)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">(Nigeria Teak)</td>
                <td className="p-6 text-center text-brand-black/80">(Nigeria Teak)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Bathroom Doors</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">PVC</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">WPC</td>
                <td className="p-6 text-center text-brand-black/80">WPC</td>
              </tr>

              {/* Painting */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Painting : (Asian & Berger)</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Interior</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat Premium emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Exterior</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Apex emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Doors & Windows</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Main Door : Melamine Polish</li><li>Internal Door & Frame : Enamel Paint</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Main Door : Melamine Polish</li><li>Internal Door & Frame : Enamel Paint</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Main Door : PU Polish</li><li>Internal Door & Frame : Melamine Polish</li></ul></td>
              </tr>

              {/* Other Inclusive */}
              <tr><td colSpan={4} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Other Inclusive</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Overhead Tank</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">1000 Litres</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">1000 Litres</td>
                <td className="p-6 text-center text-brand-black/80">2000 Litres</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Parapet Wall</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">3 Feet Height</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">3 Feet Height</td>
                <td className="p-6 text-center text-brand-black/80">3 Feet Height</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Roof Tiles</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">(Terracotta)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">(White)</td>
                <td className="p-6 text-center text-brand-black/80">(White)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">MS - Safety Grill Gate</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">for main door</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">For Main & Back Door</td>
                <td className="p-6 text-center text-brand-black/80">For Main & Back Door</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 font-semibold bg-brand-black/5">Basement</td>
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Antitermite</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Antitermite</td>
                <td className="p-6 text-center text-brand-black/80">Antitermite, Bitumen Coat</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 space-y-6">
          <div className="p-6 bg-brand-black/5 border border-brand-black/10 rounded-xl text-left max-w-3xl mx-auto shadow-sm">
            <h4 className="font-bold mb-3 text-lg">Extra Charges :</h4>
            <p className="text-brand-black/80 leading-relaxed font-medium">
              Compound Wall, Bore Well & EB Connections, Plan Approval, Underground Water Storage Sump, Septic Tank, Overhead RCC Water Tank, Setback Work.
            </p>
          </div>
          
          <div className="inline-block p-4 bg-brand-orange/20 border-l-4 border-brand-orange rounded-r-xl text-left shadow-sm">
            <p className="text-brand-black font-semibold text-sm sm:text-base italic">
              Rate May Vary According To The Building Location / Area - Min 1500 Sq.ft / Client Preference / Material Price
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
