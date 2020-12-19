<h1 align="center">
🌐 job website
</h1>
<p align="center">
MongoDB, Expressjs, Reactjs, Nodejs
</p>


> This is a website where people can search for jobs and can start their carrier according to their intrests.

MERN stack technologies are used for the development.

## clone or download
```terminal
$ git clone https://github.com/aliimraan/corporateworld.git
$ npm i
```

## project structure
```terminal
corporateworld
  frontend
    backend
    package.json
    public
    src
      components
      App.js
    ....
      
    
```

# Usage (run corporateworld app on your machine)

## Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need frontend and backend runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd frontend   // go to client folder
$ npm i       // npm install pacakges

// start the frontend app
$ npm start  // this will compile the react code and start the server on localhost:3000

```

## Server-side usage(PORT: 4000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
we are not commiting the secret keys because of security reason. we will provide you this privately.
After getting the secret keys you all need to do is to create a .env file as a child of backend folder
and save the changes
```

### Start

```terminal
$ cd frontend         // navigating to backend folder
$ cd backend          // go to server folder
$ npm i               // npm install pacakges
$ npm i -g -s nodemon // to install nodemon for auto refreshing
$ nodemon server.js  //backend server will start on port 4000
```

<h3>After starting of both the terminals check the browser .
  If any package is required install it and if not then enjoy the app </h3>

<h1 align="center">Thank You</h1>




