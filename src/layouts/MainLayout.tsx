import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-background min-h-screen text-copy-light px-3 sm:px-4 md:px-0"
    >
      <div className="max-w-[450px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
