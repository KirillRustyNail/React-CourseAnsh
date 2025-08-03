import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate  } from 'react-router';

import { selectRestaurantsIds, selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';
import { RestaurantView } from '../RestaurantView/RestaurantView';


export const RestaurantsContainer = () => {

  const { restaurantId } = useParams();
  const restaurantIds = useSelector(selectRestaurantsIds);
  const navigate = useNavigate();

  const validId = restaurantIds.includes(restaurantId) ? restaurantId : restaurantIds[0];

  const handleTabClick = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div>
      <RestaurantTabs
        restaurantIds={restaurantIds}
        activeId={validId}
        onTabClick={handleTabClick}
      />
      <RestaurantView id={validId} />
    </div>
  );
};
