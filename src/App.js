import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Share/Navbar';
import NotFound from "./Components/Share/NotFound";
// animation
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import RequireAuth from './Components/Login/RequireAUth';
import AddItems from './Components/Pages/AddItem/AddItems';
import Blog from './Components/Pages/Blog/Blog';
import BuyNow from './Components/Pages/BuyNow/BuyNow';
import ManageBookProducts from './Components/Pages/ManageBookProduct/ManageBookProducts';
import ManageItems from './Components/Pages/ManageItem/ManageItems';
import MyItems from './Components/Pages/MyItem/MyItems';
AOS.init();

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageItem"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageBook"
          element={
            <RequireAuth>
              <ManageBookProducts />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/buyNow/:id"
          element={
            <RequireAuth>
              <BuyNow />
            </RequireAuth>
          }
        ></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
