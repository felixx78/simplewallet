import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSeed } from "../contexts/SeedContext";

function MainLayout() {
  const seed = useSeed();
  const location = useLocation();

  const ignorePaths = ["/welcome", "/wallet/import", "/wallet/create"];
  if (!seed.seed && !ignorePaths.includes(location.pathname)) {
    return <Navigate to="/welcome" />;
  }

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
