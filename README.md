#     Authentication System with Node.js and Express


This project is a robust, full-stack authentication system developed using Node.js, Express, MongoDB, and JSON Web Tokens (JWT). It features user registration, secure authentication, and role-based access control. The system is designed with security best practices in mind, ensuring user data protection and secure authentication flows.


## Demo

https://registration-form-17qr.onrender.com/


## Features

- Secure User Registration
- JWT Authentication
- Protected Routes
- Role-Based Access Control (RBAC)
- Error Handling
- Environment Configuration


## Usage/Examples


1. Navigate to http://localhost:3000 to access the registration form.

2. Register a new user and log in using the credentials.

3. Access protected routes to test authentication and authorization.



## API Endpoints

### Authentication Endpoints
#### Register a new user :

```http
  POST /api/register
```


#### Request Body:

```json
 {
  "firstName": "John",
  "lastName": "Doe",
  "gender": "male",
  "email": "john.doe@example.com",
  "password": "password123",
}
```
#### Response:
```http
{
  "success": true,
  "message": "Successfully registered",
  "newUser": {
    "firstName": "John",
    "lastName": "Doe",
    "gender": "male",
    "email": "john.doe@example.com",
    "password": "$2b$10$...",
    "createdAt": "2023-12-12T00:00:00.000Z",
    "updatedAt": "2023-12-12T00:00:00.000Z",
    "_id": "60c72b2f9b1d4c3a6d8d4f5b"
  }
}

```



### Protected Endpoints
#### Access a Protected Route : 
```http
GET /users
```
#### Headers:
```http
{
  "Authorization": "Bearer your_jwt_token"
}

```
#### Response : 
```http
 {
  "message": "You have accessed a protected route"
}
```




## Environment Variables

Set up environment variables:
 Create a .env file in the root directory.   
     Add the following variables:

`MONGO_URI` :  your_mongodb_uri

`JWT_SECRET` : your_jwt_secret


## Run Locally

Clone the project

```bash
  git clone https://github.com/sauravkamble5/registration-form.git
```

Go to the project directory

```bash
  cd registration-form
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Roadmap

```
registration-form/
├── config/
│   └── db.js               # Database connection setup
├── models/
│   └── User.js             # User model schema
├── routes/
│   ├── authRoutes.js       # Authentication routes
│   └── protectedRoutes.js  # Routes requiring authentication
├── middleware/
│   └── authMiddleware.js   # Authentication and authorization middleware
├── pages/
│   ├── register.html       # Registration form page
│   └── errorPage.html      # Error page
├── .env                    # Environment variables
├── .gitignore              # Ignored files
├── index.js                # Main server file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```


## Contributing

Contributions are always welcome!
``` html
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4.Commit your changes (git commit -am 'Add new feature').
5.Push to the branch (git push origin feature-branch).
6.Create a new Pull Request.

```
