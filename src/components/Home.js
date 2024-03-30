import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import Divider from "@material-ui/core/Divider";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Divider />
    </>
  );
}
