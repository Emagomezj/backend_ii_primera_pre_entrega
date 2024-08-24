import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware.js";
import UserManager from "../managers/user.manager.js";
import { handleError } from "../middlewares/error.middleware.js";

const router = Router();
const userManager = new UserManager();

router.get("/", checkAuth, async (req, res, next) => {
    try {
        const userFound = await userManager.getOneById(req.id);
        res.render("userInfo", { userInfo: { firstName: userFound.firstName, lastName: userFound.lastName, email: userFound.email, roles: req.roles } });
    } catch (error) {
        next(error);
    }
});
router.use(handleError);

export default router;