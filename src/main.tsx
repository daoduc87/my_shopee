import { createRoot } from "react-dom/client";
import "./assets/scss/grid.scss";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Login from "./components/auth/Login.tsx";
import RootLayout from "./RootLayout.tsx";
import AuthLayout from "./AuthLayout.tsx";
import Register from "./components/auth/Register.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import ProtectedLayout from "./pages/ProtectedLayout.tsx";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCategory from "./pages/ProductCategory.tsx";
import ProductCategoryProvider from "./context/ProductCategoryProvider.tsx";
import FlashSalePage from "./pages/FlashSalePage.tsx";
import FeaturedTrendPage from "./pages/FeatureTrendPage.tsx";
import MostPurchasedPage from "./pages/MostPurchasedPage.tsx";
import Shop from "./pages/Shop.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import OrderDetail from "./pages/OrderDetail.tsx";
import AccountProfile from "./pages/AccountProfile.tsx";
import UserAccountLayout from "./pages/UserAccountLayout.tsx";
import ChangePassword from "./pages/ChangePassword.tsx";
import NotFound from "./components/notfound/NotFound.tsx";
import { ErrorBoundary } from "react-error-boundary";
const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Navigate to={"/login"} replace />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/category/:id",
            element: <ProductCategory />,
          },
          {
            path: "/flash-sale",
            element: <FlashSalePage />,
          },
          {
            path: "/featured",
            element: <FeaturedTrendPage />,
          },
          {
            path: "/most-purchased",
            element: <MostPurchasedPage />,
          },
          {
            path: "/products",
            element: <Shop />,
          },
          {
            path: "/:slug/:id",
            element: <ProductDetail />,
          },
          {
            path: "/cart",
            element: <CartPage />,
          },
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
          {
            path: "/user",
            element: <UserAccountLayout />,
            children: [
              {
                index: true,
                element: <Navigate to={"account/profile"} replace />,
              },
              {
                path: "account/profile",
                element: <AccountProfile />,
              },
              {
                path: "order",
                element: <OrderDetail />,
              },
              {
                path: "password",
                element: <ChangePassword />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ProductCategoryProvider>
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ProductCategoryProvider>
    </PersistGate>
  </Provider>,
);
