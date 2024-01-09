import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import WishListPage from "../components/WishListPage";
import { CartPage } from "../components/CartPage";
import ProductDetailPage from "../components/ProductDetailPage";
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import AboutPage from "../components/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/wishList",
    element: <WishListPage></WishListPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/detail/:name",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  }
]);

export default router;
