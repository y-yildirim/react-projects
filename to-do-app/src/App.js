import './App.css';
import "./assets/layout.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
