Backend Zomato Orders API

A simple REST API built using Node.js, Express.js, and MySQL to manage Zomato-style food orders. The API supports fetching order data with pagination using limit and offset query parameters.

Repository: Backend_zomato_orders GitHub Repository
Live API: Backend_zomato_orders Live API

Features :
---------
Fetch food order details from MySQL database
RESTful API architecture
Pagination support using limit and offset
Environment variable configuration with .env
MySQL database integration
Error handling and validation
Ready for deployment on Render

Tech Stack :
-------------
Backend: Node.js
Framework: Express.js
Database: MySQL
Environment Management: dotenv
Deployment: Render

Project Structure :
-----------------
Backend_zomato_orders/
│---node modules
├── src/
│   └── connector.js
|   └── createDatabase.js
|   └── data.js
|   └── server.js
|   └── index.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md

Installation :
---------------
1. Clone Repository
git clone https://github.com/prajaktabramhe/Backend_zomato_orders.git
cd Backend_zomato_orders
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=zomato
DB_PORT=3306
PORT=5000

Database Setup : 
--------------
Create Database:
CREATE DATABASE zomato;
Select Database:
USE zomato;

Create Orders Table:
------------------
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    item VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2)
);

Insert Sample Data:
------------------
INSERT INTO orders (customer_name, item, quantity, price)
VALUES
('Prajakta', 'Pizza', 2, 499.99),
('Rahul', 'Burger', 1, 199.50),
('Sneha', 'Pasta', 3, 349.00),
('Amit', 'Sandwich', 2, 149.99),
('Neha', 'Biryani', 1, 299.00);
Run the Project

Development Mode:
-----------------
npm start
or
node server.js

Server starts at:
-----------------
http://localhost:5000
API Endpoints
Get Orders
Request
GET /api/orders
Pagination Example
GET /api/orders?limit=5&offset=0

Sample Response :
------------------
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "customer_name": "Prajakta",
      "item": "Pizza",
      "quantity": 2,
      "price": "499.99"
    }
  ]
}

Query Parameters:
------------------
Parameter	Description
limit	Number of records to fetch
offset	Starting position of records

Example:
/api/orders?limit=10&offset=20

This fetches 10 records starting from the 21st record.
Testing API

Using Browser:
--------------
http://localhost:5000/api/orders?limit=5&offset=0

Using Live Deployment:
---------------------
https://backend-zomato-orders.onrender.com/api/orders?limit=5&offset=0

Using Postman:

GET /api/orders?limit=5&offset=0
Deployment

The project is deployed on: Render
---------------------------------

Conclusion :
------------
This project demonstrates a backend order management system using Node.js, Express.js, and MySQL. It provides a clean REST API for retrieving order data with pagination support. The application follows a simple and scalable structure, making it a strong foundation for learning backend development, database integration, API design, and cloud deployment. A README should clearly document installation, usage, and project goals because good documentation improves project usability and maintainability.

Author :
--------
Prajakta Bramhe
