# Travel-Booking-Chatbot Project

## Overview
This project is a Travel Booking Chatbot designed to assist users in booking flights, hotels, providing travel information, and more. The chatbot is built using Dialogflow with Node.js backend.

## Features
- **Book Flights**: Users can inquire about flights and book tickets.
- **Book Hotels**: Users can search for hotels and make reservations.
- **Travel Information**: Chatbot provides travel-related information such as weather, local attractions, etc.
- **More**: Additional features can be added as needed.

## Technologies Used
- **Dialogflow**: For natural language processing and conversation management.
- **Node.js**: Backend server for handling requests and responses.
- **Express.js**: Node.js web application framework for building APIs.
- **Other libraries as needed**.

## Installation
To run this project locally, follow these steps:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/ijlalkhanzada/travel-booking-chatbot.git
    ```
2. Navigate to the project directory:
    ```bash
    cd travel-booking-chatbot
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up Dialogflow:
    - Create a new agent on Dialogflow.
    - Import the provided Dialogflow agent ZIP file into your newly created agent.
    - Obtain the service account key JSON file from Google Cloud Console and place it in the project directory.
    - Update the `.env` file with your Dialogflow project ID and service account key file path.

5. Start the server:
    ```bash
    npm start
    ```
6. Your Travel Booking Chatbot should now be running locally.

## Usage
- Access the chatbot through your preferred messaging platform integrated with Dialogflow.
- Start conversing with the chatbot by asking about flights, hotels, or any travel-related queries.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
