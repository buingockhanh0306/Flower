import logo from './logo.svg';
import './App.css';
import Home from './Component/Page/Home';
import ProductCard from './Component/Page/ProductCard';
import AllPlants from './Component/Page/AllPlants';
import CheckOut from './Component/Page/CheckOut';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      {/* <Home/> */}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductCard/>}/>
        <Route path='/allplant' element={<AllPlants/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      {/* <ProductCard/> */}
      {/* <AllPlants/> */}
      {/* <CheckOut/> */}
    </div>
  );
}

export default App;
