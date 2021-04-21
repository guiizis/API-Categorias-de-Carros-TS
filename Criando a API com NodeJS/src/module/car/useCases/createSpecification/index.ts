import { specificationRepositore } from "../../repositories/implementations/SpecificationRepositore";
import { createSpecificationController } from "./createSpecificationController";
import { createSpecificationService } from "./createSpecificationService";

const newSpecificationRepositore = specificationRepositore.getSpecificationInstance()

const newSpecificationService = new createSpecificationService(newSpecificationRepositore)

const newSpecificationController = new createSpecificationController(newSpecificationService)

export { newSpecificationController }