/**
 * Facebook Login  routes
 * @author Shuja Naqvi
 */
 const router = require('express').Router();
 const Facebook=require("../controllers/facebook")
 const passport = require("passport");
 
 /**
  * ////////////////////////// Routes /////////////////////////
  * @method get to get user in retturn
  */


 /**
  * ////////////////////////// How it works /////////////////////////
  * To get logged in with fb,first route will be called
  * the middleware in first route will tell login strategy to return email of a user
  * after  returing email then configureEmail function will be called  
  * that will register user in db or return existing user from db
  * as we provided callback url in configureFacbook file,
  * this route will be redirected to callback url and as you can see  second route here which is actually callback url
  * when callback url will run then if any-failure comes up you will be redirected to failure page (see middleware)
  * if no failure then this route will return user with token  
  */

  router.get("/",passport.authenticate("facebook", {
    scope: [ "email" ], // scope goes here, not below
}))
  
  router.get("/callback",passport.authenticate("facebook", {failureRedirect: "/api/auth/facebook/failure"}),Facebook.returnUser)
 
 // Export
 module.exports = router;
 