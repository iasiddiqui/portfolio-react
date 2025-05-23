import Header from "./components/header/Header";
import Home from "./components/Home";
import About from "./components/About-me/About";
import Contact from "./components/Contact";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Toaster } from "react-hot-toast";

// blue => 3B82F6
// dark bg => 001220
// footerBg => 594a4a
// SideBg => fa523c
// about => efe4e4

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Home />
        {/* <Marquee /> */}
        <About />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
