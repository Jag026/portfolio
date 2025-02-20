const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, makeLowercase } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Subscription } = require('../../db/models');
const {fetchAi, fetchAiAbout, sendResume, sendMessage} = require("../../utils/fetchAi");

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
      try {
        let { username, first_name, last_name, email, password } = req.body;
        email = await makeLowercase(email);
        username = await makeLowercase(username);
        const user = await User.signup({ username, first_name, last_name, email, password });
        await setTokenCookie(res, user);
        return res.json({
            user
        });
      } catch(error) {
        console.error('Error processing user signup.', error);
        res.status(500).send('Error processing user signup.')
      }
    }
  );

    router.post(
        '/post-ai-message',
        async (req, res) => {
            const { message } = req.body;
            console.log(message)
            try {
                const response = await fetchAi(message);
                res.json({response});
            } catch (error) {
                console.log(error)
            }
        }
    )

    router.post(
        '/post-ai-about',
        async (req, res) => {
            const { message } = req.body;
            console.log(message)
            try {
                const response = await fetchAiAbout(message);
                res.json({response});
            } catch (error) {
                console.log(error)
            }
        }
    )

    router.post(
        '/send-resume',
        async (req, res) => {
            const { name, email } = req.body;
            try {
                const response = await sendResume(name, email);
                res.json({response});
            } catch (error) {
                console.log(error)
            }
        }
    )

    router.post(
        '/send-message',
        async (req, res) => {
            const { name, email, message } = req.body;
            console.log(message)
            try {
                const response = await sendMessage(name, email, message);
                res.json({response});
            } catch (error) {
                console.log(error)
            }
        }
    )


module.exports = router;
