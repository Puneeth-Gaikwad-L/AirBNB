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


const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Bangalore&checkin=2023-12-16&checkout=2023-12-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '35529e50acmshe42c2bf03c7e96dp12989cjsn06b3989d95a2',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    }
};

async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// getData();

