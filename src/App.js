import './App.css';
// Import all the goodness
import Nav from "./Components/Nav/Nav"
import API from './Utils/API';
import Search from "./Components/Search/Search"
import EmployeeList from './Components/EmployeeList/EmployeeList';

//App function is where the components to display are!
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Search /> */}
      <EmployeeList />
    </div>
  );
}

export default App;
