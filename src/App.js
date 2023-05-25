
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import LandingPage from "./LandingPage";
import RegisterPage from "./pages/RegisterPage";
// import Update from "./pages/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={ <LandingPage />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
          {/* <Route path="/delete" element={<Delete/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;