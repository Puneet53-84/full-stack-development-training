import { Link } from 'react-router-dom'

function Header2() {
    
        return (
        <header className="flex justify-between items-center bg-red-300 p-4 text-xl shadow-md"> {/* ======= Page Header (Always on Top) ======= */}
            
            
            {/* Left Side - Home Button */}
            <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">
                Home
            </button>

            {/* Right Side - Navigation */}
            <nav className="flex gap-4">
                <Link to="/bank-details">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">
                    Bank Detail
                </button>
                </Link>
                <Link to="/transfer">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">
                    Transfer
                </button>
                </Link>
                <Link to="/transactions ">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">
                    Transaction
                </button>
                </Link>
                <Link to="/logout">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">
                    Logout
                </button>
                </Link>
            </nav>
        </header>
        );
}

export default Header2;

