function Login() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black flex justify-center items-center px-6">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 mb-5 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 mb-6 outline-none"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white p-4 rounded-xl font-semibold">
          Login
        </button>

      </div>

    </div>
  )
}

export default Login