const api_url = "https://www.omdbapi.com/?apikey=210b0060";

//create objects
const searchBar = document.getElementById("searchBar");
const searchDownbar = document.getElementById("searchRes");

//handling searchbar input
function inputHandle(e) {
  let result = e.target.value;
  handleMoiveTitle(result);
}

//add favourite movies in local storage
function handleFavBtn(e, data) {
  e.preventDefault();
  searchDownbar.innerHTML = "";
  let favMoviesInfo = [];
  let tempData = JSON.parse(localStorage.getItem("favourite movies"));
  if (tempData) {
    favMoviesInfo.unshift(tempData);
    favMoviesInfo.unshift(data);
    localStorage.setItem("favourite movies", JSON.stringify(favMoviesInfo));
  } else {
    localStorage.setItem("favourite movies", JSON.stringify(data));
  }
}

//fetch data from the api
async function handleMoiveTitle(result) {
  searchDownbar.innerHTML = "";
  if (result.length > 2) {
    const res = await fetch(api_url + `&t=${result}`);
    let data = await res.json();
    if (data.Response === "False") {
      console.log("not found");
      return;
    } else {
      //change inside html
      searchDownbar.innerHTML = `
      <div class="poster_container container">
      <img src=${data.Poster} alt="movie_poster"></img>
      </div>
      <div class="card-body">
          <div id="header_container">
            <h2 class="card-title" >${data.Title}</h2>
            <i id="info" class="fas fa-info-circle fa-2x"></i>
          </div>
          <p class="card-text" ><b>Actors :</b> ${data.Actors}</p>
          <p class="card-text"><b>Year :</b> ${data.Year}</p>
          <p class="card-text"><b>IMDB Rating :</b> ${data.imdbRating}</p>
          <button id="fav_btn" class="btn btn-outline-danger" type="submit" >
          My Favourite Movie
          </button>
          </div>
          `;

      // add click event on favourite button
      document
        .getElementById("fav_btn")
        .addEventListener("click", (e) => handleFavBtn(e, data));

      // call info.html page
      function openPage() {
        localStorage.setItem("Movies Information", JSON.stringify(data));
        parent.location = "./html/info.html";
      }

      // add click event on info icon
      document.getElementById("info").addEventListener("click", openPage);
    }
  }
}

//add input event on search bar
searchBar.addEventListener("input", inputHandle);