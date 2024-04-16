import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./pages/Welcome";
import CreateAndImport from "./pages/CreateAndImport";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/wallet/import" element={<CreateAndImport />} />
        <Route
          path="/wallet/create"
          element={<CreateAndImport create={true} />}
        />
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
