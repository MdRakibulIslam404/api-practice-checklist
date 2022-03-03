/* const loadSingleUsers = () => {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => displaySingleUsers(data.results[0]))
};
loadSingleUsers();

const displaySingleUsers = user => {
    // console.log(user);
}; */

// meal db
const toggleSpinner = displayStyle => {
    document.getElementById("spinner").style.display = displayStyle;
};

const toggleSearchResult = displayStyle => {
    document.getElementById("meals").style.display = displayStyle;
};

const searchMeal = () => {
    const searchText = document.getElementById("search-field").value;
    toggleSpinner("block");
    toggleSearchResult("none");
    loadMeals(searchText)
    document.getElementById("search-field").value = "";
};

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};
loadMeals("fish");

const displayMeals = meals => {
    const container = document.getElementById("meals");
    container.textContent = "";
    if (!meals) {

    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal?.strIngredient8 ? meal.strIngredient8 : "not found"}</p>
        <button onclick="loadMealsDetails('${meal.strMeal}')">click me</button>`
        container.appendChild(div);
        toggleSpinner("none");
        toggleSearchResult("block");
    })
};

const loadMealsDetails = mealName => {
    console.log(mealName);
};