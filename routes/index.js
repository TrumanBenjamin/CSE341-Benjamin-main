const expresss = require('express');
const router = expresss.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;