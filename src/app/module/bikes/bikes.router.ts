import { Router } from "express";
import { bikesController } from "./bikes.controller";
const router = Router();

router.post("/create-products", bikesController.createProduct);
router.get("/get-products", bikesController.getSingleProduct);
router.get("/get-products/:userId", bikesController.getSingleProduct);
router.put("/update-products/:userId", bikesController.updateProduct);
router.delete("/delete-products/:userId", bikesController.deleteProduct);

export const studentRoutes = router;
