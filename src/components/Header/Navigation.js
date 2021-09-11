import { useHistory, useLocation } from "react-router";
import styles from "./Header.module.css";

const Navigation = ({ classes, isMobileMenuOpen }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <nav className={classes}>
      <ul>
        <li
          class={`${styles.listItem} ${pathname === "/" && styles.active}`}
          onClick={() => goTo("/")}
        >
          Quiz
        </li>
        <li
          class={`${styles.listItem} ${
            pathname === "/is-triangle" && styles.active
          }`}
          onClick={() => goTo("is-triangle")}
        >
          Is Triangle
        </li>
        <li
          class={`${styles.listItem} ${
            pathname === "/hypotenuse" && styles.active
          }`}
          onClick={() => goTo("hypotenuse")}
        >
          Hypotenuse
        </li>
        <li
          class={`${styles.listItem} ${pathname === "/area" && styles.active}`}
          onClick={() => goTo("area")}
        >
          Area of Triangle
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
