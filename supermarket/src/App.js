import "./App.css";
import LoginScreen from "./component/LoginScreen";
import RegisterScreen from "./component/RegisterScreen";
import ResetPassScreen from "./component/ResetPassScreen";
// import CategoryDetail from "./component/CategoryDetail";
// import Categories from "./component/Categories";
import Main from "./component/Main";
// import NavBar from "./component/Main/NavBar";
// import Footer from "./component/Main/Footer";
import { Route, Routes } from "react-router-dom";
import React from "react";

const userContext = React.createContext();

function App() {
  return (
    <userContext.Provider value={{ login: false }}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgot-password" element={<ResetPassScreen />} />
          {/* <Route path="/cart" element={<RegisterScreen />} /> */}
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
