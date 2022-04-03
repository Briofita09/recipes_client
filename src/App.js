import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./RouteComponents/Home";
import Login from "./RouteComponents/Login";
import AllRecipes from "./RouteComponents/AllRecipes";
import AdminRecipes from "./RouteComponents/AdminRecipes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-recipes" element={<AdminRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
