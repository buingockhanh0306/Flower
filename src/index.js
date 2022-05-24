import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux'
import Home from './Component/Page/Home';
import ProductCard from './Component/Page/ProductCard';
import LayoutPage from './Component/Page/LayOut/LayoutPage/LayoutPage';
import CheckOut from './Component/Page/CheckOut';
import Disconts from './Component/Page/ChildrenPage/Disconts';
import AboutUs from './Component/Page/ChildrenPage/AboutUs';
import AllProduct from './Component/Page/ChildrenPage/AllFlower';
import LayoutHome from './Component/Page/LayOut/LayoutHome';
import SearchPage from './Component/Page/ChildrenPage/SearchPage';
import LoginAndSignup from './Component/Page/LoginAndSignup';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LayoutHome />}>
            <Route path='/' element={<Home />} />
            <Route path='/disconts' element={<Disconts />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/search/:name' element={<SearchPage />} />
            <Route path='/login' element={<LoginAndSignup />} />

            <Route path='/' element={<LayoutPage />}>
              <Route path='/:category' element={<AllProduct /> }>
                <Route path='/:category/:filter'/>
              </Route>
            </Route>
          </Route>




          <Route path='/product/:id' element={<ProductCard />} />
          <Route path='/checkout' element={<CheckOut />} />

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
