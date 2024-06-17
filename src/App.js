import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirm.scss"
import "./styles/payment.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/myorder.scss"
import "./styles/orderdetails.scss"
import "./styles/dashboard.scss"
import "./styles/orders.scss"
import "./styles/about.scss"

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Confirm from "./components/cart/Confirm";
import Payment from "./components/cart/Payment";
import Login from "./components/Login/Login";
import Profile from "./components/cart/Profile";
import Myorder from "./components/myOrder/Myorder";
import OrderDetails from "./components/myOrder/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Admin from "./components/admin/Admin";
import Orders from "./components/myOrder/Orders";
import About from "./components/contact/About";
import Loader from "./components/layout/Loader";

function App() {
  return (
  <Router>
<Header isAuthenticated={true}/>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
    
      <Route path="/contact" element={<Contact/>}>    </Route>
      <Route path="/cart" element={<Cart/>}> </Route>
      <Route path="/shipping" element={<Shipping/>}></Route>
      <Route path="/confirm" element={<Confirm/>}> </Route>
      <Route path="/payment" element={<Payment/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/me" element={<Profile/>}> </Route>
      <Route path="/myorder" element={<Myorder/>}> </Route>
      <Route path="/order/:id" element={<OrderDetails/>}>    </Route>
      <Route path="/admin/dashboard" element={<Dashboard/>}>    </Route>
      <Route path="/admin/user" element={<Admin/>}>    </Route>
      <Route path="/admin/orders" element={<Orders/>}>    </Route>
      <Route path="/about" element={<About/>}>    </Route>
      <Route path="/*" element={<Loader/>}>    </Route>
           
  
    </Routes>
    <Footer/>
  </Router>
  );
}
export default App;