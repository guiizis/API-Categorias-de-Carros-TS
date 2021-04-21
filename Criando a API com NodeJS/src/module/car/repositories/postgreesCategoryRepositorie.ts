import { categorieModel } from "../models/categorieModel";
import { IcategoriesRepositories, ICreateCategorieInterface } from "./IcategoriesRepositories";

class postgreesCategoryRepositorie implements IcategoriesRepositories {

    create({ name, description }: ICreateCategorieInterface): void {
        console.log("teste")
        return null
    }
    listAllCategories(): categorieModel[] {
        console.log("teste")
        return null
    }
    checkIfCategorieAlReadyExist(name: string): categorieModel {
        console.log("teste")
        return null
    }

}

export { postgreesCategoryRepositorie, ICreateCategorieInterface }