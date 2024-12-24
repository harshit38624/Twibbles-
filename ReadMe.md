# Twibbles - README

Link - https://twibbles.onrender.com

## Project Overview
Twibbles is a microblogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to post short messages ("twibbles"), follow other users, and interact with content via likes, comments, and notifications. The platform supports a seamless, real-time user experience, ensuring a dynamic and engaging environment.

## Features
- **User Authentication**: Secure sign-up, login, and logout using JWT tokens.
- **Post Creation**: Users can create posts up to 280 characters and upload one image (max 5MB).
- **Likes & Retweets**: Users can interact with posts by liking and retweeting.
- **Follow/Unfollow**: Manage connections between users to stay updated on posts.
- **Notifications**: Users receive notifications for new followers, likes, and comments.
- **Responsive Design**: Fully optimized for both web and mobile experiences.

## Future Enhancements
- **Direct Messaging**: Real-time private conversations between users with text, images, and emojis.
- **Advanced Analytics**: Insights for users and brands, tracking post performance and engagement.
- **Trending Hashtags**: Displays real-time trending hashtags and allows users to explore related posts.
- **Multimedia Support**: Support for video and GIF uploads, alongside images.
- **Mobile App**: Native apps for Android and iOS with full platform functionalities, push notifications, and media upload support.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS, daisyUI.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: JSON Web Tokens (JWT).
- **Hosting**: Render for frontend and backend, MongoDB Atlas for cloud-based database storage.

## Deployment
- **Frontend**: Deployed on Render.
- **Backend**: Deployed on Render.
- **Database**: Hosted on MongoDB Atlas.
- **Version Control**: GitHub for collaboration and code management.

## Installation

### Prerequisites
- Node.js (version 14 or above)
- MongoDB Atlas account for cloud database
- GitHub account for code management

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/twibbles.git
   cd twibbles
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - **MongoDB**: Set up a MongoDB Atlas account and add the connection string to `.env` in the backend directory.
   - **JWT_SECRET**: Set a secret key for JWT token encryption in `.env`.
   - **Render Configuration**: Set up and configure Render for deployment or run locally using appropriate configurations.

5. Run the application:
   - Frontend: Run `npm start` in the frontend directory.
   - Backend: Run `npm start` in the backend directory.

6. Open the browser and navigate to `http://localhost:3000` to access the Twibbles platform.

## API Endpoints
- **POST** `/signup`: Registers a new user.
- **POST** `/login`: Authenticates and logs in a user.
- **GET** `/profile/:username`: Fetches the profile of a user.
- **POST** `/create`: Creates a new post.
- **POST** `/like/:id`: Likes or unlikes a post.
- **POST** `/follow/:id`: Follows or unfollows a user.
- **GET** `/notifications`: Retrieves notifications for the logged-in user.
- **POST** `/comment/:id`: Adds a comment to a post.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request to the main repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- MongoDB, Node.js, React.js, Tailwind CSS for their amazing frameworks and libraries.
- GitHub for version control.
