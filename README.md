# Weather-o-meter
This is a simple weather application created using HTML, CSS, and JavaScript. It retrieves weather data from a public API and displays it to the user. This README file provides information on how to set up and use the Weather App.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a copy of the Weather App up and running on your local machine, follow these steps.

### Prerequisites

To run this application, you will need the following:

- A modern web browser
- A text editor or integrated development environment (IDE) for modifying the code

### Installation

1. Clone the repository to your local machine using Git:

   ```shell
   git clone https://github.com/your-username/weather-app.git
   ```

2. Alternatively, you can download the ZIP file of the repository by clicking the "Code" button and selecting "Download ZIP." Extract the contents of the ZIP file to a folder on your local machine.

## Usage

To use the Weather App, follow these steps:

1. Open the `index.html` file in your web browser.

2. Enter the name of a city or location in the provided input field.

3. Click the "Search" button or press Enter.

4. The Weather App will retrieve the current weather information for the specified location and display it on the page.

## API Key

This Weather App uses a public weather API to fetch weather data. To use the application, you need to obtain an API key and insert it into the JavaScript code.

Follow these steps to obtain an API key:

1. Sign up for an account on the weather API provider's website.

2. Once logged in, navigate to your account settings or API settings page to obtain an API key.

3. Copy the API key provided.

4. Open the `script.js` file in a text editor or IDE.

5. Locate the following line of code:

   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

6. Replace `'YOUR_API_KEY'` with the API key you obtained from the weather API provider.

7. Save the changes.

Note: Be cautious with your API key and avoid sharing it publicly. It's best to store it in a separate configuration file or use an environment variable.

## Contributing

Contributions to the Weather App are welcome and encouraged! If you find any issues or have suggestions for improvement, please submit a pull request or open an issue in the repository.

When contributing, please adhere to the following guidelines:

- Fork the repository and create a new branch for your contribution.
- Make your changes and test them thoroughly.
- Commit your changes with a descriptive commit message.
- Push your branch to your forked repository.
- Submit a pull request, explaining your changes and providing any necessary details.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute this code for your purposes. Please refer to the [LICENSE](LICENSE) file for more information.

