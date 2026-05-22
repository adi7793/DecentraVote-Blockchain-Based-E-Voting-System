function Dashboard() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Voting Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Candidate 1
          </h2>

          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            Vote
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Candidate 2
          </h2>

          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            Vote
          </button>
        </div>

      </div>
    </div>
  )
}

export default Dashboard