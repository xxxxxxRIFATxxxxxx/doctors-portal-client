import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Appointment from './Components/Appointment/Appointment';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/appointment">
          <Appointment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
