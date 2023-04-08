require('dotenv').config();

const express = require('express');
const fs = require('fs/promises');

const app = express();

// ? prefix http://localhost:3001/api/user/new

// ! RESTful API Servers: all about HTTP verbs like GET, POST, PATCH, PUT, DELETE, among others but those are top 5 you will need to know, can use with express app instance var above ^
app.post('/api/user/new', async (req, res) => {
  // ? look in your terminal: req/res are big objects but you will mostly be using req.body, req.params, req.headers, req.session, res.status, res.send, res.render, res.json...
  console.log(req, res);
  try {
    // ! try to create the user with whatever is in req body but check the properties to make sure what we need exists & has the right typeof values, etc..
    if (!req.body) {
      res.status(400).json({ message: '..?' });
      return; // ? return to stop code execution here
    }

    const db = await fs?.readFile(); // ! use await keyword on anything that returns promises to assign to variables, return from, etc... read db.json, then write to db.json, check to make sure it was successfull... was is successful..? then send 200 status with res object

    // ? what should we do next..?
    if (db) {
    }
    if (!db) {
    }
  } catch (err) {
    console.log(err); // ! console log things out, nodejs will log to your terminal now, comment your code more it is === taking notes
    res.status(500).send('Internal Server Error!');
  }
});

// ! at the very end of the apps entry file, we use listen method, pass it localhost port number from env file dynamically, callback function that gives us nice info log
app.listen(PORT, () =>
  console.info(
    `NodeJS Express server running in ${process.env.NODE_ENV}  environment & listening for HTTP requests, changes to files @ http://localhost:${process.env.}`
  )
);
