import './App.css';
import Error from './components/error';
import Footer from './components/footer';
import Hireme from './components/hireme';
import Home from './components/home';
import Product from './components/product';
import Register from './components/register';
import Skills from './components/skill';
import View from './components/view';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/' Component={View}/>
      <Route path='/signup' Component={Register}/>
      <Route path='/hire' Component={Hireme}/>
      <Route path='/skills' Component={Skills}/>
      <Route path='/product' Component={Product}/>
      <Route path='/*' Component={Error}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
