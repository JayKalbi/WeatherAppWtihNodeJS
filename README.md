# Weather App

This is a simple weather application built using HTML, Vanilla CSS, JavaScript, and Node.js as the backend. It fetches weather data from a weather API to display current weather information for a given location.

## Features

- Fetches real-time weather data from a weather API.
- Allows users to search for weather information by location.
- Displays current weather conditions including temperature, humidity, wind speed, etc.
- Responsive design for various screen sizes.

## Technologies Used

- HTML: Used for structuring the web pages.
- CSS: Styling the HTML elements.
- JavaScript: Implementing functionality and interacting with the API.
- Node.js: Used for server-side scripting.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/).
- NPM (Node Package Manager): Usually comes with Node.js installation.

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/JayKalbi/WeatherAppWithNodeJS.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Obtain API key:

    Sign up for an account at a weather API provider (e.g., OpenWeatherMap, Weatherstack, etc.) and obtain an API key.

5. Set up environment variables:

    Create a `.env` file in the root directory of the project and add the following:

    ```plaintext
    API_KEY=your_weather_api_key_here
    ```

6. Start the server:

    ```bash
    npm start
    ```

7. Open your web browser and visit `http://localhost:X000` to see the application running.

## API Reference

The application uses a weather API to fetch real-time weather data. Refer to the documentation of the chosen weather API for usage details.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
