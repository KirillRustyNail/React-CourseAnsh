import { useState } from 'react';
import { restaurants } from '../../constants/mock.js';
import {RestaurantTabs} from '../RestaurantTabs/RestaurantTabs';
import {RestaurantView} from '../RestaurantView/RestaurantView';

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(r => r.id === activeRestaurantId) || null;

  return (
    <div>
      <RestaurantTabs 
        restaurants={restaurants} 
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurant ? (
        <RestaurantView restaurant={activeRestaurant} />
      ) : (
        <div>No restaurant selected</div>
      )}
    </div>
  );
}
