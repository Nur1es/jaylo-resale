import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Main from './components/main/Main';
import NextMain from './components/main/NextMain';
function App() {
  return (
    <div className="App">
     {/* <h1>start</h1> */}
     <Header/>
     <Main/>
     <NextMain/>
     <AboutUs/>
    </div>
  );
}

export default App;