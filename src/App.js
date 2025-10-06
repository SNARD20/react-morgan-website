// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';

import Home from './Pages/Home';

// import { ReactDOM } from 'react';
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/Blogs"  component={Blogs} />
          <Route path="/Services" component={Services} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
