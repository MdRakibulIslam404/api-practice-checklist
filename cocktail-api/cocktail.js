// load data
const searchData = () => {
    const searchBox = document.getElementById("search-box");
    const searchText = searchBox.value;
    loadData(searchText);
};

// load data
const loadData = searchText => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayData(data.drinks))
};

// display data 
const displayData = drinks => {
    // console.log(drinks);
    const cocktailsParent = document.getElementById("cocktail-parent")
    drinks.forEach(drink => {
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="">${drink.strDrink.slice(0, 25)}</h5>
            <p class="">${drink.strInstructions}</p>
          <a href="#details" class="btn btn-info" onclick=loadDetail(${drink.idDrink})>Details</a>
        </div>
    </div>
    </div>`
        cocktailsParent.appendChild(div);
    })
};

// load details
const loadDetail = id => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => displayDetail(data.drinks[0]))
};

// display details
const displayDetail = detail => {
    console.log(detail);
    document.getElementById("details").innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${detail.strDrinkThumb}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="text-center">${detail.strDrink.slice(0, 25)}</h5>
            <p class="text-center">${detail.strCategory}</p>
            <p class="text-center">${detail.strGlass}</p>
            <p class="text-center">${detail.strAlcoholic}</p>
            <p class="text-center">${detail.strIngredient3}</p>
        </div>
    </div>
    </div>`
};