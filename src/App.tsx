import * as C from "./components";
import * as P from "./pages";
import { Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<C.Layout />}>
        <Route index element={<P.Home />} />
        <Route path="/character/:id" element={<P.CharacterDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
