
import { useState,useEffect } from 'react';

export default function useIngredients() {

useEffect(() => {
    //go fetch to get initial ingredient values from server
}, [])

  const [ingredients, setIngredients] = useState({
    flour: '',
    butter: '',
    sugar: '',
    brownSugar: '',
    eggs: '',
    vanilla: '',
    bakingSoda: '',
    salt: '',
    chocolateChips: '',
    cornStarch: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setIngredients(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setIngredients({
      flour: '',
      butter: '',
      sugar: '',
      brownSugar: '',
      eggs: '',
      vanilla: '',
      bakingSoda: '',
      salt: '',
      chocolateChips: '',
      cornStarch: '',
    });
  };

  const handleSubmit = () => {
    console.log('Ingredients:', ingredients);
    alert('Cookie ingredients submitted!');
  };

  return {
    ingredients,
    handleInputChange,
    handleReset,
    handleSubmit,
  }
}