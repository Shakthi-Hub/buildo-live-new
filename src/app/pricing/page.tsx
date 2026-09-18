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

        <div className="overflow-hidden border border-brand-black/10 rounded-2xl shadow-sm bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-black text-brand-white">
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/3">Basic<div className="text-brand-orange text-sm font-normal mt-1">₹2400 / sqft</div></th>
                <th className="p-6 text-xl font-bold text-center border-r border-brand-white/10 w-1/3 bg-brand-orange/10 text-brand-white relative">
                  <span className="absolute top-0 right-0 bg-brand-orange text-brand-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</span>
                  Standard
                  <div className="text-brand-orange text-sm font-normal mt-1">₹2700 / sqft</div>
                </th>
                <th className="p-6 text-xl font-bold text-center w-1/3">
                  Premium
                  <div className="text-brand-orange text-sm font-normal mt-1">₹3000 / sqft</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-black/10">

              <tr><td colSpan={3} className="bg-brand-black/5 font-semibold p-3 text-center text-brand-black/80 text-sm">Price may vary depending on no.of floors</td></tr>

              {/* Design & Drawings */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Design & Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Architectural Floor Plans</li><li>Elevation</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Architectural Floor Plans</li><li>Elevation</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Architectural Floor Plans</li><li>Elevation</li><li>3D Visualization</li><li>Electrical / Plumbing Drawing</li></ul></td>
              </tr>
              
              {/* Structural Drawings */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Structural Drawings</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basic Structural Drawing</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Footing / Column / Beam Drawing</li><li>Other Element Detail Drawings</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Footing / Column / Beam Drawing</li><li>Other Element Detail Drawings</li></ul></td>
              </tr>

              {/* Structures */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Structures</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement Height<br/>Upto 3 Feet</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement Height<br/>Upto 4 Feet</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement Height<br/>Upto 5 Feet</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Ceiling Height<br/>Upto 10 feet</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Ceiling Height<br/>Upto 10 feet</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Ceiling Height<br/>Upto 10 feet</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Steel : DSRM<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Steel : VIZAG<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Steel : TATA & JSW<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Cement : Chettinad<br/><span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Cement : Ramco &<br/>Ultratech</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Cement : Dalmia &<br/>Ultratech</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Brick : Hand Mould<br/><span className="text-sm opacity-75">( Red brick )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Brick : Wirecut<br/><span className="text-sm opacity-75">( Red brick )</span></li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Brick : Wirecut<br/><span className="text-sm opacity-75">( Red brick )</span></li></ul></td>
              </tr>

              {/* Tiles */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Tiles : ( Flooring & Wall )</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Flooring : 2/2<br/>Vitrified Tiles - Rs .50/-</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Flooring : 4/2<br/>Vitrified Tiles - Rs .60/-</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Flooring : 4/2 or 5.3/2.9<br/>Vitrified Tiles - Rs .85/-</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parking : 1/1<br/>Anti-Skid - Rs .40/-</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parking : 1/1<br/>Anti-Skid - Rs .45/-</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parking : 2/2<br/>Anti-Skid - Rs .55/-</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .40/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .50/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Wall Tiles :<br/>Vitrified Tiles - Rs .60/-<br/><span className="text-sm opacity-75">( 4 feet above counter top )</span></li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Counter Top :<br/>18mm Granite - Rs .110/-</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Counter Top :<br/>18mm Granite - Rs .140/-</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Kitchen Counter Top :<br/>18mm Granite - Rs .160/-</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 7 feet - Rs.40/-</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 10 feet - Rs.45/-</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom <span className="text-sm opacity-75">( Wall & Floor )</span> :<br/>Upto 10 feet - Rs.55/-</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Staircase : 1/1<br/>Tile Matte Finish</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Staircase :<br/>Granite Matte Finish</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Staircase :<br/>Granite Matte Finish</li></ul></td>
              </tr>

              {/* Plumbing */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Plumbing</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Pipes :<br/>PVC / UPVC / CPVC -<br/>Arasan & Prince</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Pipes :<br/>PVC / UPVC / CPVC -<br/>Finolex & Trubore</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Pipes :<br/>PVC / UPVC / CPVC -<br/>Aashirvad & Finolex</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Accessories :<br/>Cera <span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Accessories :<br/>Parryware</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Accessories :<br/>Jaquar</li></ul></td>
              </tr>

              {/* Electricals */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Electricals</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Wires:<br/>Kundan<span className="text-sm opacity-75">( Equivalent Brand )</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Wires:<br/>Finolex (S)</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Wires:<br/>Finolex (G)</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Switches :<br/>Goldmedal</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Switches :<br/>Lisha & Honeywell</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Switches :<br/>Legrand & Honeywell</li></ul></td>
              </tr>

              {/* Doors & Windows */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Doors & Windows</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Main Door: (Ghana)<br/>Teak Door With<br/>Teak Wood Frame</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Main Door: (Nigeria)<br/>Teak Door With<br/>Teak Wood Frame</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Main Door: (M.Burma)<br/>Teak Door With<br/>Teak Wood Frame</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Internal Door:<br/>Membrane Door<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Vembu & Mahogany)</span></li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Internal Door:<br/>Flush Door<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Internal Door:<br/>Flush & HDHMR<br/>With Wood Frame<br/><span className="text-sm opacity-75">(Nigeria Teak)</span></li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Window Frame :<br/>(Vembu & Mahogany)</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Window Frame :<br/>(Nigeria Teak)</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Window Frame :<br/>(Nigeria Teak)</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Doors :<br/>PVC</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Doors :<br/>WPC</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Bathroom Doors :<br/>WPC</li></ul></td>
              </tr>

              {/* Painting */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Painting : ( Asian & Berger )</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat tractor emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Interior :</div><ul className="list-disc text-left pl-4"><li>2 coat wall putty</li><li>1 coat primer</li><li>2 coat Premium emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Ace emulsion</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Exterior :</div><ul className="list-disc text-left pl-4"><li>1 coat White Wash</li><li>1 coat primer</li><li>2 coat Apex emulsion</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left pl-4"><li>Main Door :<br/>Melamine Polish</li><li>Internal Door & Frame :<br/>Enamel Paint</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left pl-4"><li>Main Door :<br/>Melamine Polish</li><li>Internal Door & Frame :<br/>Enamel Paint</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><div className="font-semibold mb-2">Doors & Windows :</div><ul className="list-disc text-left pl-4"><li>Main Door :<br/>PU Polish</li><li>Internal Door & Frame :<br/>Melamine Polish</li></ul></td>
              </tr>

              {/* Other Inclusive */}
              <tr><td colSpan={3} className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Other Inclusive :</td></tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Overhead Tank :<br/>1000 Litres</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Overhead Tank :<br/>1000 Litres</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Overhead Tank :<br/>2000 Litres</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parapet Wall :<br/>3 Feet Height</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parapet Wall :<br/>3 Feet Height</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Parapet Wall :<br/>3 Feet Height</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Roof Tiles -<br/>(Terracotta)</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Roof Tiles -<br/>(White)</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Roof Tiles -<br/>(White)</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>MS - Safety Grill Gate<br/>for main door</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>MS - Safety Grill Gate<br/>For Main & Back Door</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>MS - Safety Grill Gate<br/>For Main & Back Door</li></ul></td>
              </tr>
              <tr className="hover:bg-brand-black/5">
                <td className="p-6 text-center border-x border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement : Antitermite</li></ul></td>
                <td className="p-6 text-center border-r border-brand-black/10 text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement : Antitermite</li></ul></td>
                <td className="p-6 text-center text-brand-black/80 align-top text-base md:text-lg"><ul className="list-disc text-left pl-4"><li>Basement : Antitermite<br/>Bitumen Coat</li></ul></td>
              </tr>
            </tbody>
          </table>
        </div>

          <div className="border-t border-brand-black/10 text-left">
            <h4 className="bg-[#e39c4a] font-bold p-4 text-center uppercase tracking-wider text-base md:text-xl text-brand-black">Extra Charges :</h4>
            <ul className="list-disc pl-10 pr-6 text-brand-black/80 font-medium text-base md:text-lg">
              <li className="py-3 md:py-5 border-b border-brand-black/10">Compound Wall</li>
              <li className="py-3 md:py-5 border-b border-brand-black/10">Bore Well & EB Connections</li>
              <li className="py-3 md:py-5 border-b border-brand-black/10">Plan Approval</li>
              <li className="py-3 md:py-5 border-b border-brand-black/10">Underground Water Storage Sump</li>
              <li className="py-3 md:py-5 border-b border-brand-black/10">Septic Tank</li>
              <li className="py-3 md:py-5 border-b border-brand-black/10">Overhead RCC Water Tank</li>
              <li className="py-3 md:py-5">Setback Work</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
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
