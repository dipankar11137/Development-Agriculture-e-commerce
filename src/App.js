import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Share/Footer";
import Navbar from "./Components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Share/NotFound";
// animation
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AddItems from "./Components/Pages/AddItem/AddItems";
import Blog from "./Components/Pages/Blog/Blog";
import ManageItems from "./Components/Pages/ManageItem/ManageItems";
import MyItems from "./Components/Pages/MyItem/MyItems";
import BuyNow from "./Components/Pages/BuyNow/BuyNow";
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
        <Route path="/addItem" element={<AddItems />}></Route>
        <Route path="/manageItem" element={<ManageItems />}></Route>
        <Route path="/myItem" element={<MyItems />}></Route>
        <Route path="/buyNow/:id" element={<BuyNow />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
