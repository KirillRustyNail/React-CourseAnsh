import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { Navigate, Outlet, useParams } from "react-router";

export const RestaurantsPageLink = () => {
  const { restaurantId } = useParams();
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (restaurantId) return <Outlet />;

  const firstRestaurantId = restaurantsIds?.[0];

  if (!firstRestaurantId) return <Navigate to="/" replace />;

  return <Navigate to={`/restaurants/${firstRestaurantId}`} replace />;
}