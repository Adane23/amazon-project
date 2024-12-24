
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { useEffect } from 'react';
import { auth } from './Components/Firebase';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe('pk_test_51ORFBNL4btgcbIc96nhQPRkgfre5fp8uzK63rZKJRWmmQq2rG7eydow9bj8ObDUmdk5mNLlyL3pHnzgWrGUuujLw00ujyt0ccA');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
        <Routes>
              <Route path='/orders' element={<><Header /> <Orders /></>} />
              <Route path='/login' element={<Login />} />
              <Route path='/payment' element={
                <>
                  <Header />
                  <Elements stripe ={promise}>
                    <Payment />
                  </Elements>
                </>
              } />
              <Route path='/' element={<><Header /><Home /></>} />
              <Route path='/checkout' element={<><Header /><Checkout /></>} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;

//amazone frontend deploy: https://clone-f881b.web.app
