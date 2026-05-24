import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  async function fetchCandidates() {

    try {

      const response = await axios.get(
        "http://localhost:8000/candidates"
      );

      setCandidates(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Voting Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {candidates.map((candidate) => (

          <div
            key={candidate.id}
            className="bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl"
          >

            <h2 className="text-3xl font-bold mb-4">
              {candidate.name}
            </h2>

            <p className="text-gray-300 mb-6">
              {candidate.party}
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
              Vote
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;