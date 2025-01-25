// routes/auth.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const passport = require('passport');
const authController = require('../controllers/auth-controller');

// Existing routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:resetToken', authController.resetPassword);

// Add verify token route - using existing auth middleware
router.get('/verify-token', auth, (req, res) => {
    // If we reach here, token is valid (auth middleware passed)
    res.status(200).json({
        valid: true,
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
});

// Google OAuth routes
router.get('/google', authController.googleAuth);
/*router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: "/login",
        session: false
    }),
    authController.googleCallback
);*/
router.get('/google/callback', (req, res, next) => {
    console.log('Google callback reached', req.url);
    next();
}, passport.authenticate('google', { session: false }), authController.googleCallback);

module.exports = router;