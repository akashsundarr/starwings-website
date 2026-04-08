import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* Fixes navbar overlap globally */}
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;