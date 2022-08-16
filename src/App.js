import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
