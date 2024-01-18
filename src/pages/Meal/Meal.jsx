import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Meal.module.css";
import Loading from "../../components/Loading/Loading";

const API_URL = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const Meal = () => {
  const [dataMeal, setDataMeal] = useState();
  const [loading, setLoading] = useState(true);
  const { idMeal } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(API_URL + idMeal);
      setDataMeal(data.meals[0]);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading)
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Loading />
      </div>
    );

  const recipe = dataMeal.strInstructions.split("\r\n").map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (
      dataMeal["strIngredient" + i] != "" ||
      (dataMeal["strMeasure" + i] != " " && dataMeal["strMeasure" + i] != "")
    ) {
      ingredients.push(
        `${dataMeal["strMeasure" + i]} ${dataMeal["strIngredient" + i]}`
      );
    }
  }

  let srcYotube = dataMeal.strYoutube.split("v=")[1];
  srcYotube = "https://www.youtube.com/embed/" + srcYotube;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{dataMeal.strMeal}</h1>
      </div>
      
      <div className="">
        <div className={styles.imageContainer}>
          <img src={dataMeal.strMealThumb} alt="" />
        </div>
        <div className={styles.informationContainer}>
          <span> {dataMeal.strArea}</span>
          <span>{dataMeal.strCategory}</span>
        </div>
      </div>

      <h2>Ingredients:</h2>
      <div className={styles.ingredientsContainer}>
        {ingredients.map((ing, i) => (
          <p key={i}>
            <span style={{ color: "#f4ab56"}}>•</span> {ing}
          </p>
        ))}
      </div>

      <h2>Instructions:</h2>
      <div className={styles.instructionContainer}>{recipe}</div>

      <h2>Tutorial:</h2>
      <div className={styles.youtubeContainer}>
        <iframe
          name="iframe1"
          id="iframe1"
          src={srcYotube}
          frameBorder="0"
          border="0"
          cellSpacing="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Meal;
