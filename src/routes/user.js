const router = require('express').Router();

router.get("/", (req, res)=> {
    res.render('layout', {myProfile: "Mi perfil"})
})

module.exports = router;