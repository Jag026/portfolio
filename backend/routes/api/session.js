const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, makeLowercase } = require('../../utils/auth');
const { User } = require('../../db/models');
const { turnstile_key } = require('../../config/index.js');

const router = express.Router();

const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
    handleValidationErrors
  ];

  
// Log in
router.post(
    '/',
    validateLogin,
    async (req, res, next) => {
      let { credential, password } = req.body;
      credential = makeLowercase(credential);
      const user = await User.login({ credential, password });
  
      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }
  );

  // Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

  // Restore session user
  router.get(
    '/',
    restoreUser,
    (req, res) => {
      const { user } = req;
      if (user) {
        return res.json({
          user: user.toSafeObject()
        });
      } else return res.json({});
    }
  );

  router.post('/verify-login', async (req, res) => {
    console.log("Hit turnstile endpoint")
    const token = req.body.token; // The token from the client-side Turnstile widget
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: turnstile_key,
        response: token,
      }),
    });
    const data = await response.json();
    
    if (data.success) {
      // The token is valid, proceed with form submission handling
      console.log("SUCESSSSSSSSSS")
      res.json({ success: true });
    } else {
      // The token is invalid or verification failed
      res.status(400).json({ success: false, message: "Captcha verification failed" });
    }
  });

    router.post('/verify-turnstile', async (req, res) => {
        const token = req.body.token; // The token from the client-side Turnstile widget
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret: turnstile_key,
                response: token,
            }),
        });
        const data = await response.json();
        console.log(["API:", data.success])
        if (data.success) {
            // The token is valid, proceed with form submission handling
            res.json({ success: true });
        } else {
            // The token is invalid or verification failed
            res.status(400).json({ success: false, message: "Captcha verification failed" });
        }
    });

module.exports = router;
