import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsLogin, setAccountData }) {
    const navigate = useNavigate();
    let [formData, setFormData] = useState({ mobile: "", password: "" });
    let [showPassword, setShowPassword] = useState(false);

    function handleChange(e) {
        let { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Login Successful!");
        setAccountData({ name: "User", number: formData.mobile, branch: "Main", balance: "₹10,000" });
        setIsLogin(true);
        navigate('/bank-details');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col">
            <div className="flex justify-center items-center flex-grow p-4">
                <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Login To Your Bank Account</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Mobile Number:</label>
                            <input type="number" placeholder="Enter your mobile no." name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Password:</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2 pr-10" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center cursor-pointer">{showPassword ? "Hide" : "Show"}</span>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
