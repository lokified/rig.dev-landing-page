import "./App.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Usage } from "./components/Usage";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Usage />
      <Features />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
