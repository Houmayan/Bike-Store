import { Router } from "express";
import { bikesController } from "./bikes.controller";
const router = Router();

router.post("/create-student", bikesController.createProduct);

export const studentRoutes = router;
