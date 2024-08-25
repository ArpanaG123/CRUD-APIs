# CRUD Operation - Node.js (Express, MongoDB, Mongoose)

## Description
This project is a Node.js application that demonstrates CRUD operations with MongoDB. It uses Express.js as the server framework and Mongoose as the ODM (Object Data Modeling) library for MongoDB. The application includes routes for performing CRUD operations on a user model.

## Features

- **Create User:** Allows the creation of new user records with email, password, contact, and location.
- **Read User:** Retrieves user details based on the request.
- **Update User:** Updates existing user records with new data.
- **Delete User:** Removes user records from the database.
- **Password Hashing:** Passwords are securely hashed before storing in the database.
- **Error Handling:** Includes basic error handling for CRUD operations.

## Requirements

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ArpanaG123/CRUD-Operation-Nodejs.git](https://github.com/ArpanaG123/CRUD-APIs.git)

**API Endpoints**

1.Create User - Method:POST
Endpoint: /user/create
Request Body:
json
**{
  "email": "user@example.com",
  "password": "securepassword",
  "contact": "1234567890",
  "location": "City, Country"
}**

Response:
json
**{
    "message": "User details created successfully",
    "result": {
        "email": "user@example.com",
        "password": "$2b$10$t08njc8wBg3lLHmClUQ37edUvKU4A6/lmQr7XM9JvyqJtk1XhrCp6",
        "contact": 1234567890,
        "location": "City, Country",
        "_id": "65e45bff065e4ce37ac1e412",
        "__v": 0
    }
}**


2.Read User - Method:GET
Endpoint: /user/fetch
Response:
json
**{
    "message": "User details created successfully",
    "result": {
        "email": "user@example.com",
        "password": "$2b$10$t08njc8wBg3lLHmClUQ37edUvKU4A6/lmQr7XM9JvyqJtk1XhrCp6",
        "contact": 1234567890,
        "location": "City, Country",
        "_id": "65e45bff065e4ce37ac1e412",
        "__v": 0
    }
}**

3.Update User - Method:PUT
Endpoint: /user/update/:id
Request Body:
json
**{
  "email": "kashyapbaby@gmail.com",
  "password": "Admin@123",
  "contact": 6545671234,
  "location": "Bhopal",
}**

Response:
json
**{
    "message": "User details updated successfully",
    "data": {
        "_id": "65e459c0b2707ec9ccc4ff5b",
        "email": "kashyapbaby@gmail.com",
        "password": "Admin@123",
        "contact": 6545671234,
        "location": "Bhopal",
        "__v": 0
    }
}**

4.Delete User - Method:DELETE
Endpoint: /user/delete/:id
Response:
json
**{
  "message": "User deleted successfully"
}**
