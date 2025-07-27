import { Layout } from "../Layout/Layout";
import { RestaurantPage } from "../RestaurantPage/RestaurantPage";
import { ScrollProgressBar } from "../ScrollProgressBar/ScrollProgressBar";
import { ThemeContextProvider } from "../ThemeContextProvider/ThemeContextProvider";
import { UserContextProvider } from "../UserContextProvider/UserContextProvider";

export const App = () => {
  return (
    <ThemeContextProvider initialTheme="dark">
      <UserContextProvider>
        <Layout>
          <ScrollProgressBar />
          <RestaurantPage />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
