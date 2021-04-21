import { Router } from 'express';
import { createController, createRepository } from '../module/car/useCases/createCategories';
import multer from "multer"
import { listController } from '../module/car/useCases/listCategories';
import { createUploadController } from '../module/car/useCases/uploadCategories';


const upload = multer({
    dest: "./tmp"
})
const categorieRoute = Router()

categorieRoute.post("/", (req, res) => {
    return createController.handle(req, res)
})

categorieRoute.get("/", (req, res) => {
    return listController.handle(req, res)
})

categorieRoute.post("/upload", upload.single('file'), (req, res) => {
    createUploadController.handle(req, res)
})



export { categorieRoute }
