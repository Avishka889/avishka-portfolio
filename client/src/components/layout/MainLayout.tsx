import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;