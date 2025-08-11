function TransactionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center">

            {/* Outer Box with Gap */}
            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-5xl w-full border border-gray-300 mb-6 mt-6">
                <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                    Your Bank Transactions
                </h2>

                {/* Styled Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">S.No.</th>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Amount</th>
                                <th className="py-3 px-4 text-left">Transfer Type</th>
                                <th className="py-3 px-4 text-left">Account No.</th>
                                <th className="py-3 px-4 text-left">Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition">
                                <td className="py-2 px-4">1</td>
                                <td className="py-2 px-4">10-08-2025</td>
                                <td className="py-2 px-4">₹5000</td>
                                <td className="py-2 px-4">Credit</td>
                                <td className="py-2 px-4">1234567890</td>
                                <td className="py-2 px-4">TXN001</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="py-2 px-4">2</td>
                                <td className="py-2 px-4">09-08-2025</td>
                                <td className="py-2 px-4">₹2000</td>
                                <td className="py-2 px-4">Debit</td>
                                <td className="py-2 px-4">9876543210</td>
                                <td className="py-2 px-4">TXN002</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionPage;
