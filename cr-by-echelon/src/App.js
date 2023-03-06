import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/layout/home/Home';
import Gallery from './components/layout/Gallery/Gallery';
import Contact from './components/layout/Contact/Contact';
import Apartment from './components/layout/Apartments/Apartment';
import ScrollToTop from './components/layout/ScrollToTop';
import Junior from "./components/layout/Junior/Junior"
import Executive from './components/layout/Executive/Executive';
import Presidential from './components/layout/Presidential/Presidential';
import Orthodox from './components/layout/Orthodox/Orthodox';
import Imperial from './components/layout/Imperial/Imperial';


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
          <Route path="/Junior">
            <ScrollToTop />
            <Junior />
          </Route>
          <Route path="/Executive">
            <ScrollToTop />
            <Executive />
          </Route>
          <Route path="/Presidential">
            <ScrollToTop />
            <Presidential />
          </Route>
          <Route path="/Orthodox">
            <ScrollToTop />
            <Orthodox />
          </Route>
          <Route path="/Imperial">
            <ScrollToTop />
            <Imperial />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
