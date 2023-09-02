import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { useParams } from 'react-router-dom';
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";


function App() {
  const { userId } = useParams();
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/user/:userId" element={<User/>} />          
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product/:productId" element={<Product/>} />          
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
