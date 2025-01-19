const expresss = require('express');
const router = expresss.router();

router.use('/contacts', require('./contacts'))

module.exports = router;