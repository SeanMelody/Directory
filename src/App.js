import './App.css';
// import Button from './Components/Main/Button';
// import API from './Components/API/API';
// import Main from './Components/Main/Main';
import Nav from "./Components/Nav/Nav"
import API from './Utils/API';
import Search from "./Components/Search/Search"
import EmployeeList from './Components/EmployeeList/EmployeeList';






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
