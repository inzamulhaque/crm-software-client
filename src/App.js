import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddLead from "./componets/leades/AddLead";
import Home from "./Pages/Home";
import Leads from "./Pages/Leads.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/addlead" element={<AddLead />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
