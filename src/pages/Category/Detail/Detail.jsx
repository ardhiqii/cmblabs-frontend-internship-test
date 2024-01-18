import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import { useParams, Navigate } from "react-router-dom";
import BigCard from "../../../components/BigCard/BigCard";
import Loading from "../../../components/Loading/Loading";
const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const Detail = () => {
  const [dataMeals, setDataMeals] = useState();
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(API_URL + categoryName);
      setDataMeals(data.meals);
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
  if (!dataMeals) return <Navigate to={"/"} />;
  return (
    <div className={styles.container}>
      <div className={styles.header}>{categoryName}</div>
      
      <div className={styles.mealsContainer}>
        {dataMeals.map((meal, i) => (
          <BigCard {...meal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
