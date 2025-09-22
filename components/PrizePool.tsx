const PrizePool = () => {
  return (
    <section id="prizes" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://c4.wallpaperflare.com/wallpaper/978/149/181/breaking-bad-bryan-cranston-money-walter-white-wallpaper-preview.jpg" 
          alt="Breaking Bad Lab Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

      {/* Chemical Equipment Decorations */}
      <div className="absolute left-12 top-12 opacity-30">
        <img 
          src="https://img.icons8.com/color/96/000000/test-tube.png"
          alt="Chemical Beaker"
          className="w-20 h-20"
        />
      </div>
      <div className="absolute right-12 bottom-12 opacity-30">
        <img 
          src="https://img.icons8.com/color/96/000000/test-tube.png"
          alt="Test Tube"
          className="w-20 h-20"
        />
      </div>

      {/* Saul Goodman Image */}
      <div className="absolute right-10 top-10 opacity-20">
        <img 
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_saul-goodman-lg.jpg"
          alt="Saul Goodman"
          className="w-24 h-36 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Gift</span>
          <span className="text-green-400 animate-pulse"> Pool</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">Gifts worth ₹1,00,000+ and goodies</p>

        <div className="bg-black/60 border border-green-400/60 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-white">Sponsored By</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="text-gray-300 text-lg">Unstop</div>
              <div className="w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <img 
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Large.png" 
                  alt="Unstop Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-gray-300 text-lg">InterviewBit</div>
              <div className="w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <img 
                  src="/ib.png" 
                  alt="Unstop Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            {/* Placeholder for future sponsors */}
 <div className="flex flex-col items-center gap-2">
              <div className="text-gray-300 text-lg">SpazorLabs</div>
              <div className="w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <img 
                  src="/Spazor.png" 
                  alt="Unstop Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-gray-300 text-lg">Future Sponsor</div>
              <div className="w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Coming Soon</span>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-6">Proud partner powering the Hackathon</p>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;