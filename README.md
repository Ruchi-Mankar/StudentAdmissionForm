# Student Admission Form
## Overview   
This project is a simple student admission form developed using HTML, CSS, Node.js, Express.js, and MariaDB. The form collects student information such as name, email, phone number, date of birth, gender, and course and stores it in a MariaDB database.  
## Technologies Used  
HTML  
CSS  
Node.js  
Express.js  
MariaDB  
## Installation and Setup  
### Prerequisites  
Node.js  
MariaDB  
### Steps  
1. Clone the repository:  
2. Create database and make tables:  
  CREATE TABLE students (  
    name VARCHAR(255) NOT NULL,  
    email VARCHAR(255) NOT NULL UNIQUE,  
    number VARCHAR(15) NOT NULL,  
    dob DATE NOT NULL,  
    gender ENUM('Male', 'Female', 'Other') NOT NULL,  
    course VARCHAR(50) NOT NULL  
  );  
3. Install the required npm packages:  
npm install express mysql2 body-parser  
4. Start the Node.js server:  
   node server.js  
5. Open index.html in a web browser to access the student admission form.



