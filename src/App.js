import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
