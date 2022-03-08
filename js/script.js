const resultsContainer = document.querySelector(".results");

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const results = json.results;

    
    

    

    for(let i = 0; i < results.length; i++) {

        if(i === 10) {
            break
        }
      
        const gameTitle = results[i].name;
        const gameImg = results[i].background_image;
        const gameReleaseDate = results[i].released;


        const NewDate = gameReleaseDate.split("-").reverse().join("-");

        const gamePlat = results[i].parent_platforms
        //const gamePlatform = gamePlat[i].platform;
        //const gamePlatforms = gamePlatform.name
        
        
        const gamePlatform = gamePlat.map((platform) => {
            return (platform.platform).name
        })

       

        const gamePlatforms = gamePlatform.join(`, `);

        if (gamePlatform === "Apple Macintosh") {
            return (gamePlatforms, "Mac");
        } 



    
            console.log(gamePlatform)
        

        resultsContainer.innerHTML += `<div>
                                        <h1>${gameTitle}</h1>
                                        <img src="${gameImg}">
                                        <p>Release Date: ${NewDate}</p>
                                        <p>Platforms: ${gamePlatforms}</p>
                                        </div>
                                        `;
        }
};


callApi();
