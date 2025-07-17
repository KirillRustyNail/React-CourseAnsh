export const  RestaurantTabs = ({ restaurants, activeId, onTabClick }) => {
  return (
    <div className="restaurant-tabs">
      {restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          className={`tab ${restaurant.id === activeId ? 'active' : ''}`}
          onClick={() => restaurant.id !== activeId && onTabClick(restaurant.id)}
          disabled={restaurant.id === activeId}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}

