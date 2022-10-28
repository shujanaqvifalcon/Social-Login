/**
 * All api routes handles here
 * @author Shuja Naqvi
 */
const router = require('express').Router();

// Parent Routes check all routes to get know how all of them are actually working

router.use('/auth/google', require('./google')); // All the GOOGLE routes 
router.use('/auth/facebook', require('./facebook')); // All the FACEBOOK routes
router.use('/auth/linkedin', require('./linkedin')); // All the LinkedIn routes


// Export
module.exports = router;
