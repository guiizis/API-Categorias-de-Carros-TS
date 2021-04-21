import { Router } from "express"
import { categorieRoute } from "./categories.routes"
import { specificationRoute } from "./specification.routes"

const routes = Router()

routes.use("/categories", categorieRoute)
routes.use("/specification", specificationRoute)

export { routes }