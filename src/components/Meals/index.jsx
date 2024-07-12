import React, { useEffect, useState } from 'react';
import './Meals.css';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching the meals:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="App">
      <h1>Seafood Meals</h1>
      <div className="meals-list">
        {meals.map(meal => (
          <div key={meal.idMeal} className="meal">
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
