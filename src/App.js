import './App.css';
import Box from './components/Box'

function App() {

  const numeros = [1,2,3,4,5,6]

  return (
    <div className="App">
      <header className="App-header">
        {
          numeros.map((item) => <Box></Box>)
        }
      </header>
    </div>
  );
}

export default App;
