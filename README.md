# Weather App

This is a simple weather application that allows users to check the current weather conditions of a specific city using the OpenWeatherMap API.

## Features

- Search for a city to get real-time weather updates.
- Displays temperature, humidity, and wind speed.
- Shows weather icons based on the condition (e.g., clear, clouds, rain, drizzle, mist).
- Error handling for invalid city names.

## Files Included

- `index.html`: Main HTML file that contains the structure of the weather app.
- `style.css`: Includes the styles for layout and design.
- `images/`: Folder containing icons for search, weather conditions, humidity, and wind.
  - `search.png`: Icon for the search button.
  - `clear.png`: Icon for clear weather.
  - `clouds.png`: Icon for cloudy weather.
  - `rain.png`: Icon for rainy weather.
  - `drizzle.png`: Icon for drizzle.
  - `mist.png`: Icon for misty weather.
  - `humidity.png`: Icon representing humidity.
  - `wind.png`: Icon representing wind speed.
  - `sunrise.png`: Icon representing sunrise.
  - `sunset.png`: Icon representing wind sunset.

## How to Use

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Enter the name of the city you wish to check the weather for in the input field.
4. Alternatively you can enter latitude and longitude to check the weather.
5. Click the search button to get weather details.
6. The app will display temperature, sunrise and sunset timing, humidity, wind speed, and weather condition using appropriate icons.

## Setup Instructions

1. You need to sign up for an API key from the [OpenWeatherMap API](https://openweathermap.org/api).
2. Once you get the API key, replace the empty string `apiKey` in the script section:
   ```javascript
   const apiKey = "YOUR_API_KEY";  // Replace this with your actual API key
   ```
3. Ensure the `style.css` file and `images` folder are available in the same directory as `index.html`.

## Error Handling

- If the entered city name is invalid or not found, the application will display an error message: "Invalid city name."

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS**: For styling the weather app.
- **JavaScript (ES6)**: For making API calls and updating the UI dynamically.
- **OpenWeatherMap API**: To fetch real-time weather data.
