# Book Review Application

## Overview
This project is a Book Review Application built using Node.js, Express, JWT, and Axios. The app allows users to review books and includes features such as authentication, CRUD operations, and efficient data handling.

## Features
- Secure authentication using JWT and session level authentication.
- General users can access book information by ISBN, author, title, and review.
- Registered users can add, modify, and delete book reviews.
- Efficient CRUD operations using Async/Await and Promises with Axios.
- Thorough testing of API endpoints using Postman.

## Technologies Used
- **Node.js**: For back-end runtime environment
- **Express**: For back-end server and API
- **JWT**: For secure authentication
- **Axios**: For handling asynchronous HTTP requests

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Postman for testing API endpoints

### Steps
1. **Fork and Clone the Repository**
    ```sh
    git clone https://github.com/nishchintmakode/book-review-app.git
    cd book-review-app
    ```

2. **Install Dependencies**
    ```sh
    cd express-server
    npm install
    ```

3. **Environment Variables**
    - Create a `.env` file in the `express-server` directory with the necessary environment variables for JWT and database connection.

4. **Running the Server**
    ```sh
    npm start
    ```

## Usage
- Use Postman to register or log in with your Google mail credentials.
- Test API endpoints for accessing and managing book reviews.
- General users can view all books and search by ISBN, author, or title.
- Registered users can add, modify, or delete book reviews.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please contact [nishchintsmakode@gmail.com](mailto:nishchintsmakode@gmail.com).
