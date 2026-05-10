import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./../shared/components/Layout";

import Home from "./../feature/Home";
import WatchList from "./../feature/WatchList";
import ClassicsPage from "./../feature/ClassicsPage";
import EarlyEraPage from "./../feature/EarlyEraPage";
import LateEraPage from "./../feature/LateEraPage";
import ModernPage from "./../feature/ModernPage";
import NotFound from "./../feature/NotFound";
import DetailPage from './../feature/DetailPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />

          <Route path="/classics">
            <Route index element={<ClassicsPage />} />
            <Route path="1950-1975" element={<EarlyEraPage />} />
            <Route path="1975-2000" element={<LateEraPage />} />
          </Route>

          <Route path="/modern" element={<ModernPage />} />
          <Route path="/movies/:id" element={<DetailPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
