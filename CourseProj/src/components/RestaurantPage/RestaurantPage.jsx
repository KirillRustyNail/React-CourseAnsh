import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectRestaurantsIds, selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';
import { RestaurantView } from '../RestaurantView/RestaurantView';

export const RestaurantPage = () => {
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeRestaurantId)
  );

  return (
    <div>
      <RestaurantTabs
        restaurantIds={restaurantIds}
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurant ? (
        <RestaurantView id={activeRestaurantId} />
      ) : (
        <div>No restaurant selected</div>
      )}
    </div>
  );
};
