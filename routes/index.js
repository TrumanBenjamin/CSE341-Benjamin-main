const expresss = require('express');
const router = expresss.Router();

router.use('/contacts', require('./contacts')) 

module.exports = router;