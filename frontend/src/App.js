import './App.css';
import Home from './containers/Home';
import usePersistedState from './components/usePersistedState';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './containers/Contact';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import MyOrders from './containers/MyOrders';
import MyDetails from './containers/MyDetails';

import Cart from './cart/Cart';
import {useEffect, useState} from 'react';
import CheckOut from './checkout/CheckOut';

import ProductContainer from './products/ProductContainer';
import Footer from "./components/Footer";


function App() {

  // set is Login condition
  const [isLogin, setIsLogin] = usePersistedState('isLogin',false);
  
  const [currUser, setCurrUser] = usePersistedState('currUser', {});

  const [shoppingCart, setShoppingCart] = usePersistedState('shoppingCart', []);

  useEffect(() => {
    isLogin && fetch(`http://localhost:8080/customers/${currUser.id}`)
               .then(response => response.json())
               .then(data => setCurrUser(data))
    console.log("fetch");
  },[1])  


  return (
    <Router>
      <div className="App">

        <Navigation isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    currUser={currUser}
                    setCurrUser={setCurrUser}
                    shoppingCart={shoppingCart} 
                    setShoppingCart={setShoppingCart} />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<ProductContainer />}></Route>
          <Route path='/contact' element={<Contact />}></Route>


          <Route path='/login' element={isLogin ? <MyOrders currUser={currUser} 
                                                            setCurrUser={setCurrUser} /> : 
                                                  <Login isLogin={isLogin}
                                                         setIsLogin={setIsLogin}
                                                         currUser={currUser}
                                                         setCurrUser={setCurrUser} />}>

          </Route>
          <Route path='/signup' element={isLogin ? <MyDetails /> : 
                                                   <SignUp isLogin={isLogin}
                                                         setIsLogin={setIsLogin}
                                                         currUser={currUser}
                                                         setCurrUser={setCurrUser}
                                                          />}></Route>
          <Route path='/cart' element={<Cart isLogin={isLogin}
                                             setIsLogin={setIsLogin}
                                             currUser={currUser}
                                             setCurrUser={setCurrUser}
                                             shoppingCart={shoppingCart}
                                             setShoppingCart={setShoppingCart}/>}></Route>
          <Route path='/checkout' element={<CheckOut shoppingCart={shoppingCart}
                                                     setShoppingCart={setShoppingCart}
                                                     currUser={currUser}
                                                     setCurrUser={setCurrUser}/>}></Route>


        </Routes>
        <Footer />
      </div>
    </ Router>
  );
}

export default App;
