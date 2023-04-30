import { Router } from "@awaitjs/express";
import { createViaje, getViaje, getViajes } from "../../controller/v1/viajes.controller.js";
import passport from "passport";
const router = Router();

router.use(passport.authorize("jwt", { session: false }));

router.getAsync("/", getViajes);
router.getAsync("/id", getViaje);
router.postAsync("/", createViaje);

export default router;
