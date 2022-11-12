import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Community from './Components/Community';
import Technology from './Components/Technology';
import SupportUs from './Components/SupportUs';
import Seedball from './Components/Seedball';
function App() {
  return (
    <div>
    <div className="page-wrapper">
        <div id="ht-preloader">
          <div className="loader clear-loader">
            <div className="loader-text">Loading</div>
            <div className="loader-dots"> <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <BrowserRouter>
         <Header />
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/community" element={<Community/>}></Route>
          <Route path="/technology" element={<Technology/>}></Route>
          <Route path="/supportus" element={<SupportUs />}></Route>
          <Route path="/seedball" element={<Seedball />}></Route>
        </Routes>
         <Footer />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
