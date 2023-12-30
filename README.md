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
## Screenshots  
<img width="1437" alt="Screenshot 2023-12-30 at 10 07 57 PM" src="https://github.com/Ruchi-Mankar/StudentAdmissionForm/assets/114324342/2817e3f7-09f4-4f50-93ae-514e7d2ba179">  
<img width="1437" alt="Screenshot 2023-12-30 at 10 15 50 PM" src="https://github.com/Ruchi-Mankar/StudentAdmissionForm/assets/114324342/75605a21-0233-4c63-99a1-034086599a85">  
<img width="1440" alt="Screenshot 2023-12-30 at 10 21 53 PM" src="https://github.com/Ruchi-Mankar/StudentAdmissionForm/assets/114324342/137db072-5a9f-4b85-a3fa-d54e3d151581">  
<img width="1440" alt="Screenshot 2023-12-30 at 10 21 00 PM" src="https://github.com/Ruchi-Mankar/StudentAdmissionForm/assets/114324342/880aaee1-d4be-450c-b9d3-ebef5d8d7ed8">  



