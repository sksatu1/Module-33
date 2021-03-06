document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // clear data 
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        // please write something to display 
        console.log('write something');
    }
    else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => displayError(error))
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // to clear previous search result ------------------------
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result ;
    }

    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
        </div>
        `;
        searchResult.appendChild(div)
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = `
    <div id="meal-details">
        <div class="card mb-3">
        <img src="${meal.strMealThumb}" class="img-fluid">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">click here</a>
            </div>
        </div>
    </div>
    `;

}