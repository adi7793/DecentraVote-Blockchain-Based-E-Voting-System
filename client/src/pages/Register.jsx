function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-blue-700 text-white p-3 rounded-lg">
          Register
        </button>

      </div>
    </div>
  )
}

export default Register