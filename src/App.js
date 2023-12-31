import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
     {/* <h1>start</h1> */}
     <Header/>
     <Main/>
     <AboutUs/>
    </div>
  );
}

export default App;