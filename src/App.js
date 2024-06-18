import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const TodoList = lazy(() => import("./pages/TodoList"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>waitting for server responsor...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route element={<TodoList />} path="/todo" exact />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
