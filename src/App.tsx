import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate/HomeTemplate";
import ErrorTemplate from "Templates/ErrorTemplate/ErrorTemplate";

const HomePage = lazy(() => import("Pages/HomePage/HomePage"));
const ErrorPage = lazy(() => import("Pages/ErrorPage/ErrorPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/404" element={<ErrorTemplate />}>
            <Route index element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
