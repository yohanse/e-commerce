import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import WishListPage from "../components/WishListPage";
import { CartPage } from "../components/CartPage";
import ProductDetailPage from "../components/ProductDetailPage";

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
    path: "/detail",
    element: <ProductDetailPage></ProductDetailPage>
  },
]);

export default router;