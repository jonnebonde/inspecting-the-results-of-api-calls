const resultsContainer = document.querySelector(".results");

const url = "https://cat-fact.herokuapp.com/facts";
// const url = "https://api.rawg.io/api/games";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const results = json.all;

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div>${result.upvotes}</div>`;
    });
}

callApi();
