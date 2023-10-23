const cardContainer = document.getElementById("cardContainer");
let count = 1;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '40abd47a13msh0e0a1cedce84452p1ea8e0jsndf3d5a672f5d',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    }
};
const apiObject = JSON.parse(localStorage.getItem("searchObject"));
getData(apiObject.place, apiObject.checkIn, apiObject.checkOut, apiObject.guests);


async function getData(place, checkIn, checkOut, guests) {
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=' + place + '&checkin=' + checkIn + '&checkout=' + checkOut + '&adults=' + guests + '&children=0&infants=0&pets=0&page=1&currency=INR';
    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            count++;
            console.log(count);
            // calling the createCard function to render the hotels
            for (let i = 0; i < response.results.length; i++) {
                createCard(response.results[i].images[0], response.results[i].type, response.results[i].rating, response.results[i].reviewsCount, response.results[i].name, response.results[i].beds, response.results[i].bedrooms, response.results[i].price.rate);
                let arr = [response.results[i].name, response.results[i].lat, response.results[i].lng];
                hotels.push(arr);
            }

        })
        .catch(err => console.error(err));
}


function createCard(thumbNail, hotelType, ratings, reviewsCount, hotelName, noBeds, noBedrooms, prize) {
    let card = document.createElement("div");
    card.classList.add("my-card");

    let cardImg = document.createElement("div");
    cardImg.classList.add("my-card-img");


    let imgTag = document.createElement("img");
    imgTag.src = thumbNail;

    cardImg.appendChild(imgTag);
    card.appendChild(cardImg)

    let cardTitle = document.createElement("div");
    cardTitle.classList.add("my-card-title");

    let headline = document.createElement("h5");
    headline.innerText = hotelType;

    cardTitle.appendChild(headline);

    let ratingsDisplay = document.createElement("div");
    ratingsDisplay.classList.add("ratings-display");
    ratingsDisplay.innerHTML = `<i class="fa-solid fa-star" style="color: #000000;"></i>
    <span>
        ${ratings}(${reviewsCount})
    </span>`

    cardTitle.appendChild(ratingsDisplay);
    card.appendChild(cardTitle);

    let hotelNameTag = document.createElement("h5");
    hotelNameTag.innerText = hotelName;
    card.appendChild(hotelNameTag);

    let beds = document.createElement("p");
    beds.innerText = noBeds + " Beds" + " - " + noBedrooms + " Bedrooms";
    card.appendChild(beds);

    // let dates = document.createElement("p");
    // dates.innerText = stayDates;
    // card.appendChild(dates);

    let priceDisplay = document.createElement("div");
    priceDisplay.classList.add("prize-display");
    priceDisplay.innerText = "₹" + prize
    card.appendChild(priceDisplay);

    cardContainer.appendChild(card);
}

function formatDate(checkIn, checkOut) {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const inday = startDate.getDate();
    const inmonthIdx = startDate.getMonth();
    const inmonth = monthNames[inmonthIdx];

    const outday = endDate.getDate();
    const outmonthIdx = endDate.getMonth();
    const outmonth = monthNames[outmonthIdx];

    if (inmonth === outmonth) {
        return `${inday}-${outday} ${outmonth}`;
    } else {
        return `${inday} ${inmonth} - ${outday} ${outmonth}`;
    }
}






// ******************** Google maps logic *******************//


/**
       //@license
        * Copyright 2019 Google LLC. All Rights Reserved.
        * SPDX-License-Identifier: Apache-2.0
        */
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.


const hotels = [];
console.log(hotels);

const beaches = [
    ["Gayathrinagar", 12.9995969, 77.5558388, 13000],
    ["kalyan Nagar", 13.028005, 77.639969, 5],
    ["Cronulla Beach", -34.028249, 151.157507, 3],
    ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
    ["Maroubra Beach", -33.950198, 151.259302, 1],
];

async function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 12.972442, lng: 77.580643 },
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        mapTypeControl: false,
        rotateControl: false
    });


    setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.



function setMarkers(map) {

    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.

    for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];

        // new google.maps.Marker({
        //     position: { lat: beach[1], lng: beach[2] },
        //     map,
        //     icon: image,
        //     shape: shape,
        //     title: beach[0],
        //     zIndex: beach[3],
        // });

        new google.maps.Marker({
            position: { lat: hotel[1], lng: hotel[2] },
            // label: b,
            map,
            title: hotel[0],
        });
    }
}

// initMap();

window.initMap = initMap;