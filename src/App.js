import Navbar from './Navbar'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <div className="content">
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/services">
           <Services />
          </Route>
          <Route path="/contact">
           <Contact />
          </Route>
        </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
