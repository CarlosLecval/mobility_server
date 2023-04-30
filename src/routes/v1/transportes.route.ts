import { Router } from "@awaitjs/express";
import { getRutaTransporte, getTransporte, getTransportesRuta } from "../../controller/v1/transportes.controller.js";
const router = Router();

router.getAsync('/', getTransportesRuta);
router.getAsync('/id', getTransporte);
router.getAsync('/ruta', getRutaTransporte);

export default router;
