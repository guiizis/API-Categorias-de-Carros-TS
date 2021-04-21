import { Response, Request } from 'express';
import { listSpecificationService } from './listSpecificationService';

class listSpecificationController {
    constructor(private listSpecificationService: listSpecificationService) { }

    handle(req: Request, res: Response) {
        const allSpecifications = this.listSpecificationService.execute()
        return res.status(200).json(allSpecifications)
    }
}

export { listSpecificationController }