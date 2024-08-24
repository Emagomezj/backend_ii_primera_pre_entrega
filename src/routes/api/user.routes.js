import { Router } from "express";
import UserManager from "../../managers/user.manager.js";

import { checkAuth } from "../../middlewares/auth.middleware.js";
import { handleError } from "../../middlewares/error.middleware.js";

const router = Router();
const userManager = new UserManager;

router.get("/", async (req, res, next) => {
    try {
        const users = await userManager.getAll(req.query);
        res.status(200).send({ status:true, payload: users });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const createdUser = await userManager.insertOne(req.body);
        res.status(200).send({ status:true, payload:createdUser });
    } catch (error) {
        next(error);
    }
});

router.get("/current", checkAuth, (req, res, next) => {
    try {
        res.status(200).send({ status:true, payload:{ id: req.id, roles: req.roles } });
    } catch (error) {
        next(error);
    }
});
router.use(handleError);

export default router;