import { specificationRepositore } from "../../repositories/implementations/SpecificationRepositore"
import { listSpecificationController } from "./listSpecificationController";
import { listSpecificationService } from "./listSpecificationService";

const newListSpecification = specificationRepositore.getSpecificationInstance()

const newListServiceSpecification = new listSpecificationService(newListSpecification)

const newListControllerSpecification = new listSpecificationController(newListServiceSpecification)

export { newListControllerSpecification }