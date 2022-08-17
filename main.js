document.querySelector(".js-go").addEventListener("click", function () {
    var inputValue = document.querySelector(".js-inp").value;
    var inp = getinp();
    searchGiphy(inp);
  });
  
  document
    .querySelector(".js-inp").addEventListener("keyup", function (data) {
      if (data.which === 13) {
        var inp = getinp();
        searchGiphy(inp);
      }
    });
  
  function getinp() {
    var inputValue = document.querySelector(".js-inp").value;
  
    return inputValue;
  }
  
  function searchGiphy(searchQuery) {
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=NcZb9d8ZBNkpw74QpXgZ9qEDrWneHMsH&q=" + searchQuery;
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener("load", function (data) {
      var actualData = data.target.response;
      pushToDOM(actualData);
      console.log(actualData);
    });
  }
  
  function pushToDOM(response) {

    response = JSON.parse(response);

    var images = response.data;
 
    var container = document.querySelector(".js-container");

    container.innerHTML = "";

    images.forEach(function (image) {
      var src = image.images.fixed_height.url;

      container.innerHTML += "<img src='" + src + "' class='container-image' />";
    });
  }   
  