import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { HomePage } from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
