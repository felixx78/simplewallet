import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-background min-h-screen text-copy-light"
    >
      <Outlet />
    </main>
  );
}
export default MainLayout;
