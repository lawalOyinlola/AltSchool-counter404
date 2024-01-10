import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import HomePage from "./components/homepage";
import Counter from "./components/counter";
import MyErrorBoundary from "./components/error";
import NotFound from "./components/notfound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={MyErrorBoundary}>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/counter",
    element: (
      <ErrorBoundary FallbackComponent={MyErrorBoundary}>
        <Counter />
      </ErrorBoundary>
    ),
  },
  {
    path: "/error",
    element: (
      <ErrorBoundary FallbackComponent={MyErrorBoundary}>
        <MyErrorBoundary />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary FallbackComponent={MyErrorBoundary}>
        <NotFound />
      </ErrorBoundary>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
