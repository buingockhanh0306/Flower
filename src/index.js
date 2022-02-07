import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux'
import Home from './Component/Page/Home';
import ProductCard from './Component/Page/ProductCard';
import Layout from './Component/Page/LayOut/Layout';
import AllPlants from './Component/Page/ChildrenPage/AllPlants';
import CheckOut from './Component/Page/CheckOut';
import AllGift from './Component/Page/ChildrenPage/AllGift';
import Disconts from './Component/Page/ChildrenPage/Disconts';
import AboutUs from './Component/Page/ChildrenPage/AboutUs';
import AllFlower from './Component/Page/ChildrenPage/AllFlower'


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<App/>}/>
              <Route path='/product' element={<ProductCard/>}/>
              <Route path='/' element={<Layout/>}>
                <Route path='/flowers' element={<AllFlower/>}/>
                <Route path='/plants' element={<AllPlants/>}/>
                <Route path='/gifts' element={<AllGift/>}/>
                <Route path='/disconts' element={<Disconts/>}/>
                <Route path='/about' element={<AboutUs/>}/>
              </Route>
              <Route path='/checkout' element={<CheckOut/>}/>
            </Routes>
        </BrowserRouter>
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
