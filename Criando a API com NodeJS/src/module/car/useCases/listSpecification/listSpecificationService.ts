

import { specificationModel } from "../../models/specificationsModel";
import { ISpecificationRepositore } from "../../repositories/ISpecificationRepositore";

class listSpecificationService {

    constructor(private specificationRepositore: ISpecificationRepositore) { }

    execute(): specificationModel[] {
        const allSpecification = this.specificationRepositore.listAllSpecification()
        return allSpecification
    }
}

export { listSpecificationService }