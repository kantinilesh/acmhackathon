const PrizePool = () => {
  const prizes = [
    { place: '1st Place', amount: '₹50,000', color: 'text-yellow-400' },
    { place: '2nd Place', amount: '₹30,000', color: 'text-gray-300' },
    { place: '3rd Place', amount: '₹20,000', color: 'text-orange-400' },
  ];

  return (
    <section id="prizes" className="py-20 bg-gray-900 relative">
      <div className="absolute right-10 top-10 opacity-10">
        <img 
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_saul-goodman-lg.jpg"
          alt="Saul Goodman"
          className="w-24 h-36 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Prize <span className="text-green-400">Pool</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">₹1 Lakh+ worth of prizes and goodies</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-black border border-green-400/30 rounded-lg p-8 hover:border-green-400/50 transition-colors">
              <div className={`text-2xl font-bold mb-2 ${prize.color}`}>{prize.place}</div>
              <div className="text-3xl font-bold text-white mb-4">{prize.amount}</div>
              <div className="text-gray-400">+ Exclusive swag & goodies</div>
            </div>
          ))}
        </div>

        <div className="bg-black border border-green-400/30 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Additional Goodies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400">
            <div>Exclusive T-shirts</div>
            <div>Stickers & Badges</div>
            <div>Tech Gadgets</div>
            <div>Gift Vouchers</div>
            <div>Mentorship Sessions</div>
            <div>Internship Offers</div>
            <div>API Credits</div>
            <div>Cloud Credits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;