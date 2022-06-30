import './App.css';
import Home from './containers/Home';
import usePersistedState from './components/usePersistedState';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './containers/Products';
import Contact from './containers/Contact';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import MyOrders from './containers/MyOrders';
import MyDetails from './containers/MyDetails';
import Cart from './containers/Cart';

function App() {

  // set is Login condition
  const [isLogin, setIsLogin] = usePersistedState('isLogin',false);
  
  const [currUser, setCurrUser] = usePersistedState('currUser', {});



  return (
    <Router>
      <div className="App">

        <Navigation isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    currUser={currUser}
                    setCurrUser={setCurrUser} />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={isLogin ? <MyOrders /> : 
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
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>
        {/* <Home /> */}
      </div>
    </ Router>
  );
}

export default App;
