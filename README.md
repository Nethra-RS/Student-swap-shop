# SWAPITALL

This Project SWAPITALL aims to connect University students to sell and buy their used items. Sellers get a convenient platform to list their items, and Buyers get books and other articles at low prices, along with a chat feature to clear any queries they may have with the product.

Features and Tech Stack
ReactJs
Used this framework to build the frontend of the website as a SPA Single Page Application to procide somooth user experience.

Mongodb Atlas
Used for maintaining database of students registering on the site as well as details of all the item listings.

Node Js and Express framework
Used for building the backend server of the project.

Bcrypt Library
Used in sync with Node Js to ensure that passwords are properly hashed before being placed into the Database

Socket.io
Used to setup text Chat Application between Buyer and the seller.

JWT
Used this Authenctication System to make sure the user is logged in before accessing any personal info on the site

Run Locally
Clone the project

  git clone https://github.com/yashjoshi-dotcom/College_Bazaar.git
Go to the project directory

  cd SWAPITALL
Split the terminal to run both frontend and backend conviniently.
To Open frontend directory.

cd .\frontend\
To Open backend directory.

cd .\backend\
Install dependencies on both frontend and backend folder

  npm install
Start the frontend React application

  npm run start
Start the backend Server

  nodemon app.js
Please make sure you have config.env file setup in the backend directory. The Format is demostrated in config.env.example file.

Demo Video



