import './App.css';
import Cat from './Cat'
import Camel from './Camel'
import { useState } from 'react';
import Dog from './Dog';

function App() {
  const [chiledColor, setchiledColor] = useState('red')
  const [mynumber, setmynumber] = useState(0)
  var is_even = mynumber % 2 === 0 ? 'even' : 'odd'
  return (
    <div className="App" style={{display: 'flex',
     justifyContent: 'space-around',
     backgroundColor: 'gainsboro',
     padding: '15px'}}>
      <Cat chiledColor={chiledColor} setchiledColor={setchiledColor}></Cat>
      <Camel chiledColor={chiledColor} setchiledColor={setchiledColor}></Camel>
      <Dog chiledColor={chiledColor} setchiledColor={setchiledColor} setmynumber={setmynumber}></Dog>
      <h2 style={{color: chiledColor,
         display: 'flex',
         alignItems: 'end'}}>The Number Is:<br/> {is_even}</h2>
    </div>
  );
}

export default App;
