 
# Friend Request App Focus Bear Hackathon (React Native + NestJS)

This project implements a friend request system using **React Native** for the frontend and **NestJS** for the backend. Users can send, accept, and reject friend requests via the mobile app, which communicates with the NestJS API.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Setup (NestJS)](#backend-setup-nestjs)
  - [Install Dependencies](#install-dependencies)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [Frontend Setup (React Native)](#frontend-setup-react-native)
  - [Install Dependencies](#install-dependencies-frontend)
  - [Running the App](#running-the-app)
 

---

## Prerequisites

- **Node.js**: Version 20.x or later
- **npm**: Version 6.x or later
- **PostgreSQL**: Version 16.x or later
- **React Native CLI**: If you're using React Native CLI (not Expo)
- **Android/iOS Emulator or Physical Device**

---

## Backend Setup (NestJS)

The backend is a **NestJS** server that handles friend requests (sending, accepting, and rejecting).

### Install Dependencies

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/srahnama/Focus-Bear-hackathon.git
   cd backend
   ```
2. 
### Plan

1. **Project Title and Description**: Provide a brief overview of the project.
2. **Table of Contents**: List the main sections of the README.
3. **Prerequisites**: List the required software and versions.
4. **Backend Setup (NestJS)**: Provide steps to set up the backend.
   - Install dependencies
   - Running the server
   - API endpoints
5. **Frontend Setup (React Native)**: Provide steps to set up the frontend.
   - Install dependencies
   - Running the app
6. **Usage**: Explain how to use the app.
7. **Contributing**: Guidelines for contributing to the project.
8. **License**: Information about the project's license.

### Code
 
 
 
## Backend Setup (NestJS)

The backend is a **NestJS** server that handles friend requests (sending, accepting, and rejecting).

### Install Dependencies

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/srahnama/Focus-Bear-hackathon.git
   cd server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Start the PostgreSQL database.
2. Configure the database connection in `.env`.
3. Run the server:
   ```bash
   npm start
   ```

### API Endpoints

 

#### User Management
- `GET /users`: Retrieve all users.
- `GET /users/:id`: Retrieve a specific user by ID.
- `POST /users`: Create a new user.
- `DELETE /users/:id`: Delete a user by ID.

#### Friend Requests
- `POST /friend-requests/send`: Send a friend request.
- `POST /friend-requests/accept/:id`: Accept a friend request by ID.
- `DELETE /friend-requests/reject/:id`: Reject a friend request by ID.
- `GET /friend-requests/received/:userId`: Retrieve all received friend requests for a specific user.
## Frontend Setup (React Native)

The frontend is a **React Native** app that allows users to interact with the friend request system.

### Install Dependencies

1. Navigate to the frontend folder:
   ```bash
   cd client
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the React Native development server:
   ```bash
   npx expo start
   ```
 

## Usage

1. Open the app on your device.
2. Send, accept, or reject friend requests.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
 