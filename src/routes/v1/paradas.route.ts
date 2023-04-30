import { Router } from "@awaitjs/express";
import {
  getParadaTransporte,
  getParadas,
  getSiguienteParada,
  updateSiguienteParada,
} from "../../controller/v1/paradas.controller.js";
const router = Router();

router.getAsync("/all", getParadas);
router.getAsync("/siguiente", getSiguienteParada);
router.putAsync("/siguiente", updateSiguienteParada);
router.getAsync("/transporte/:id", getParadaTransporte);

export default router;
