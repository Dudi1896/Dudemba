import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";


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
