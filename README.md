# Quote Share - A Next.js, MongoDB, and Google Auth Web Application !
Quote Share is a platform where users can share their favorite quotes with the world. Built using Next.js, MongoDB, and Google Authentication, it offers an intuitive user experience combined with the power and flexibility of modern web technologies. 
## Features - 
**User Authentication:** Securely sign in using Google Auth. - 
**CRUD Operations:** Create, Read, Update, and Delete your favorite quotes. - 
**Responsive Design:** Looks great on both mobile and desktop devices. - 
**User Profiles:** View and manage your collection of quotes. 
## Getting Started 
### Prerequisites - 
Node.js - MongoDB instance (locally or cloud-based like MongoDB Atlas) - 
Google OAuth Credentials (from [Google Cloud Console](https://console.cloud.google.com/)) 

### Installation & Setup 
1. **Clone the repository** ```bash git clone https://github.com/aravind-allamneni/quotevault.git cd quote-share ``` 
2. **Install dependencies** ```bash npm install ``` 
3. **Setup Environment Variables** You'll need to setup a `.env.local` file in the root of your project with the following variables: ```env 
    MONGODB_URI=<YOUR_MONGODB_URI>  
    GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID> 
    GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET> 
    NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>
    NEXTAUTH_URL=<http://localhost:3000>
    NEXTAUTH_URL_INTERNAL=<http://localhost:3000>
    ``` Replace the placeholders with your MongoDB connection string and Google OAuth credentials. 
4. **Run the Development Server** ```bash npm run dev ``` This will start your Next.js app on [http://localhost:3000](http://localhost:3000). 

## Contribution If you'd like to contribute to the project, please create a fork and submit a pull request. All contributions are welcome! 
    1. Fork the Project 
    2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`) 
    3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`) 
    4. Push to the Branch (`git push origin feature/AmazingFeature`) 
    5. Open a Pull Request 

## License This project is licensed under the MIT License. See `LICENSE` file for more details. 
## Acknowledgements - 
[Next.js Documentation](https://nextjs.org/docs) - 
[MongoDB Official Docs](https://docs.mongodb.com/) - 
[Google Auth for Node.js](https://github.com/googleapis/google-auth-library-nodejs) --- 

Made with ❤️: by [Aravind Allamneni](https://github.com/aravind-allamneni).