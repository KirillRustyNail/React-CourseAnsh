import { useSelector } from "react-redux";
import { selectDishesIds } from "../../redux/entities/dishes/slice";
import { Navigate, Outlet, useParams } from "react-router";

export const DishPageLink = () => {
  const { dishId } = useParams();
  const dishesIds = useSelector(selectDishesIds);

  if (dishId) return <Outlet />;

  const firstDishId = dishesIds?.[0];

  if (!firstDishId) return <Navigate to="/" replace />;

  return <Navigate to={`/dish/${firstDishId}`} replace />;
}