import { Router } from "express";
import { crearColores, obtenerColores } from "../controllers/color.controller";

const router = Router();

// metodos get(con su controller),post(con su controller)
router.route("/color").get(obtenerColores).post(crearColores);

export default router;
