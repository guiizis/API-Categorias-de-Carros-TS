import { specificationModel } from "../../models/specificationsModel";
import { ISpecificationRepositore, specificationDTO } from "../ISpecificationRepositore";



class specificationRepositore implements ISpecificationRepositore {

    static INSTANCE: ISpecificationRepositore

    private specificationList: specificationModel[]

    private constructor() {
        this.specificationList = []
    }

    public static getSpecificationInstance(): ISpecificationRepositore {

        if (!specificationRepositore.INSTANCE) {
            specificationRepositore.INSTANCE = new specificationRepositore()
        }
        return specificationRepositore.INSTANCE

    }

    create({ name, description }: specificationDTO): void {

        const specification = new specificationModel()

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date()
        })

        this.specificationList.push(specification)

    }

    checkIfAlreadyExist(name: string): specificationModel {
        const alReadyExist = this.specificationList.find(specification => specification.name == name)
        return alReadyExist
    }

    listAllSpecification(): specificationModel[] {
        const allSpecifications = this.specificationList
        return allSpecifications
    }

}

export { specificationRepositore }