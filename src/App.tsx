import Container from "Components/Container/Container";
import { lazy } from "react";

const HomePage = lazy(() => import("Pages/HomePage"));

function App() {
  return (
    <div className="App">
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
