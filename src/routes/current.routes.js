import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware.js";
import UserManager from "../managers/user.manager.js";
import { handleError } from "../middlewares/error.middleware.js";

const router = Router();
const userManager = new UserManager();

router.get("/", checkAuth, async (req, res) => {
    try {
        const userFound = userManager.findOneById(req.id);
        res.render("userInfo", { userFound });
    } catch (error) {
        next(error);
    }
});
router.use(handleError);

export default router;