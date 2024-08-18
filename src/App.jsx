import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import LoginPage from "./components/loginpage";
// import RegisterPage from "./components/regosterpage";
import Cart from "./components/cart";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            {/* <RegisterPage /> */}
            {/* <LoginPage /> */}
            <Cart />
            <Footer />
        </div>
    );
};

export default App;
