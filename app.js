// MealMaker object
const mealMaker = {
  _meals: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },

  addDishToMeal(mealType, dish) {
    if (this._meals[mealType]) {
      this._meals[mealType].push(dish);
    } else {
      console.log("Invalid meal type!");
    }
  },

  getRandomDishFromMeal(mealType) {
    const dishes = this._meals[mealType];
    if (dishes && dishes.length > 0) {
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    } else {
      return "No dishes available!";
    }
  },

  generateRandomMeal() {
    const breakfast = this.getRandomDishFromMeal("breakfast");
    const lunch = this.getRandomDishFromMeal("lunch");
    const dinner = this.getRandomDishFromMeal("dinner");
    return {
      breakfast,
      lunch,
      dinner,
    };
  },
};

// Add some dishes
mealMaker.addDishToMeal("breakfast", "Pancakes");
mealMaker.addDishToMeal("breakfast", "Omelette");
mealMaker.addDishToMeal("breakfast", "Smoothie");
mealMaker.addDishToMeal("lunch", "Grilled Cheese Sandwich");
mealMaker.addDishToMeal("lunch", "Caesar Salad");
mealMaker.addDishToMeal("lunch", "Spaghetti");
mealMaker.addDishToMeal("dinner", "Steak");
mealMaker.addDishToMeal("dinner", "Salmon");
mealMaker.addDishToMeal("dinner", "Vegetarian Pizza");

// DOM manipulation
document.getElementById("generateMealButton").addEventListener("click", () => {
  const meal = mealMaker.generateRandomMeal();
  document.getElementById(
    "breakfast"
  ).textContent = `Breakfast: ${meal.breakfast}`;
  document.getElementById("lunch").textContent = `Lunch: ${meal.lunch}`;
  document.getElementById("dinner").textContent = `Dinner: ${meal.dinner}`;
});
