const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin } = require('../controllers/auth');

//add the follwoing lines once validation files are set up
// validators
const { runValidation } = require('../validators/');
const { userSignupValidator, userSigninValidator } = require('../validators/auth');


//router.post('/signup', signup);

//use validators
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);

// test
 //router.get('/secret', requireSignin, (req, res) => {
  //   res.json({
        // message: 'you have access to secret page'
       //  user: req.user
    // });
// });



module.exports=router;
