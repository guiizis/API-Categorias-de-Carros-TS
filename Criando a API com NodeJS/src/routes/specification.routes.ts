import { Router } from "express"
import { newSpecificationController } from "../module/car/useCases/createSpecification"
import { newListControllerSpecification } from "../module/car/useCases/listSpecification"


const specificationRoute = Router()


specificationRoute.post("/", (req, res) => {
    newSpecificationController.handle(req, res)
})

specificationRoute.get("/", (req, res) => {
    newListControllerSpecification.handle(req, res)
})


export { specificationRoute }