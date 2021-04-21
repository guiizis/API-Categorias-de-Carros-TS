import { CreateCategorieRepositorie } from "../../repositories/implementations/catagerorieRepositorie";
import { uploadCategoriesController } from "./uploadCategoriesController";
import { createUploadCategoriesService } from "./uploadCategoriesService";


const CategoryRepositore = CreateCategorieRepositorie.getInstance()

const createUploadService = new createUploadCategoriesService(CategoryRepositore)

const createUploadController = new uploadCategoriesController(createUploadService)

export { createUploadController }