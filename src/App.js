import './App.css';
// import API from './Components/API/API';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import API from './Utils/API';







function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <API />
    </div>
  );
}

export default App;
