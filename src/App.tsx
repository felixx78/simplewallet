import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
