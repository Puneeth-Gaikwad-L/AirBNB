# AirBNB - Clone

This project is an Airbnb clone that replicates the core functionality of the Airbnb platform. It allows users to search for hotels based on location, check-in and check-out dates, and the number of guests. The application then redirects the user to a listing page displaying the available hotels and their locations on a map. Clicking on a specific hotel takes the user to a new tab where more details about the hotel are provided, and they have the option to book the hotel.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [New-Learning](#New-Learning)
- [Credits](#Credits)

- [License](#license)

## Features

1. **Homepage:**

   - Users can enter details such as location, check-in and check-out dates, and the number of guests.
   - Upon submission, the user is redirected to the listing page.

2. **Listing Page:**

   - Displays a list of hotels based on the user's search criteria.
   - Utilizes the Google Maps API to show the locations of the hotels on a map.
   - Clicking on a specific hotel redirects the user to a new tab with detailed information and booking options.

3. **Hotel Details Page:**
   - Provides in-depth information about a selected hotel.
   - Users can make a booking for the selected hotel.

## Tech Stack

- HTML
- CSS
- JavaScript
- Airbnb API (RapidAPI)
- Google Maps API

## Screenshots

### Homepage

![Alt text](./assests/Images/readme%20imgs/image.png)

### Listing Page

![Alt text](./assests/Images/readme%20imgs/image-2.png)

### Hotel Details Page

![Alt text](./assests/Images/readme%20imgs/image-1.png)

## New-Learning

One significant learning in this project was the implementation of debouncing. Usually used for performance improvement, I applied debouncing for API calls when showing suggestions. This helped optimize the user experience by reducing unnecessary API calls and enhancing the overall performance of the application.

## Credits

Airbnb API: [https://rapidapi.com/3b-data-3b-data-default/api/airbnb13/](RapidAPI)

Google Maps API: [https://developers.google.com/maps](Google-Cloud-Platform)

GeoLocation API: [https://rapidapi.com/apishub/api/address-from-to-latitude-longitude](GeoLocation-API)

## License

This project is licensed under the [https://choosealicense.com/licenses/mit/#](LICENSE).
