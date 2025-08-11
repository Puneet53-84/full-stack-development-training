function BankDetailPage({ accountData }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col">
            <div className="flex justify-center items-center flex-grow p-4">
                <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                        Your Account Detail
                    </h2>
                    <table className="w-full bg-white border border-gray-300 rounded-xl shadow-lg">
                        <tbody>
                            <tr><td>Name</td><td>{accountData?.name || "N/A"}</td></tr>
                            <tr><td>Number</td><td>{accountData?.number || "N/A"}</td></tr>
                            <tr><td>Email</td><td>{accountData?.email || "N/A"}</td></tr>
                            <tr><td>Branch</td><td>{accountData?.branch || "Panipat"}</td></tr>
                            <tr><td>Balance</td><td>{accountData?.balance || "₹10,000"}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BankDetailPage;
