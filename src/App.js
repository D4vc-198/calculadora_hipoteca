import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}></Container>
    </div>
  );
}

export default App;
