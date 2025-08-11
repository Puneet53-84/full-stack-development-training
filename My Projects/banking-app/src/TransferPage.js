import { useState } from "react";

function TransferPage() {
    let [formData, setFormData] = useState({
        fromAccount: "12313231XXXX",
        toAccount: "",
        amount: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Transfer Successful! Data: " + JSON.stringify(formData));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col">

            {/* Outer Box */}
            <div className="flex justify-center items-center flex-grow p-6">
                <div className="bg-white shadow-2xl rounded-lg p-8 max-w-xl w-full border border-gray-300">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                        Transfer Money Between Accounts
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* From Account */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                From Account
                            </label>
                            <input
                                type="number"
                                name="fromAccount"
                                value={formData.fromAccount}
                                onChange={handleChange}
                                disabled
                                placeholder="Enter Your Account No."
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        {/* To Account */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                To Account
                            </label>
                            <input
                                type="number"
                                name="toAccount"
                                value={formData.toAccount}
                                onChange={handleChange}
                                placeholder="Enter Receiver's Account No."
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        {/* Amount */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="Enter Amount to Send"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md 
                            hover:bg-indigo-700 transition transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TransferPage;
