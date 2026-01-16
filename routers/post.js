import express from "express";
import monumentoController from "../controllers/monumentoController.js"

const router = express.Router();

//index
router.get("/", monumentoController.index)

//SHOW
router.get("/:id", monumentoController.show)

//STORE
router.post("/", monumentoController.store)

//UPDATE
router.put("/:id", monumentoController.update)

//MODIFY
router.patch("/:id", monumentoController.modify)

//DESTROY
router.delete("/:id", monumentoController.destroy)


export default router;