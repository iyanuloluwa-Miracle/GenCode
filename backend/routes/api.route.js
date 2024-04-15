const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Welcome to Gen_code api 🚀' });
});

module.exports = router;
