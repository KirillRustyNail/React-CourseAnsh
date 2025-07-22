import {Layout} from '../Layout/Layout';
import {RestaurantPage} from '../RestaurantPage/RestaurantPage'
import { ScrollProgressBar } from '../ScrollProgressBar/ScrollProgressBar';

export const App = () => {

  return (
    <Layout>
      <ScrollProgressBar/>
      <RestaurantPage/>
    </Layout>
  );
}
