
import { ISpecificationRepositore } from "../../repositories/ISpecificationRepositore";

interface ISpecificationDTO {
    name: string;
    description: string
}

class createSpecificationService {

    constructor(private specificationRepositore: ISpecificationRepositore) { }

    execute({ name, description }: ISpecificationDTO) {

        const alReadyExist = this.specificationRepositore.checkIfAlreadyExist(name)

        if (alReadyExist) {
            throw new Error("this specification already exist")
        }
        this.specificationRepositore.create({ name, description })
    }
}

export { createSpecificationService }