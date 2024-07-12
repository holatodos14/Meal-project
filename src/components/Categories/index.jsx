import React, { useEffect, useState } from 'react'
import CategoriesList from '../CategoriesList/index'
import CategoriesListH from '../CategoriesList/Header'
import './category.css'

export default function index() {
  const[data, setData] = useState([])
  const[category, setCategory] = useState([])

  const getData = async () => {
    const rsC = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const jsonRsC= await rsC.json()
    
    setData(jsonRsC.categories)
    setCategory(jsonRsC.categories)
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <ul>
        <CategoriesListH/>
        {category &&
            category.map((categories,index) => (
                <CategoriesList key={index} categories={categories}/>
            ))
        }
    </ul>
  )
}
