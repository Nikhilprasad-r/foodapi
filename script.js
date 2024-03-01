const searchMeal = async (e) => {
  e.preventDefault();

  // Select Elements
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    meal.forEach((dish)=>{
    
    title.textContent = dish.strMeal;
    img.style.backgroundImage = `url(${dish.strMealThumb})`;
    console.log(dish);
    info.textContent = dish.strInstructions;

    // const ingredients = [];

    // for (let i = 1; i <= 20; i++) {
    //   if (meal[`strIngredient${i}`]) {
    //     ingredients.push(
    //       `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
    //     );
    //   } else {
    //     break;
    //   }
  })}

    // const html = `
    // <div class='ingredientsDiv'>${ingredients
    //   .map((ing) => `<li class="ing">${ing}</li>`)
    //   .join("")}</div>
    // `;

    // ingredientsOutput.innerHTML = html;
  };

  const showAlert = () => {
    alert("Meal not found :(");
  };

  // Fetch Data
  const fetchMealData = async function (val) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await res.json();
    return meals;
  };

  // Get the user value
  const val = input.value.trim();

  if (val) {
    const meals = await fetchMealData(val);

    if (!meals) {
      showAlert();
      return;
    }

    meals.forEach(showMealInfo);
  } else {
    alert("Please try searching for meal :)");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);
