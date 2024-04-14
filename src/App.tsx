import { Route, Routes } from "react-router";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
    </Routes>
  );
}

export default App;
