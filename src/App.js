//import {Counter} from './Counter';
//import { Accordion } from './Accordion';
//import { Input } from './Input';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact>
              {/* <Input /> */}
              <MoviesList />
              {/* <Counter />
                <Component name="Cortlin" greeting="Sup" />
                <Accordion /> */}
            </Route>
            <Route path='/movie/:id'>
              <MovieDetail />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

const Component = ({ name, greeting = "hello" }) => (
  <h2>{greeting} {name} </h2>
)

export default App;
