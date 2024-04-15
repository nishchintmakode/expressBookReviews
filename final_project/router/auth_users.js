const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
    return users.every(user => user.username !== username);
  }
  
const authenticatedUser = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
}  

//only registered users can login
regd_users.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
      return res.status(401).json({ message: 'Error logging in. No username/password provided' });
    }
  
    if (authenticatedUser(username, password)) {
      let accessToken = jwt.sign({
        data: password
      }, 'access', { expiresIn: 60 * 60 });
  
      req.session.authorization = {
        accessToken, username
      }
      return res.status(200).json({ message: 'User successfully logged in' });
    } else {
      return res.status(401).json({ message: 'Invalid Login. Check username and password' });
    }
});

// Add a book review
regd_users.put('/auth/review/:isbn', (req, res) => {
    const username = req.session.authorization.username;
    const review = req.query.review;
    const book = books[req.params.isbn];
  
    if (!review) {
      return res.status(400).json({ message: 'Bad request. No review provided' });
    }
  
    const isNewReview = !book.reviews[username];
    book.reviews[username] = review;
  
    return res.status(200).json({ message: `Review was ${isNewReview ? 'added' : 'updated'}` });
  });
  
  // Delete a book review
  regd_users.delete('/auth/review/:isbn', (req, res) => {
    const username = req.session.authorization.username;
    const isbn = req.params.isbn;
  
    delete books[isbn].reviews[username];
  
    return res.status(200).json({ message: 'Review was deleted' });
  });

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
