export const metadata = {
  title: "Pricing Packages | Buildo",
  description: "Transparent pricing packages for construction in Madurai. Choose from Basic, Standard, and Premium tiers.",
};

export default function PricingPage() {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">Transparent Pricing</h1>
        <p className="text-base sm:text-lg md:text-xl text-brand-black/70 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
          Compare our packages below. All tiers include our standard of excellence and end-to-end project management. Rates vary based on location and specific material choices. (Minimum area 1500 sqft).
        </p>

        <div className="overflow-x-auto border border-brand-black/10 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-black text-brand-white">
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/3">Basic<div className="text-brand-orange text-sm font-normal mt-1">₹2400 / sqft</div></th>
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/3">
                  Standard
                  <div className="text-brand-orange text-sm font-normal mt-1">₹2600 / sqft</div>
                </th>
                <th className="p-6 text-xl font-bold text-center w-1/3 bg-brand-orange/10 text-brand-white relative">
                  <span className="absolute top-0 right-0 bg-brand-orange text-brand-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</span>
                  Premium
                  <div className="text-brand-orange text-sm font-normal mt-1">₹2800 / sqft</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-black/10">

              <tr><td colSpan={3} className="bg-brand-black/5 font-semibold p-3 text-center text-brand-black/80 text-sm">Price may vary depending on no.of floors</td></tr>

              {/* Design & Drawings */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Design & Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Architectural Floor Plans</li><li>Elevation</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Architectural Floor Plans</li><li>Elevation</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Architectural Floor Plans</li><li>Elevation</li><li>3D Visualization</li><li>Electrical / Plumbing Drawing</li></ul></td>
              </tr>
              
              {/* Structural Drawings */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Structural Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Basic Structural Drawing</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Footing / Column / Beam Drawing</li><li>Other Element Detail Drawings</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><ul className="list-disc text-left inline-block pl-4"><li>Footing / Column / Beam Drawing</li><li>Other Element Detail Drawings</li></ul></td>
              </tr>

              {/* Structures */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Structures</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Basement Height<br/>Upto 3 Feet</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Basement Height<br/>Upto 4 Feet</td>
                <td className="p-6 text-center text-brand-black/80">Basement Height<br/>Upto 5 Feet</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Ceiling Height<br/>Upto 10 feet</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Ceiling Height<br/>Upto 10 feet</td>
                <td className="p-6 text-center text-brand-black/80">Ceiling Height<br/>Upto 10 feet</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Steel : DSRM<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Steel : VIZAG<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></td>
                <td className="p-6 text-center text-brand-black/80">Steel : TATA & JSW<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Cement : Chettinad<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Cement : Ramco &<br/>Ultratech</td>
                <td className="p-6 text-center text-brand-black/80">Cement : Dalmia &<br/>Ultratech</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Brick : Hand Mould<br/><span className="text-sm opacity-75">( Red brick )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Brick : Wirecut<br/><span className="text-sm opacity-75">( Red brick )</span></td>
                <td className="p-6 text-center text-brand-black/80">Brick : Wirecut<br/><span className="text-sm opacity-75">( Red brick )</span></td>
              </tr>

              {/* Tiles */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Tiles : ( Flooring & Wall )</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Flooring : 2/2<br/>Vitrified Tiles - Rs .50/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Flooring : 4/2<br/>Vitrified Tiles - Rs .60/-</td>
                <td className="p-6 text-center text-brand-black/80">Flooring : 4/2 or 5.3/2.9<br/>Vitrified Tiles - Rs .85/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Parking : 1/1<br/>Anti-Skid - Rs .40/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Parking : 1/1<br/>Anti-Skid - Rs .45/-</td>
                <td className="p-6 text-center text-brand-black/80">Parking : 2/2<br/>Anti-Skid - Rs .55/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .40/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .50/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></td>
                <td className="p-6 text-center text-brand-black/80">Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .60/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Kitchen Counter Top :<br/>18mm Granite - Rs .110/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Kitchen Counter Top :<br/>18mm Granite - Rs .140/-</td>
                <td className="p-6 text-center text-brand-black/80">Kitchen Counter Top :<br/>18mm Granite - Rs .160/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 7 feet - Rs.40/-</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 10 feet - Rs.45/-</td>
                <td className="p-6 text-center text-brand-black/80">Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 10 feet - Rs.55/-</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Staircase : 1/1<br/>Tile Matte Finish</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Staircase :<br/>Granite Matte Finish</td>
                <td className="p-6 text-center text-brand-black/80">Staircase :<br/>Granite Matte Finish</td>
              </tr>

              {/* Plumbing */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Plumbing</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Pipes :<br/>PVC / UPVC / CPVC -<br/>Arasan & Prince</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Pipes :<br/>PVC / UPVC / CPVC -<br/>Finolex & Trubore</td>
                <td className="p-6 text-center text-brand-black/80">Pipes :<br/>PVC / UPVC / CPVC -<br/>Aashirvad & Finolex</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Bathroom Accessories :<br/>Cera <span className="text-sm opacity-75">( Equivalent Brand )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Bathroom Accessories :<br/>Parryware</td>
                <td className="p-6 text-center text-brand-black/80">Bathroom Accessories :<br/>Jaquar</td>
              </tr>

              {/* Electricals */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Electricals</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Wires:<br/>Kundan<span className="text-sm opacity-75">( Equivalent Brand )</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Wires:<br/>Finolex (S)</td>
                <td className="p-6 text-center text-brand-black/80">Wires:<br/>Finolex (G)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Switches :<br/>Goldmedal</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Switches :<br/>Lisha & Honeywell</td>
                <td className="p-6 text-center text-brand-black/80">Switches :<br/>Legrand & Honeywell</td>
              </tr>

              {/* Doors & Windows */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Doors & Windows</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Main Door: (Ghana)<br/>Teak Door With<br/>Teak Wood Frame</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Main Door: (Nigeria)<br/>Teak Door With<br/>Teak Wood Frame</td>
                <td className="p-6 text-center text-brand-black/80">Main Door: (M.Burma)<br/>Teak Door With<br/>Teak Wood Frame</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Internal Door:<br/>Membrane Door<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Vembu & Mahogany)</span></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Internal Door:<br/>Flush Door<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></td>
                <td className="p-6 text-center text-brand-black/80">Internal Door:<br/>Flush & HDHMR<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Window Frame :<br/>(Vembu & Mahogany)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Window Frame :<br/>(Nigeria Teak)</td>
                <td className="p-6 text-center text-brand-black/80">Window Frame :<br/>(Nigeria Teak)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Bathroom Doors :<br/>PVC</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Bathroom Doors :<br/>WPC</td>
                <td className="p-6 text-center text-brand-black/80">Bathroom Doors :<br/>WPC</td>
              </tr>

              {/* Painting */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Painting : ( Asian & Berger )</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left inline-block pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat Premium emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left inline-block pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Apex emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left inline-block pl-4"><li>Main Door :<br/>Melamine Polish</li><li>Internal Door & Frame :<br/>Enamel Paint</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left inline-block pl-4"><li>Main Door :<br/>Melamine Polish</li><li>Internal Door & Frame :<br/>Enamel Paint</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 text-sm align-top"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left inline-block pl-4"><li>Main Door :<br/>PU Polish</li><li>Internal Door & Frame :<br/>Melamine Polish</li></ul></td>
              </tr>

              {/* Other Inclusive */}
              <tr><td colSpan={3} className="bg-brand-black/10 font-bold p-4 text-center uppercase tracking-wider text-sm">Other Inclusive :</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Overhead Tank :<br/>1000 Litres</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Overhead Tank :<br/>1000 Litres</td>
                <td className="p-6 text-center text-brand-black/80">Overhead Tank :<br/>2000 Litres</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Parapet Wall :<br/>3 Feet Height</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Parapet Wall :<br/>3 Feet Height</td>
                <td className="p-6 text-center text-brand-black/80">Parapet Wall :<br/>3 Feet Height</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">Roof Tiles -<br/>(Terracotta)</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">Roof Tiles -<br/>(White)</td>
                <td className="p-6 text-center text-brand-black/80">Roof Tiles -<br/>(White)</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80">MS - Safety Grill Gate<br/>for main door</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80">MS - Safety Grill Gate<br/>For Main & Back Door</td>
                <td className="p-6 text-center text-brand-black/80">MS - Safety Grill Gate<br/>For Main & Back Door</td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top">Basement : Antitermite</td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top">Basement : Antitermite</td>
                <td className="p-6 text-center text-brand-black/80 align-top">Basement : Antitermite<br/>Bitumen Coat</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 space-y-6">
          <div className="p-6 bg-brand-black/5 border border-brand-black/10 rounded-xl text-left max-w-3xl mx-auto shadow-sm">
            <h4 className="font-bold mb-3 text-lg">Extra Charges :</h4>
            <ul className="list-disc pl-6 space-y-2 text-brand-black/80 font-medium">
              <li>Compound Wall</li>
              <li>Bore Well & EB Connections</li>
              <li>Plan Approval</li>
              <li>Underground Water Storage Sump</li>
              <li>Septic Tank</li>
              <li>Overhead RCC Water Tank</li>
              <li>Setback Work</li>
            </ul>
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
