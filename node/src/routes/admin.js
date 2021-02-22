const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/users', verify, async (req, res) => {
    const admin = await User.findOne({role: "admin"});
    if(!admin)
    res.send("You need to sign in as an admin");
});



module.exports = router;