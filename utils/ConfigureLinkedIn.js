const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require("../models/Users");
const LINKEDIN_CLIENT_ID=process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET= process.env.LINKEDIN_CLIENT_SECRET;
const LINKEDIN_CALLBACK= process.env.LINKEDIN_CALLBACK;
module.exports = (passport) => {

  //Passport uses serializeUser function to persist user data (after successful authentication) into session. 
    passport.serializeUser((user, done) => {
        done(null, user.id);
     });
     //Passport deserializeUser is used to retrieve user data from session.
     passport.deserializeUser(async (id, done) => {
       const USER = await User.findById(id);
       done(null, USER);
     });
     //The Function Provided by Passport Js
     //This will use ClientID, Client-Secret after validating it will call the call-back function
     //please keep in mind this call-back url and the call-back you have set in project must be same
    passport.use(new LinkedInStrategy ({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: LINKEDIN_CALLBACK,
    passReqToCallback : true,
    scope: ['r_emailaddress', 'r_liteprofile'],
    },
    //After Successful login it will create or find  the user in db
    async (request, accessToken, refreshToken, profile, done) => {
    try {
    let existingUser = await User.findOne({ email: profile.emails[0].value });
    // if user exists return the user 
    if (existingUser) {
    return done(null, existingUser);
    }
    // if user does not exist create a new user 
    const newUser = new User({
    name: profile.displayName,
    email: profile.emails[0].value,
    photo:profile._json.profilePicture.displayImage,
    method:"linkedin",
    });
    await newUser.save();
    return done(null, newUser);
    } catch (error) {
    return done(error, false)
    }
    }
    ));
   }