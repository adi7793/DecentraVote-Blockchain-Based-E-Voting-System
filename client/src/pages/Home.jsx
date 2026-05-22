function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white flex flex-col items-center justify-center px-6">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-3xl text-center border border-white/20">

        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          DecentraVote
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          A secure blockchain-based electronic voting platform designed
          for transparent, tamper-proof and decentralized elections.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
          Connect Wallet
        </button>

      </div>

    </div>
  )
}

export default Home