import './App.css';
// Import all the goodness
import Nav from "./Components/Nav/Nav"
import EmployeeList from './Components/EmployeeList/EmployeeList';

//App function is where the components to display are!
function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <EmployeeList />
    </div>
  );
}

// Export it all
export default App;
