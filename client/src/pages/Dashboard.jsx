function Dashboard() {
  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-12">
        Voting Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Candidate 1
          </h2>

          <p className="text-gray-300 mb-6">
            Blockchain Security Advocate
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
            Vote
          </button>

        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Candidate 2
          </h2>

          <p className="text-gray-300 mb-6">
            Decentralized Governance Expert
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
            Vote
          </button>

        </div>

      </div>

    </div>
  )
}

export default Dashboard