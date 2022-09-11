
// https://imdb-api.com/en/API/IMDbList/k_y84ui14a/ls004285275

function hideLoading(){
  const loader = document.querySelector(".loading-wrapper");
  loader.style.display = "none";
 
}


function getMovies(){


  fetch('https://imdb-api.com/en/API/IMDbList/k_y84ui14a/ls561399293')
  .then(response =>{
    return response.json();
  }).then(data =>{
    
      var list = data.items;
      var movieList = document.getElementById('movie_list');


      for(var x = 0; x < list.length; x++){

        //Create Grid Row
        

        for (var i = 1; i <= 4; i++) {


          var movie = document.createElement("li");
          movieList.appendChild(movie);


          //Create Title
          let title = document.createElement('p');
          title.innerHTML = list[x].fullTitle;
          movie.appendChild(title);


          //Create Image
          const img = document.createElement('img');
          img.classList.add('movie_image');
          img.src = list[x].image;
          movie.appendChild(img);


          //Create Genre
          x++;

        }



      }

    }).then(data => {
      hideLoading();
    });

}



getMovies();




