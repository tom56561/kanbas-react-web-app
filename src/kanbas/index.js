import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div class="flex-fill" style={{marginLeft: '100px'}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
        </Routes>

      </div>
    </div>
  );
}
export default Kanbas;