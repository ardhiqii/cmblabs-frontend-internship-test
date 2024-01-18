import React from 'react'
import styles from "./BigCard.module.css"
import { TruncateString } from '../../util/TruncateString'
import { Link } from 'react-router-dom'
const BigCard = ({strMeal,strMealThumb,idMeal}) => {
  return (
    <Link to={`/meal/${idMeal}`} style={{textDecoration:'none'}}>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={strMealThumb} alt="" />
      </div>
      <div className={styles.nameContainer}>
        <p>{TruncateString(strMeal,20)}</p>
      </div>
    </div>
    </Link>
  )
}

export default BigCard