const Tracks = () => {
  const tracks = [
    {
      emoji: '🧪',
      title: 'Desi Disruptors',
      description: 'Design scalable, affordable solutions tailored for India\'s unique challenges.',
      color: 'border-blue-400/30 hover:border-blue-400/50'
    },
    {
      emoji: '💰',
      title: 'Future of Finance',
      description: 'Reimagine payments, blockchain, and financial inclusion.',
      color: 'border-yellow-400/30 hover:border-yellow-400/50'
    },
    {
      emoji: '🏥',
      title: 'Health Hackers',
      description: 'Revolutionize healthcare with diagnosis, accessibility, or patient care.',
      color: 'border-red-400/30 hover:border-red-400/50'
    },
    {
      emoji: '🌍',
      title: 'Green Tech Genesis',
      description: 'Build sustainable tech for climate, waste reduction, and the planet.',
      color: 'border-green-400/30 hover:border-green-400/50'
    },
    {
      emoji: '🎮',
      title: 'Next Level Gaming',
      description: 'Push the future of gaming, graphics, and interaction.',
      color: 'border-purple-400/30 hover:border-purple-400/50'
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-black relative">
      <div className="absolute left-10 bottom-10 opacity-10">
        <img 
          src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_hank-schrader-lg.jpg"
          alt="Hank Schrader"
          className="w-24 h-36 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hack <span className="text-green-400">Tracks</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose your path to innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className={`bg-gray-900 border ${track.color} rounded-lg p-8 transition-all hover:scale-105`}>
              <div className="text-4xl mb-4">{track.emoji}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{track.title}</h3>
              <p className="text-gray-400 leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;