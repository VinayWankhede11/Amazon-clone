import { useState, useEffect } from 'react'
import './App.css';
import Header from './Header'
import SubHeader from './SubHeader'
import Cart from './Cart'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import styled from 'styled-components'
import { db, auth } from './firebase';
import Login from './Login'
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [ cartItems, setCartItems ] = useState([]);
  

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
        }))

      setCartItems(tempItems);
    })
  }

  const signOut = () => {
      auth.signOut().then(()=>{
          localStorage.removeItem('user')
          setUser(null)
      })
  }

   useEffect(() => {
    getCartItems();
  }, [])

console.log(cartItems)


  return (
    <Router>
      {
        //if -else statement
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header 
              signOut={signOut}
              user={user} 
              cartItems={cartItems} />
              <SubHeader />

            <Switch>

              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>

              {/* default is wriiten at the the last and in this case of route default is "/" */}
              <Route path="/">
                <Home />
              </Route>

            </Switch>
            <Footer />
          </Container>
        )
      }
    </Router>
       
    
  );
}

export default App;

const Container = styled.div`
   background-color: #EAEDED;
`