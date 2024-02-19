# Student Management System

## Description
The Student Management System is a web application developed to manage student data efficiently. It provides a user-friendly interface for administrators to perform CRUD (Create, Read, Update, Delete) operations on student records. The system is built using React and Bootstrap for the frontend, Spring Boot for the backend, and MongoDB as the database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation
To run the Student Management System locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend Setup
1. Clone this repository.
2. Open `application.properties` and configure the MongoDB connection settings.
3. Run `mvn spring-boot:run` to start the Spring Boot backend server.

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React frontend server.

## Usage
Once the backend and frontend servers are running, you can access the Student Management System in your web browser at `http://localhost:3000`. Use the provided UI to perform CRUD operations on student records.

## Endpoints
The Student Management System provides the following RESTful endpoints:

- `GET api/v1/student/getall`: Get all students.
- `GET api/v1/student/edit/{id}`: Get a student by ID.
- `POST api/v1/student/save`: Create a new student.
- `PUT api/v1/student/delete/{id}`: Update a student by ID.
- `DELETE api/v1/student/delete/{id}`: Delete a student by ID.

## Contributing
Contributions to the Student Management System are welcome! To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or feedback, please contact [Venkat Dhulipalla](mailto:venkatdhulipalla21@gmail.com).

## Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [MongoDB Documentation](https://docs.mongodb.com/)
