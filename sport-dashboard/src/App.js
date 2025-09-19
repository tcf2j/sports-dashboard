import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  /* Move these componets into HomePage componet*/

  return (
    <div className="App">
        <NavBar />
        <Dashboard /> 
        
    </div>
  );
}

export default App;
