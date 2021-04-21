import { categorieModel } from "../../models/categorieModel"
import { CreateCategorieRepositorie } from "../../repositories/implementations/catagerorieRepositorie"

class listCategoriesService {

    constructor(private repositore: CreateCategorieRepositorie) { }

    execute(): categorieModel[] {
        const categories = this.repositore.listAllCategories()
        return categories

    }
}

export { listCategoriesService }


