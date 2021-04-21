import { categorieModel } from '../../models/categorieModel'
import { IcategoriesRepositories, ICreateCategorieInterface } from '../IcategoriesRepositories'


class CreateCategorieRepositorie implements IcategoriesRepositories {

    static INSTANCE: CreateCategorieRepositorie

    private categories: categorieModel[]

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CreateCategorieRepositorie {

        if (!CreateCategorieRepositorie.INSTANCE) {
            CreateCategorieRepositorie.INSTANCE = new CreateCategorieRepositorie()
        }

        return CreateCategorieRepositorie.INSTANCE

    }

    create({ name, description }: ICreateCategorieInterface): void {
        const categorie = new categorieModel()

        Object.assign(categorie, {
            name,
            description,
            createdAt: new Date()
        }
        )
        this.categories.push(categorie)
    }

    listAllCategories(): categorieModel[] {
        return this.categories
    }

    checkIfCategorieAlReadyExist(name: string): categorieModel {
        const categoryCheck = this.categories.find(categorie => categorie.name == name)
        return categoryCheck
    }
}

export { CreateCategorieRepositorie }