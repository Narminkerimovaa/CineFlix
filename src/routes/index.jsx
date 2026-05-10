import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./../shared/components/Layout";
import { PATHS } from "./../shared/constants/path";

import Home from "./../feature/Home";
import WatchList from "./../feature/WatchList";
import ClassicsPage from "./../feature/ClassicsPage";
import EarlyEraPage from "./../feature/ClassicsPage/EarlyEraPage";
import LateEraPage from "./../feature/ClassicsPage/LateEraPage";
import ModernPage from "./../feature/ModernPage";
import NotFound from "./../feature/NotFound";
import DetailPage from "./../feature/DetailPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.watchlist} element={<WatchList />} />

          <Route path={PATHS.classics} element={<ClassicsPage />}>
            <Route path={PATHS.earlyEra} element={<EarlyEraPage />} />
            <Route path={PATHS.lateEra} element={<LateEraPage />} />
          </Route>

          <Route path={PATHS.modern} element={<ModernPage />} />
          <Route path={PATHS.detail} element={<DetailPage />} />
          <Route path={PATHS.notFound} element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
