import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSeed } from "../contexts/SeedContext";

function MainLayout() {
  const seed = useSeed();
  const location = useLocation();

  const ignorePaths = [
    "/welcome",
    "/wallet/import",
    "/wallet/create",
    "/login",
  ];
  if (!seed.seed && !ignorePaths.includes(location.pathname)) {
    if (localStorage.getItem("seed") && localStorage.getItem("password")) {
      return <Navigate to="/login" />;
    }
    return <Navigate to="/welcome" />;
  }

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-background min-h-screen text-copy-light px-3 sm:px-4 md:px-0"
    >
      <Outlet />
    </main>
  );
}
export default MainLayout;
