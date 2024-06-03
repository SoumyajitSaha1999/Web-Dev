const {Router} = require("express");
const authControlers = require("../controlers/authControlers");
const router = Router();

router.get("/signup", authControlers.signup_get);
router.get("/login", authControlers.login_get);
router.post("/signup", authControlers.signup_post);
router.post("/login", authControlers.login_post);
router.get("/logout",authControlers.logout_get)

module.exports = router;


