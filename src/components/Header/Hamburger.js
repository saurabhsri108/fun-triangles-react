import styles from "./Header.module.css";

const Hamburger = ({ toggleMenu, isMobileMenuOpen }) => {
  return (
    <button
      className={`${styles.hamburger} ${isMobileMenuOpen && styles.open}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
