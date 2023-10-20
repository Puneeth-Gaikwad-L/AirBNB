const searchTxt = document.getElementById("search");
const searchBox = document.getElementById("search-bar");
console.log(searchBox);
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-bar");
let searchPlace;

searchBox.addEventListener("mouseenter", function () {
    searchTxt.innerText = "Search"
    searchBtn.classList.add("new-search");
});

searchBox.addEventListener("mouseleave", function () {
    searchTxt.innerText = ""
    searchBtn.classList.remove("new-search");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchPlace = {
        place: e.target.place.value,
        checkIn: e.target.checkIn.value,
        checkOut: e.target.checkOut.value,
        guests: e.target.guests.value,
    }
    navigateTosearchListing();
    console.log(searchPlace);
    form.reset();
    console.log(searchPlace);
});

function navigateTosearchListing() {
    window.location.href = "searchListing.html";
}