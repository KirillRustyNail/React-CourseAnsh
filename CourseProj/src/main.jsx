import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants} from "../materials/mock.js"

const root = document.getElementById("root");

const reactRoot = createRoot(root);


reactRoot.render(
      restaurants.map((restaurant) => (
        <div key={restaurant.id} style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
          <h2>{restaurant.name}</h2>
          
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </div>
      ))
);
