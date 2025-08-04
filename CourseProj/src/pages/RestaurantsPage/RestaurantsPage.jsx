import { useParams, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { RestaurantView } from "../../components/RestaurantView/RestaurantView";

export const RestaurantsPage = () => {
  const { restaurantId } = useParams();
  const restaurantIds = useSelector(selectRestaurantsIds);

  if (!restaurantId && restaurantIds.length > 0) {
    return <Navigate to={`/restaurants/${restaurantIds[0]}/menu`} replace />;
  }

  return (
    <div>
      <RestaurantTabs restaurantIds={restaurantIds} activeId={restaurantId} />
      {restaurantId && <RestaurantView id={restaurantId} />}
    </div>
  );
};
