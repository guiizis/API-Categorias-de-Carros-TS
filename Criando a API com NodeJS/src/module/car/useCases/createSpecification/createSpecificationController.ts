import { Request, Response } from 'express';
import { createSpecificationService } from './createSpecificationService';

class createSpecificationController {

    constructor(private specificationService: createSpecificationService) { }

    handle(req: Request, res: Response) {

        const { name, description } = req.body

        this.specificationService.execute({ name, description })

        return res.status(201).send("Specification Inserted")
    }
}

export { createSpecificationController }