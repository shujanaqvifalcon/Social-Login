/**
 * Google  controllers
 * @author Shuja Naqvi
 */
 const jwt = require("jsonwebtoken");
 const tokenSecret = process.env.JWT_SECRET;
 

 
 /**
  * 
  * @param {object} req
  * @param {object} res
  */
 exports.returnUser = async (req, res) => {
   try {
    const payload = {user:req.user} ;
 // Generating token
    jwt.sign(payload, tokenSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            // done
            res.json({ success: true, user:req.user, token });
          });
   } catch (err) {
     // Error handling
     console.log('Error ----> ', err);
     res.status(500).json({ success: false, message: 'Internal server error' });
   }
 };

 
