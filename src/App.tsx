import { Router } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
}

export default App;
