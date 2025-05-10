import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteGuard from "./routes";
import publicRoutes from "./publicRoutes";
import { Fragment, Suspense } from "react";
import DefaultLayout from "../layouts";

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map(
            (route, index) => {
              const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <RouteGuard requiresAuth={route.requiresAuth}>
                      <Layout>
                        <route.component />
                      </Layout>
                    </RouteGuard>
                  }
                />
              );
            },
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;