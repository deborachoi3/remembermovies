$("button").click(function(){
    console.log("button")
});

function findMovie(search){
    fetch("http://www.omdbapi.com/?apikey=8e9ded79&t=")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
}

