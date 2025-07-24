/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router";
import { allRoutes } from "./routes/route";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {allRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
