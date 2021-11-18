const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//console.log(homeRoutes)
router.use("/", homeRoutes)
router.use("/api", apiRoutes)

module.exports = router;