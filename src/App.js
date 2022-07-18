import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Footer from './containers/footer/Footer';
import Header from './containers/Header/Header';
import Skills from './containers/Skills/Skills';
import Testimonial from './containers/testimonial/Testimonial';
import Work from './containers/Work/Work';
import "./App.css";
//import About from './containers/About/About';
//import About from './containers/About/About';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
