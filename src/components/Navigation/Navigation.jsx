import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.logo}>
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
