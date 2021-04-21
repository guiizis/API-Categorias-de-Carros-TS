import express from "express"
import { routes } from "./routes/_index"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.json"

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(routes)

app.listen(3333, () => console.log("is running"))