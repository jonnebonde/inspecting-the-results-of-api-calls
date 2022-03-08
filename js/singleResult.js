const container = document.querySelector(".container");

const singleUrl = "https://api.rawg.io/api/games/3498?key=54582cd735a340b89b17702eae51578b";

async function fetchGame() {


    try {

        const response = await fetch(singleUrl);
        const details = await response.json();
    
        console.log(details);

        createHtml(details);
    
       

    }
    catch(error) {

        console.log(error);
        container.innerHTML = `<p>Something went wrong</p>`



    }

   
}

fetchGame();


function createHtml(details) {

    container.innerHTML = `<h1>${details.name}</h1>
                            <div class="details-image" 
                                style="background-image: url('${details.background_image}')">
                            </div>
                            <div class="details-description">${details.description}</div>
                            <time class="details-date">Released: ${details.released}</time>`;

}