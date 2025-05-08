# activity-booking-api

## Contents

- [folder Structure](#-folder-structure)
- [Setup Insturction](#setup-instructions)
- [API End PointList](#api-endpoints-list)
- [Postman Link](#postman-collection)
##  Folder Structure
```

  ├── config/          - Database configuration
  │   └── dbConnection.js
  ├── controllers/     - Business logic
  │   ├── auth.controllers.js
  │   ├── activity.controllers.js
  │   └── booking.controllers.js
  ├── models/          - MongoDB models
  │   ├── user.models.js
  │   ├── activity.models.js
  │   └── booking.models.js
  ├── routes/          - API endpoints
  │   ├── auth.routes.js
  │   ├── activity.routes.js
  │   └── booking.routes.js
  ├── middlewares/     - Custom middlewares
  │   ├── auth.js
  │
  ├── validators/     - Joi Validator
  │   ├── authValidators.js
  |   ├── activityValidators.js
  │   ├── bookingValidators.js
  │   
  ├── .env             - Environment variables
  ├── package.json
  └── server.js       - Entry point
```

##  Setup Instructions
## Setup
1. Clone repository 
2. Install dependencies: `npm install`
3. Create `.env` file
4. Start server: `npm run dev`

## Environment Variables
`MONGODB_URI` - MongoDB connection string  
`JWT_SECRET` - Secret key for JWT  
`PORT` - Server port (default: 3000)

## Run the Project

`npm run dev`



## API Endpoints List

### Authentication

### Register a New User

| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| POST   | /api/auth/register  | Register new user |

**Request Body:**
```json
{
    "firstName": "nilesh",
    "lastName": "tiwari",
    "email": "nilu@gmail.com",
    "password": "secure_123",
    "phone": "9876543210"
}
```
*Response :*
```json
{
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFjNWViZTM1MWZjOTc0OTFkOTMwZDUiLCJlbWFpbCI6Im5pbHVAZ21haWwuY29tIiwiaWF0IjoxNzQ2Njg5NzI2LCJleHAiOjE3NDY2OTMzMjZ9.fn6VqJwRe4CJsP5DPx7OU4FfRi30L8sl0rB1G5gP9Lg",
    "user": {
        "fullName": {
            "firstName": "nilesh",
            "lastName": "tiwari",
            "_id": "681c5ebe351fc97491d930d6"
        },
        "email": "nilu@gmail.com",
        "password": "$2b$10$MNFCMftngr1njLmtP7iKr.A9U/zoixWFx1XoRRzlyWxHlnuFuKI06",
        "phone": "9876543210",
        "_id": "681c5ebe351fc97491d930d5",
        "__v": 0
    }
}
```
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| POST   | /api/auth/login  | LogIn User |

**Request Body:**
```json
{
    "email": "nilesh.kumar@example.com",
    "password": "StrongPassword123!"
}
```
**Response:**
```json
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFjNWViZTM1MWZjOTc0OTFkOTMwZDUiLCJlbWFpbCI6Im5pbHVAZ21haWwuY29tIiwiaWF0IjoxNzQ2Njg5OTA4LCJleHAiOjE3NDY2OTM1MDh9.7_KEHS2lZFoBfWGoWg1oYv6zcSKgpWy5IwDT2eaCL7U",
    "user": {
        "_id": "681c5ebe351fc97491d930d5",
        "fullName": {
            "firstName": "nilesh",
            "lastName": "tiwari",
            "_id": "681c5ebe351fc97491d930d6"
        },
        "email": "nilu@gmail.com",
        "phone": "9876543210",
        "__v": 0
    }
}
```

## Activities

### List All Activities

| Method | Endpoint         | Description         | Headers/Body |
|--------|------------------|---------------------|--------------|
| GET    | /api/activities  | List all activities | None         |

---
**Response:**
```json
{
    "message": "Activities fetched successfully",
    "status": true,
    "data": [
        {
            "_id": "681c31754b50773a0684e6c8",
            "title": "Morning Yoga",
            "description": "A relaxing yoga session in the park.",
            "location": "Hyderabad",
            "dateTime": "2025-05-08T04:22:13.350Z",
            "__v": 0
        },
        {
            "_id": "681c33a14b50773a0684e6ca",
            "title": "Team Building Workshop",
            "description": "An interactive session to enhance collaboration skills.",
            "location": "Tech Park, Conference Room B",
            "dateTime": "2025-05-08T04:31:29.061Z",
            "__v": 0
        },
        {
            "_id": "681c33f04b50773a0684e6cc",
            "title": "Football Match",
            "description": "Champions League Final: Real Madrid vs Manchester City",
            "location": "Wembley Stadium",
            "dateTime": "2025-05-08T04:32:48.661Z",
            "__v": 0
        },
        {
            "_id": "681c341e4b50773a0684e6ce",
            "title": "Football Match",
            "description": "Champions League Final: Real Madrid vs Manchester City",
            "location": "Kolkata",
            "dateTime": "2025-05-08T04:33:34.847Z",
            "__v": 0
        },
        {
            "_id": "681c342e4b50773a0684e6d0",
            "title": "Movie Screening",
            "description": "Avengers: Secret Wars - Special Premiere",
            "location": "PVR Cinemas",
            "dateTime": "2025-05-08T04:33:50.878Z",
            "__v": 0
        },
        {
            "_id": "681c345a4b50773a0684e6d2",
            "title": "Live Music Concert",
            "description": "Ed Sheeran performing live in Mumbai",
            "location": "Jio World Garden",
            "dateTime": "2025-05-08T04:34:34.686Z",
            "__v": 0
        },
        {
            "_id": "681c34674b50773a0684e6d4",
            "title": "Coding Hackathon",
            "description": "Tech marathon where programmers compete",
            "location": "Google Campus",
            "dateTime": "2025-05-08T04:34:47.765Z",
            "__v": 0
        },
        {
            "_id": "681c4e5e75078dc11bff9588",
            "title": "Coding Hackathon",
            "description": "Tech marathon where programmers compete",
            "location": "Google Campus",
            "dateTime": "2025-05-08T06:25:34.737Z",
            "__v": 0
        }
    ]
}
```

### Create Activity

| Method | Endpoint             | Description        | Headers/Body |
|--------|----------------------|--------------------|--------------|
| POST   | /api/activity/create | Create an activity | JSON body    |

**Request Body:**
```json
{
  "title": "Coding Hackathon",
  "description": "Tech marathon where programmers compete",
  "location": "Google Campus"
}
```
**Response:**
```json

 {
    "message": "Activity created successfully",
    "status": true,
    "data": {
        "title": "Coding Hackathon",
        "description": "Tech marathon where programmers compete",
        "location": "Google Campus",
        "dateTime": "2025-05-08T07:41:19.200Z",
        "_id": "681c601fb3643ce2b8436435",
        "__v": 0
    }
}

```

## Bookings

### Create a New Booking

| Method | Endpoint        | Description        | Headers                     |
|--------|-----------------|--------------------|-----------------------------|
| POST   | /api/booking/book   | Create new booking | Authorization: Bearer <token> |

**Request Body:**
```json
{
  "activityId": "65d2f7a8b4c..."
}
```
```json
{
    "message": "Booking created successfully",
    "status": true,
    "booking": {
        "user": "681c5ebe351fc97491d930d5",
        "activity": "681c34674b50773a0684e6d4",
        "_id": "681c606db3643ce2b8436438",
        "bookingDate": "2025-05-08T07:42:37.291Z",
        "createdAt": "2025-05-08T07:42:37.292Z",
        "updatedAt": "2025-05-08T07:42:37.292Z",
        "__v": 0
    }
}
```
### Get user booking
| Method | Endpoint      | Description       | Headers                       |
| ------ | ------------- | ----------------- | ----------------------------- |
| GET    | /api/booking/get | Get user bookings | Authorization: Bearer <token> |

**Response**
```json
{
    "message": "Bookings fetched successfully",
    "status": true,
    "bookings": [
        {
            "_id": "681c606db3643ce2b8436438",
            "user": "681c5ebe351fc97491d930d5",
            "activity": {
                "_id": "681c34674b50773a0684e6d4",
                "title": "Coding Hackathon",
                "description": "Tech marathon where programmers compete",
                "location": "Google Campus",
                "dateTime": "2025-05-08T04:34:47.765Z"
            },
            "bookingDate": "2025-05-08T07:42:37.291Z",
            "createdAt": "2025-05-08T07:42:37.292Z",
            "updatedAt": "2025-05-08T07:42:37.292Z",
            "__v": 0
        }
    ]
}
```

##  Postman Collection

[Postman Collection Link](https://appleorchard.postman.co/workspace/Team-Workspace~181af898-3642-499e-84e9-246b45fd2e88/collection/31995022-9f384757-17c7-4acb-90f4-e07aa5e9dc15?action=share&creator=31995022)  






