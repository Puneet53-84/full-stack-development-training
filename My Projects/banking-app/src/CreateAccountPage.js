function CreateAccountPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full">
                <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
                    Create Your Bank Account
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Mobile Number:</label>
                        <input
                            type="number"
                            placeholder="Enter Your Mobile Number"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Select Branch:</label>
                        <select
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="">Select Your Bank Branch</option>
                            <option value="Rohtak">Rohtak</option>
                            <option value="Panipat">Panipat</option>
                            <option value="Karnal">Karnal</option>
                            <option value="Bhiwani">Bhiwani</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gurugram">Gurugram</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter unique Password"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateAccountPage;
