import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { selectCartItemIds, clearCart } from "../../redux/entities/cart/slice";
import { CartItem as ImportedCartItem } from "../CartItem/CartItem";
import { useTheme } from "../ThemeContextProvider/useTheme";
import { useUser } from "../UserContextProvider/useUser";

import styles from "./Cart.module.css";

export const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const cartRef = useRef(null);
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const { userName } = useUser();

  const itemIds = useSelector(selectCartItemIds);

  const isCartVisible = isHovered || isPinned;

  const togglePin = (event) => {
    event.stopPropagation();
    setIsPinned((prev) => !prev);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPinned &&
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setIsPinned(false);
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPinned]);

  useEffect(() => {
    if (userName === null) {
      dispatch(clearCart());
      setIsPinned(false);
      setIsHovered(false);
    }
  }, [userName, dispatch]);

  return (
    <div
      className={styles.cartWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cartRef}
    >
      <button
        className={styles.cartButton}
        onClick={togglePin}
        aria-label="Cart"
      >
        🛒
      </button>

      {isCartVisible && (
        <div
          className={classNames(styles.cartPopup, {
            [styles.light]: theme === "light",
            [styles.dark]: theme === "dark",
          })}
        >
          <h3 className={styles.title}>Your Cart</h3>
          {userName === null ? (
            <div className={classNames(styles.empty, styles.loginRequired)}>
              Please log in to view your cart.
            </div>
          ) : itemIds.length > 0 ? (
            <div className={styles.list}>
              {itemIds.map((id) => (
                <ImportedCartItem key={id} id={id} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>Cart is empty</div>
          )}
        </div>
      )}
    </div>
  );
};
