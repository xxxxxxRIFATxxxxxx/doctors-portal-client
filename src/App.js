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
import Dashboard from './Components/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/appointment">
            <Appointment />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
