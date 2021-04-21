import { CreateCategorieRepositorie } from "../../repositories/implementations/catagerorieRepositorie";
import { listCategoriesController } from "./listCategorieController";
import { listCategoriesService } from "./listCategorieService";

const listRepositories = CreateCategorieRepositorie.getInstance()

const listService = new listCategoriesService(listRepositories)

const listController = new listCategoriesController(listService)

export { listController }