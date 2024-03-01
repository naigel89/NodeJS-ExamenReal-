import { Router } from "express";
import { home } from "../controllers/controllers.js";
import { pool } from "../db.js";
 
//inicio de enrutador y almaceno en una constante
const router = Router();
 
//rutas
router.get('/', home);
 
export default router;