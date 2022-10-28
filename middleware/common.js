/**
 * Common middleware that we have to use by default every time
 * @author Shuja Naqvi
 */
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require("passport");
const session = require("express-session");
// Common Middleware
module.exports = (app) => {
  // After you declare "app"
  app.use(session({ secret: process.env.SESSION_SECRET}));  
  app.use(cors({ origin: process.env.ORIGIN })); // CORS (Cross Origin Policy) to restrict unknown requests
  app.use(logger('dev')); // Morgan - to log every request in console
  app.use(express.urlencoded({ extended: true })); // to get url encoded data from requests
  app.use(express.json()); // to send json data in response (It's mandatory in rest api's)
  app.use('/uploads', express.static('uploads', { maxAge: '31536000' })); // Static path to serve uploaded images with cache policy
  app.use(passport.initialize());
  app.use(passport.session());
  //Google Configure
  require("../utils/ConfigureGoogle")(passport);
  //Facebook Configure
  require("../utils/ConfigureFacebook")(passport);
  //LinkedIn Configuration
  require("../utils/ConfigureLinkedIn")(passport);
};
