import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../Card/Card'
import styles from "./Category.module.css"
import Loading from '../Loading/Loading'
const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
const Category = () => {
  const [categoryData,setCategoryData] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const fetchData = async () =>{
      setLoading(true)
      const {data} = await axios.get(API_URL)
      setCategoryData(data.categories)
      setLoading(false)
    }
    fetchData()
  },[])
  if(loading) return <Loading/>

  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
      {categoryData.map((category,i)=> <Card key={i} {...category}/>)}
      </div>
    </div>
  )
}

export default Category