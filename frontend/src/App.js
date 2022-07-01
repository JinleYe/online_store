import './App.css';
import Home from './containers/Home';
import usePersistedState from './components/usePersistedState';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './products/Product';
import Contact from './containers/Contact';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import MyOrders from './containers/MyOrders';
import MyDetails from './containers/MyDetails';
import ProductContainer from './products/ProductContainer';

function App() {

  // set is Login condition
  const [isLogin, setIsLogin] = usePersistedState('isLogin',false);
  
  const [currCustomerUser, setCurrCustomerUser] = usePersistedState('currCustomerUser', {});


  return (
    <Router>
      <div className="App">

        <Navigation isLogin={isLogin} />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<ProductContainer />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={isLogin ? <MyOrders /> : <Login />}></Route>
          <Route path='/signup' element={isLogin ? <MyDetails /> : <SignUp />}></Route>

        </Routes>
        {/* <Home /> */}
      </div>
    </ Router>
  );
}

export default App;
