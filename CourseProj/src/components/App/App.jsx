import { Provider } from 'react-redux';
import { store } from '../../redux/store'

import { Layout } from '../Layout/Layout';
import { RestaurantPage } from '../RestaurantPage/RestaurantPage';
import { ScrollProgressBar } from '../ScrollProgressBar/ScrollProgressBar';
import { ThemeContextProvider } from '../ThemeContextProvider/ThemeContextProvider';
import { UserContextProvider } from '../UserContextProvider/UserContextProvider';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider initialTheme="dark">
        <UserContextProvider>
          <Layout>
            <ScrollProgressBar />
            <RestaurantPage />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
