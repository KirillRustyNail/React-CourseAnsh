import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ScrollProgressBar } from "../ScrollProgressBar/ScrollProgressBar";
import { ThemeContextProvider } from "../ThemeContextProvider/ThemeContextProvider";
import { UserContextProvider } from "../UserContextProvider/UserContextProvider";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { HomePage } from "../../pages/HomePage/HomePage";
import { RestaurantsPage } from "../../pages/RestaurantsPage/RestaurantsPage";
import { MenuPage } from "../../pages/MenuPage/MenuPage";
import { ReviewsPage } from "../../pages/ReviewsPage/ReviewsPage";
import { DishPage } from "../../pages/DishPage/DishPage";

import { Layout } from "../Layout/Layout";

export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider initialTheme="dark">
      <UserContextProvider>
        <BrowserRouter>
          <ScrollProgressBar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="restaurants">
                <Route index element={<RestaurantsPage />} />
                <Route path=":restaurantId/*" element={<RestaurantsPage />}>
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<MenuPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Route>
              </Route>
              <Route path="dish/:dishId" element={<DishPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  </Provider>
);
