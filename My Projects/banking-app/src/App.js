import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header1 from "./Header1";
import HomePage from "./HomePage";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import Header2 from "./Header2";
import BankDetailPage from "./BankDetailPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";
import LogoutPage from "./LogoutPage";
import Footer from "./Footer";

function App() {
  let [isLogin, setIsLogin] = useState(false);
  let [accountData, setAccountData] = useState(null);

  return (
    <BrowserRouter>
      {isLogin ? <Header2 /> : <Header1 />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create-account"
          element={<CreateAccountPage setIsLogin={setIsLogin} setAccountData={setAccountData} />}
        />
        <Route
          path="/login"
          element={<LoginPage setIsLogin={setIsLogin} setAccountData={setAccountData} />}
        />
        <Route
          path="/bank-details"
          element={<BankDetailPage accountData={accountData} />}
        />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route
          path="/logout"
          element={<LogoutPage setIsLogin={setIsLogin} setAccountData={setAccountData} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
