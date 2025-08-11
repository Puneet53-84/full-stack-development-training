import { Link } from 'react-router-dom'

function Header1() {
    return (
        <header className="flex justify-between items-center bg-red-300 p-4 text-xl">
            {/* Left Side - Home Button */}
            
            <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Home</button>
            
            {/* Right Side - Create Account & Login */}
            <nav className="flex gap-4">
                <Link to="/create-account">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Create Account</button>
                </Link>
                <Link to="/login">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Login</button>
                </Link>
            </nav>
        </header>
    );
}

export default Header1;


