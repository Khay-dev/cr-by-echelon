import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/layout/home/Home';
import Gallery from './components/layout/Gallery/Gallery';



function App() {
  return (
    < Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
