const searchTxt = document.getElementById("search");
const searchBox = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

searchBox.addEventListener("mouseenter", function () {
    searchTxt.innerText = "Search"
    searchBtn.classList.add("new-search");
});
 
searchBox.addEventListener("mouseleave", function () {
    searchTxt.innerText = ""
    searchBtn.classList.remove("new-search");
 });