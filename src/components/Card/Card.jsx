import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    <Link to={`/${strCategory}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={strCategoryThumb} alt="" />
        </div>
        <div className={styles.textContainer}>{strCategory}</div>
      </div>
    </Link>
  );
};

export default Card;
