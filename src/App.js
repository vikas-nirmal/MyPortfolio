import './App.css';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/productList';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
    <Intro />
    <About />
    <ProductList />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
