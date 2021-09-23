const resultsContainer = document.querySelector(".results");

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const results = json.results;

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div>${result.name}</div>`;
    });
}

callApi();
