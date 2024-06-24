import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./route/PrivateRoutes";

const TodoList = lazy(() => import("./pages/TodoList"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/todo" element={<TodoList />} exact />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
