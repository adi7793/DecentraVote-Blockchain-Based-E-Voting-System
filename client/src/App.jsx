function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-blue-700 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold">
          DecentraVote
        </h1>
      </nav>

      <div className="flex flex-col items-center justify-center mt-20">

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Blockchain Based E-Voting System
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Secure • Transparent • Tamper-Proof
        </p>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          Connect Wallet
        </button>

      </div>
    </div>
  )
}

export default App