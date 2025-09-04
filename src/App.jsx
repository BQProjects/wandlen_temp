import "./App.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DatabaseProvider } from "./contexts/DatabaseContext";
import { StateManagementProvider } from "./contexts/StateManagementContext";
import { router } from "./routing/router";

function App() {
  return (
    <DatabaseProvider>
      <AuthProvider>
        <StateManagementProvider>
          <RouterProvider router={router} />
        </StateManagementProvider>
      </AuthProvider>
    </DatabaseProvider>
  );
}

export default App;
