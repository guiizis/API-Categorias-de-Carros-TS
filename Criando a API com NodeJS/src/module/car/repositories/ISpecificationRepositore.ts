import { specificationModel } from "../models/specificationsModel";

interface specificationDTO {
    name: string;
    description: string
}

interface ISpecificationRepositore {
    create({ name, description }: specificationDTO): void
    checkIfAlreadyExist(name): specificationModel
    listAllSpecification(): specificationModel[]
}

export { ISpecificationRepositore, specificationDTO }