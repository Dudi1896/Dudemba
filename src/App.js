import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Body from "./Components/Body";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
