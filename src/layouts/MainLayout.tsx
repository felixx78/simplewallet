import { Navigate, Outlet } from "react-router-dom";

function MainLayout() {
  const seed = localStorage.getItem("seed");

  if (!seed) return <Navigate to="/auth" />;

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
