import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountPage({ setIsLogin, setAccountData }) {
    const navigate = useNavigate();
    let [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: ""
    });
    let [showPassword, setShowPassword] = useState(false);

    function handleChange(e) {
        let { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Perfect! Your Account Has Been Created");
        setAccountData(formData);
        setIsLogin(true);
        navigate('/bank-details');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-0">
            <div className="flex justify-center items-center p-4">
                <div className="bg-white p-6 mt-6 rounded-xl shadow-xl max-w-md w-full border border-gray-200">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                        Create Your Bank Account
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Name</label>
                            <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
                            <input type="number" placeholder="Enter your mobile no." name="number" value={formData.number} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2" />
                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                                    {showPassword ? "🙈" : "👁️"}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccountPage;
