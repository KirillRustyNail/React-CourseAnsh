import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectRestaurantsIds, selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';
import { RestaurantView } from '../RestaurantView/RestaurantView';

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <div>
      <RestaurantTabs
        restaurantIds={restaurantIds}
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      <RestaurantView id={activeRestaurantId} />
    </div>
  );
};
