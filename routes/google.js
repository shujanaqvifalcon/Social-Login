/**
 * Google Login  routes
 * @author Shuja Naqvi
 */
const router = require('express').Router();
const Google=require("../controllers/google")
const passport = require("passport");


/**
  * ////////////////////////// Routes /////////////////////////
  * @method get to get user in retturn
  */

/**
* ////////////////////////// How it works /////////////////////////
* To get logged in with google,first route will be called
* the middleware in first route will tell login strategy to return email and profile data of a user
* after  returing email then function in configureGoogle file will be called  
* that will register user in db or return existing user from db
* as we provided callback url in configureGoogle file,
* this first route will be redirected to callback url and as you can see  second route here which is actually callback url
* when callback url will run then if any-failure comes up you will be redirected to failure page (see middleware|| 2nd argument)
* if no failure then this route will return user with token  
*/
 router.get("/", passport.authenticate("google", { scope: ["email", "profile"] }))
 
 router.get("/callback",passport.authenticate("google", {failureRedirect: "/api/auth/google/failure"}),Google.returnUser)

// Export
module.exports = router;
