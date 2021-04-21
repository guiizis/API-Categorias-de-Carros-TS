import { CreateCategorieRepositorie } from "../../repositories/implementations/catagerorieRepositorie";
import { createCategorieController } from "./createCategorieController";
import { CreateCategorieService } from "./createCategorieService";

const createRepository = CreateCategorieRepositorie.getInstance()

const createService = new CreateCategorieService(createRepository)

const createController = new createCategorieController(createService)

export { createController, createRepository }