import { Router } from "express";
import {
    borrarColor,
    crearColores,
    obtenerColores,
} from "../controllers/color.controller";

const router = Router();

// metodos get(con su controller),post(con su controller)
router.route("/color").get(obtenerColores).post(crearColores);

router.route("/color/:id").delete(borrarColor);

export default router;
