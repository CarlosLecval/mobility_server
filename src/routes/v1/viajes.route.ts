import { Router } from "@awaitjs/express";
import { cambiarEstado, createViaje, getViaje, getViajes, verEstado } from "../../controller/v1/viajes.controller.js";
import passport from "passport";
const router = Router();

router.use(passport.authorize("jwt", { session: false }));

router.getAsync("/", getViajes);
router.getAsync("/id", getViaje);
router.postAsync("/", createViaje);
router.getAsync('/estado', verEstado);
router.postAsync('/estado', cambiarEstado);

export default router;
