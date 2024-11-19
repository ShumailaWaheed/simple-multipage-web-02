import Topbar from "@/Components/Topbar";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import About from "@/Components/about";
import Promotion from "@/Components/Promotion";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Promotion />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
