
import { IcategoriesRepositories } from '../../repositories/IcategoriesRepositories'


interface IRequestCreateCategorie {
    name: string;
    description: string

}

class CreateCategorieService {

    constructor(private repositore: IcategoriesRepositories) { }

    execute({ name, description }: IRequestCreateCategorie): void {
        const categoryExist = this.repositore.checkIfCategorieAlReadyExist(name)

        if (categoryExist) {
            throw new Error("This category already exist")
        }
        this.repositore.create({ name, description })
    }
}

export { CreateCategorieService }