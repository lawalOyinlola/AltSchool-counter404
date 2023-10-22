import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import MyErrorBoundary from "./components/error";
import Counter from "./components/counter";
import NotFound from "./components/notfound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={MyErrorBoundary}>
        <Counter />
      </ErrorBoundary>
    ),
  },
  {
    path: "/error",
    element: <MyErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
