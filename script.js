$("button").click(function(){
   var movies = $("input").val();
   findMovie(movies);
});

function findMovie(search){
    fetch("https://www.omdbapi.com/?apikey=8e9ded79&t=" + search)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        data["Poster"]
        $("#Poster").html("<img src='" + data["Poster"]+"'>");
        data["Title"]
        $("#Title").html("Title" + ":" + data["Title"]);
        data["Released"]
        $("#Released").html("Released" + ":" + data["Released"]);
        data["Plot"]
        $("#Plot").html("Plot" + ":" + data["Plot"]);
    });
}


