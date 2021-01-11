//import {Counter} from './Counter';
//import { Accordion } from './Accordion';
//import { Input } from './Input';
import { MoviesList } from './movies/MoviesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Input /> */}
        <MoviesList />
        {/* <Counter />
        <Component name="Cortlin" greeting="Sup" />
        <Accordion /> */}
      </header>
    </div>
  );
}

const Component = ({name, greeting="hello"}) => (
  <h2>{greeting} {name} </h2>
)

export default App;
