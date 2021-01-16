import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyDropdown from './components/Dropdown'
import {Navbar} from 'reactstrap'
import Ingredients from './components/Ingredients';
import NotFound from './components/NotFound';
import {  PizzaProvider } from './Context/PizzaContext';
import Order from './components/Order';


function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <Router>
          <Navbar expand="md">
            <MyDropdown/>
          </Navbar>
            <Switch>
              <Route path="/ingredients" component={Ingredients}/>
              <Route path="/order/pizza" component={() => <Order title='Pizza'/>}></Route>
              <Route path="/order/calzone"><Order title='Calzone'/></Route>
              <Route exact path="/"/>
              <Route component={NotFound}/>
            </Switch>
        </Router>
      </PizzaProvider>
    </div>
  );
}
export default App;
