import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Converter from '../components/Converter';
import '../styles/App.css'


function App() {
  return (
    
    <div className="background">
      <Head />
      <Header />
      <Converter />
      <Footer />
    </div>
    
  );
}

export default App;
