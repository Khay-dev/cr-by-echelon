import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/layout/home/Home';
import Gallery from './components/layout/Gallery/Gallery';
import Contact from './components/layout/Contact/Contact';
import Apartment from './components/layout/Apartments/Apartment';
import ScrollToTop from './components/layout/ScrollToTop';



function App() {
  return (
    < Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Home />
          </Route>
          <Route path="/gallery">
            <ScrollToTop />
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Apartment">
            <ScrollToTop />
            <Apartment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
