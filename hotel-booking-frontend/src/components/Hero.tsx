import { Search, Calendar, Users } from "lucide-react";
import destiny from "../../public/Destiny DreamZ Villa.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* Background Image */}
      <img
        src="/Boatel%20Front%20View.jpeg"
        alt="Estuary Dreamz Boatel waterfront"
        className="absolute inset-0 w-full h-full object-cover opacity-86 mix-blend-overlay blur-sm"
        aria-hidden
      />

      {/* Floating promo card */}
      <a
        href="https://destiny-dream-z-villa.vercel.app/" 
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-2 top-2 flex flex-col items-center rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-none text-center z-20 bg-transparent cursor-pointer"
      >
        <h4 className="text-[9px] sm:text-sm text-[#c8b39d] italic font-light leading-tight">
          Visit Our Another Hotel
        </h4>

        <img src={destiny} alt="Destiny DreamZ Villa"
          className="w-14 h-10 sm:w-20 sm:h-16 md:w-28 md:h-18 mt-2 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>



      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-black/0" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />

      {/* Hero Text and Features */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 relative z-10 mt-20 sm:mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="">
            <h1 className="text-3xl bg-white/8 backdrop-blur-sm rounded-xl md:text-6xl font-light text-slate-800 leading-tight tracking-tight p-4">
              Welcome to Estuary Dreamz BOATEL
            </h1>
            <span className="text-2xl md:text-4xl block italic text-[#F8F3D9] my-6">
              Puducherry's Unique Water-front Boatel. Book Now!
            </span>
          </div>


          {/* Feature Icons */}
          {/* <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 my-4 md:my-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg ring-1 ring-indigo-500/20 min-w-[150px] justify-center">
              <Search className="w-5 h-5 text-[#c8b39d] mr-2 shrink-0" />
              <span className="text-white/90 font-light text-xs sm:text-base">
                Smart Search
              </span>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg ring-1 ring-indigo-500/20 min-w-[150px] justify-center">
              <Calendar className="w-5 h-5 text-[#c8b39d] mr-2 shrink-0" />
              <span className="text-white/90 font-light text-xs sm:text-base">
                Flexible Booking
              </span>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg ring-1 ring-indigo-500/20 min-w-[150px] justify-center">
              <Users className="w-5 h-5 text-[#c8b39d] mr-2 shrink-0" />
              <span className="text-white/90 font-light text-xs sm:text-base">
                24/7 Support
              </span>
            </div>
          </div> */}
        </div>

        {/* Why Stay Section */}
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4">
  <div className="p-6 grid lg:grid-cols-4 md:grid-cols-2 gap-8 sm:gap-16">
    
    {/* 1. Beach Walks & Relaxation */}
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#254D70] via-[#4db6ac] to-[#EFE4D2] text-[#f5f5f5] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
      {/* Icon: Waves */}
      <span className="text-4xl mb-3">🏖️</span>
      <span className="font-light text-lg mb-4 text-slate-900">Beach Walks & Relaxation</span>
      <span className="text-gray-600">Enjoy long shoreline walks, gentle waves, and peaceful coastal vibes.</span>
    </div>

    {/* 2. Swimming & Beach Games */}
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#254D70] via-[#4db6ac] to-[#EFE4D2] text-[#f5f5f5] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
      {/* Icon: Person Swimming */}
      <span className="text-4xl mb-3">🏊‍♂️</span> {/* Swimming */}
      <span className="font-light text-lg mb-4 text-slate-900">Swimming & Beach Games</span>
      <span className="text-gray-600">Perfect for family fun or casual play in shallow waters.</span>
    </div>

    {/* 3. Observe Traditional Fishing */}
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#254D70] via-[#4db6ac] to-[#EFE4D2] text-[#f5f5f5] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
      {/* Icon: Fish Hook */}
      <span className="text-4xl mb-3">🎣</span>  {/* Fishing */}
      <span className="font-light text-lg mb-4 text-slate-900">Observe Traditional Fishing</span>
      <span className="text-gray-600">Watch local fishermen using age-old netting techniques — a cultural delight.</span>
    </div>

    {/* 4. Photography & Sunset Views */}
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#254D70] via-[#4db6ac] to-[#EFE4D2] text-[#f5f5f5] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
      {/* Icon: Camera */}
      <span className="text-4xl mb-3">📸</span>  {/* Photography */}
      <span className="font-light text-lg mb-4 text-slate-900">Photography & Sunset Views</span>
      <span className="text-gray-600">Capture golden sunsets, reflections, and serene coastal moments.</span>
    </div>
  </div>
</section>

      </div>
    </section>
  );
};

export default Hero;
