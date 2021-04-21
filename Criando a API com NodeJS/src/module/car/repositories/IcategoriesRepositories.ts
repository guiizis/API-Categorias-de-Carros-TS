import { categorieModel } from "../models/categorieModel"

interface ICreateCategorieInterface {
    name: string;
    description: string;
}

interface IcategoriesRepositories {
    create({ name, description }: ICreateCategorieInterface): void;
    listAllCategories(): categorieModel[];
    checkIfCategorieAlReadyExist(name: string): categorieModel;
}

export { IcategoriesRepositories, ICreateCategorieInterface }