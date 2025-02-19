const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, makeLowercase } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Subscription } = require('../../db/models');
const {fetchAi} = require("../../utils/fetchAi");

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

  //Add Subscription
  router.post(
    '/create-subscription',
    async (req, res) => {
        const { user_id, subscription_type_id } = req.body;
        const subscription = await Subscription.createSubscription({ user_id, subscription_type_id });
        return res.json({
            subscription
        });
    }
  )

  //Get Subscription
  router.get(
    '/get-subscription/:subscription_id',
    async (req, res) => {
        try {
            const subscription_id = req.params.subscription_id;
            const subscription = await Subscription.getCurrentSubscriptionById(subscription_id);

            if (subscription) {
                return res.json({ subscription })
            } else {
                res.status(404).send('Subscription Not Found')
            }
        } catch(error) {
            console.error('Error fetching subscription', error)
            res.status(500).send('Subscription: Server Error')
        }
    })
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

module.exports = router;
