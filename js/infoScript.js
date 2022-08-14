const movieInfo = document.getElementById("movie_info_container");

//get data from local storage and add data into html
function handleInfo() {
  //parsing movie information array
  let data = JSON.parse(localStorage.getItem("Movies Information"));
  movieInfo.innerHTML = `<div class="card mb-3" 
  style="width: 77rem;height: 37rem;display: flex;justify-content: center;align-items: center;border: none;" >
      <div   class="row g-0">
        <div class="col-md-4">
          <img src=${data.Poster}  class="img-fluid rounded-start" alt="movie_poster"></img>
        </div>
        <div  class="col-md-8">
          <div class="card-body">
            <h2 class="card-title" >${data.Title}</h2>
            <p class="card-text"><b>Actors :</b> ${data.Actors}</p>
            <p class="card-text"><b>Plot :</b> ${data.Plot}</p>
            <p class="card-text"><b>Genre :</b> ${data.Genre}</p>
            <p class="card-text"><b>Director :</b> ${data.Director}</p>
            <p class="card-text"><b>Language :</b> ${data.Language}</p>
            <p class="card-text"><b>Production :</b> ${data.Production}</p>
            <p class="card-text"><b>Writer :</b> ${data.Writer}</p>
            <p class="card-text"><b>Awards :</b> ${data.Awards}</p>
            <p class="card-text"><b>Year :</b> ${data.Year}</p>
            <p class="card-text"><b>IMDB Rating :</b> ${data.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>`;
}

//call function to display movie information
handleInfo();
