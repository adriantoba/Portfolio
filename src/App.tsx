import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div id="root" className="font-poppins">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
