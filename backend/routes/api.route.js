const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Welcome to Gen_code api 🚀' });
});


router.post('/signup', authController.signupUser);
router.post('/login', authController.signInUser);

module.exports = router;
