import { useNavigate } from "react-router-dom";

function LogoutPage({ setIsLogin, setAccountData }) {
    const navigate = useNavigate();
    function handleLogout() {
        setIsLogin(false);
        setAccountData(null);
        navigate("/");
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Logout Your Bank Account</h2>
                <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleLogout}>
                    Confirm Logout
                </button>
            </div>
        </div>
    );
}

export default LogoutPage;
